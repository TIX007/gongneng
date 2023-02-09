<template>
    <div class="diff-table-container">
        <el-table v-for="(data, i) in completedData" :key="i" :data="data" :row-style="markRowStyles"
            :cell-style="markCellStyles">
            <el-table-column v-for="item in columns" :key="`${i}${item.prop}`" v-bind="item" align="center" />
        </el-table>
    </div>
</template>

<script>
function deepClone(val) {
    // 看需求要不要做深拷贝
    return val;
}

export default {
    name: "DiffTable",
    props: {
        uniqueKey: {
            type: String,
            default: "id"
        },
        dataGroup: {
            type: Array,
            validator: val => val.length === 2
        },
        columns: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            DIFF_CELL_KEY: Symbol("diffCells"),
            COMPLETED_KEY: Symbol("completed")
        };
    },
    computed: {
        completedData({ dataGroup, uniqueKey, columns, DIFF_CELL_KEY, COMPLETED_KEY }) {
            const _dataGroup = deepClone(dataGroup);
            const cacheMap = new Map();
            for (const _row of _dataGroup[0]) {
                _row[DIFF_CELL_KEY] = [];
                cacheMap.set(_row[uniqueKey], _row);
            }
            for (const _row of _dataGroup[1]) {
                for (const { prop } of columns) {
                    if (prop === uniqueKey) continue;
                    const original = cacheMap.get(_row[uniqueKey]);
                    if (!original) continue;
                    _row[COMPLETED_KEY] = true;
                    original[COMPLETED_KEY] = true;
                    _row[prop] !== original[prop] && original[DIFF_CELL_KEY].push(prop);
                }
            }
            this.$_cacheMap = cacheMap;
            return _dataGroup;
        }
    },
    methods: {
        markRowStyles({ row }) {
            return (
                !row[this.COMPLETED_KEY] && {
                    backgroundColor: "#E1F3D8"
                }
            );
        },
        markCellStyles({ row, column }) {
            const { $_cacheMap, uniqueKey, DIFF_CELL_KEY } = this;
            const _cacheRow = $_cacheMap.get(row[uniqueKey]);
            return (
                _cacheRow &&
                _cacheRow[DIFF_CELL_KEY].includes(column.property) && {
                    backgroundColor: "#FDE2E2"
                }
            );
        }
    }
};
</script>

<style lang="scss" scoped>
.diff-table-container {
    display: flex;
    align-items: flex-start;

    .el-table+.el-table {
        margin-left: 20px;
    }
}
</style>
