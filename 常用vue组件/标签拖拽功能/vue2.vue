<template>
    <div class="app-container">
        <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch"
            label-width="100px" class="form-inline">
            <el-form-item label="路线名称:" prop="routeName" class="form-inline-item">
                <el-input v-model="queryParams.routeName" placeholder="请输入路线名称" clearable @keyup.enter="handleQuery" />
            </el-form-item>
            <el-form-item label="去程返程:" prop="returnJourney" label-width="140px" class="form-inline-item">
                <el-select v-model="queryParams.returnJourney" placeholder="请选择去程返程">
                    <el-option label="去程" value="0"></el-option>
                    <el-option label="返程" value="1"></el-option>
                </el-select>
            </el-form-item>
            <!-- <el-form-item label="按顺序途经的国家:" prop="countrys" class="form-inline-item">
                <el-input v-model="queryParams.countrys" placeholder="请输入按顺序途经的国家" clearable @keyup.enter="handleQuery" />
            </el-form-item> -->
            <el-form-item class="form-inline-item">
                <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
                <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
            </el-form-item>
        </el-form>

        <el-row :gutter="10" class="mb8">
            <el-col :span="1.5">
                <el-button type="primary" plain icon="el-icon-plus" size="mini" @click="handleAdd">新增</el-button>
            </el-col>
            <!-- <el-col :span="1.5">
                <el-button type="success" plain icon="el-icon-edit" size="mini" :disabled="single" @click="handleUpdate"
                    >修改</el-button>
            </el-col> -->
            <el-col :span="1.5">
                <el-button type="danger" plain icon="el-icon-delete" size="mini" :disabled="multiple"
                    @click="handleDelete">删除</el-button>
            </el-col>
            <!-- <el-col :span="1.5">
                <el-button type="warning" plain icon="el-icon-download" size="mini" @click="handleExport"
                    v-hasPermi="['system:dept:export']">导出</el-button>
            </el-col> -->
            <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
        </el-row>

        <el-table v-loading="loading" :data="deptList" @selection-change="handleSelectionChange" border>
            <el-table-column type="selection" width="55" align="center" />
            <el-table-column label="路线名称" align="center" prop="routeName" />
            <el-table-column label="去程返程" align="center" prop="returnJourney" />
            <el-table-column label="按顺序途经的国家" align="center" prop="countrys" min-width="180">
                <template slot-scope="scope">
                    <div class="tag-list-container">
                        <el-tag v-for="(tag, index) in scope.row.countrys?.split(',')" :key="index">
                            {{ getCountryName(tag) }}
                        </el-tag>
                    </div>
                </template>
            </el-table-column>
            <!-- <el-table-column label="详细线路" align="center" prop="detail" /> -->
            <el-table-column label="备注" align="center" prop="remark" />
            <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
                <template slot-scope="scope">
                    <el-button size="mini" type="text" icon="el-icon-edit"
                        @click="handleUpdate(scope.row)">修改</el-button>
                    <el-button size="mini" type="text" icon="el-icon-delete"
                        @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <pagination v-show="total > 0" :total="total" :page.sync="queryParams.pageNum"
            :limit.sync="queryParams.pageSize" @pagination="getList" />

        <!-- 添加或修改线路对话框 -->
        <el-dialog :title="title" :visible.sync="open" width="700px" append-to-body>
            <el-alert title="途经的国家不支持修改，请确保途经国家正确" type="warning" :closable="false" show-icon
                style="margin-bottom: 20px;" />
            <el-form ref="form" :model="form" :rules="rules" label-width="140px">
                <el-form-item label="路线名称" prop="routeName">
                    <el-input v-model="form.routeName" placeholder="请输入路线名称" :disabled="title == '修改线路'" />
                </el-form-item>
                <el-form-item label="去程返程" prop="returnJourney">
                    <!-- <el-input v-model="form.returnJourney" placeholder="请输入去程返程" /> -->
                    <el-select v-model="form.returnJourney" placeholder="请选择去程返程">
                        <el-option label="去程" value="0"></el-option>
                        <el-option label="返程" value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="按顺序途经的国家" prop="countrys">
                    <div v-if="title == '修改线路'">
                        <div class="tag-list-container">
                            <el-tag v-for="(tag, index) in form.countrys?.split(',')" :key="index">
                                {{ getCountryName(tag) }}
                            </el-tag>
                        </div>
                    </div>
                    <div v-else>
                        <el-select v-model="routines" filterable multiple placeholder="请选择途经的国家" style="width: 100%">
                            <el-option v-for="item in CountryList" :key="item.id" :label="item.countryName"
                                :value="item.alpha3Code">
                            </el-option>
                        </el-select>
                        <div class="tag-list">
                            <transition-group name="tag-list" tag="div" class="tag-list-container">
                                <div v-for="(tag, index) in routines" :key="tag" draggable="true"
                                    @dragstart="handleDragStart($event, tag, index)"
                                    @dragenter.prevent="handleDragEnter($event, index)" @dragover.prevent
                                    @drop.prevent="handleDrop($event, index)" @dragend="handleDragEnd($event)"
                                    :class="{ 'dragging': draggedIndex === index, 'drag-over': targetIndex === index }"
                                    class="custom-tag">
                                    <span class="tag-content">{{ getCountryName(tag) }}</span>
                                    <i class="el-icon-rank drag-handle"></i>
                                </div>
                            </transition-group>
                        </div>
                    </div>

                </el-form-item>
                <el-form-item label="备注" prop="remark">
                    <el-input v-model="form.remark" type="textarea" placeholder="请输入内容" />
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submitForm">确 定</el-button>
                <el-button @click="cancel">取 消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>

export default {
    name: "AddressList",
    data() {
        return {
            // 遮罩层
            loading: true,
            // 选中数组
            ids: [],
            routeNames: [],
            CountryList: [],
            routines: [],
            // 非单个禁用
            single: true,
            // 非多个禁用
            multiple: true,
            // 显示搜索条件
            showSearch: true,
            // 总条数
            total: 0,
            // 线路表格数据
            deptList: [],
            // 弹出层标题
            title: "",
            // 是否显示弹出层
            open: false,
            // 查询参数
            queryParams: {
                pageNum: 1,
                pageSize: 10,
                countrys: undefined,
                routeName: undefined,
                returnJourney: undefined,
            },
            draggedTag: null,
            draggedIndex: -1,
            targetIndex: -1,
            // 表单参数
            form: {},
            // 表单校验
            rules: {
                id: [
                    { required: true, message: "城市id不能为空", trigger: "blur" }
                ],
                countrys: [
                    { required: true, message: "按顺序途经的国家不能为空", trigger: "blur" }
                ],
                routeName: [
                    { required: true, message: "路线名称不能为空", trigger: "blur" }
                ],
                returnJourney: [
                    { required: true, message: "去程返程不能为空", trigger: "blur" }
                ],
            }
        }
    },
    created() {
        this.getList()
        this.getCountryList()
    },
    // computed: {
    //     routines: {
    //         get() {
    //             return this.form.countrys ? this.form.countrys.split(',') : []
    //         },
    //         set(value) {
    //             this.form.countrys = value.join(',')
    //             return value.join(',')
    //         }
    //     }
    // },
    watch: {
        routines: {
            handler(newVal, oldVal) {
                this.form.countrys = newVal.join(',')
            },
            deep: true
        }
    },
    methods: {
        /** 查询线路列表 */
        getList() {
            this.loading = true
            this.axios.post('/countryRoutes/page', null, { params: this.queryParams }).then(response => {
                this.deptList = response.data.records
                this.total = response.data.total
                this.loading = false
            }).catch((err) => {
                console.log(err);
            });
        },
        getCountryList() {
            const queryParams = { countryName: undefined }
            this.axios.post('/country/queryList', null, { params: queryParams }).then(response => {
                this.CountryList = response.data
            }).catch((err) => {
                console.log(err);
            });
        },
        // 取消按钮
        cancel() {
            this.open = false
            this.reset()
        },
        // 表单重置
        reset() {
            this.form = {
                id: undefined,
                countrys: undefined,
                routeName: undefined,
                returnJourney: undefined,
                remark: undefined,
            }
            this.$resetForm("form")
            this.routines = []
        },
        /** 搜索按钮操作 */
        handleQuery() {
            this.queryParams.pageNum = 1
            this.getList()
        },
        /** 重置按钮操作 */
        resetQuery() {
            this.$resetForm("queryForm")
            this.handleQuery()
        },
        // 多选框选中数据
        handleSelectionChange(selection) {
            this.ids = selection.map(item => item.id)
            this.routeNames = selection.map(item => item.routeName)
            this.single = selection.length !== 1
            this.multiple = !selection.length
        },
        /** 新增按钮操作 */
        handleAdd() {
            this.reset()
            this.open = true
            this.title = "添加线路"
        },
        /** 修改按钮操作 */
        handleUpdate(row) {
            this.reset()
            // const deptId = row.deptId || this.ids
            this.form = row
            this.routines = this.form.countrys.split(',')
            this.open = true
            this.title = "修改线路"
        },
        /** 提交按钮 */
        submitForm() {
            console.log(this.routines);
            this.$refs["form"].validate(valid => {
                if (valid) {
                    if (this.form.id != null) {
                        // 从this.form中去除updateTime
                        const { updateTime, ...form } = this.form
                        this.axios.post('/countryRoutes/edit', null, { params: form }).then(response => {
                            this.$message.success("修改成功")
                            this.open = false
                            this.getList()
                        }).catch((err) => {
                            console.log(err);
                        });
                    } else {
                        this.axios.post('/countryRoutes/create', null, { params: this.form }).then(response => {
                            this.$message.success("新增成功")
                            this.open = false
                            this.getList()
                        }).catch((err) => {
                            console.log(err);
                        });
                    }
                }
            })
        },
        /** 删除按钮操作 */
        handleDelete(row) {
            const deptIds = row.id || this.ids
            const routeNames = row.routeName || this.routeNames
            this.$confirm('是否确认删除路线名为"' + '<strong style="color: red;"> ' + routeNames + '</strong>' + '"的数据项？', {
                dangerouslyUseHTMLString: true
            }).then(() => {
                return this.axios.delete('/countryRoutes/' + deptIds)
            }).then(() => {
                this.getList()
                this.$message.success("删除成功")
            }).catch((e) => {
                console.log(e)
            })
        },
        // 开始拖拽
        handleDragStart(event, tag, index) {
            this.draggedTag = tag;
            this.draggedIndex = index;
            // 设置拖拽效果
            event.dataTransfer.effectAllowed = 'move';
            // 设置拖拽数据
            event.dataTransfer.setData('text/plain', tag);
            // 设置拖拽时的图片
            const dragImage = event.target.cloneNode(true);
            dragImage.style.position = 'absolute';
            dragImage.style.top = '-1000px';
            document.body.appendChild(dragImage);
            event.dataTransfer.setDragImage(dragImage, 0, 0);
            setTimeout(() => {
                document.body.removeChild(dragImage);
            }, 0);
        },
        // 拖拽进入
        handleDragEnter(event, index) {
            if (index !== this.draggedIndex) {
                this.targetIndex = index;
            }
        },
        // 放置
        handleDrop(event, index) {
            if (index !== this.draggedIndex) {
                const newRoutines = [...this.routines];
                const draggedItem = newRoutines[this.draggedIndex];
                newRoutines.splice(this.draggedIndex, 1);
                newRoutines.splice(index, 0, draggedItem);
                this.$set(this, 'routines', newRoutines);
            }
            this.targetIndex = -1;
        },
        // 拖拽结束
        handleDragEnd(event) {
            this.draggedTag = null;
            this.draggedIndex = -1;
            this.targetIndex = -1;
        },
        getCountryName(code) {
            const country = this.CountryList.find(item => item.alpha3Code === code);
            return country?.countryName;
        }
    }
}
</script>

<style scoped>
.tag-list {
    margin: 10px 0;
    min-height: 40px;
    padding: 10px;
    border: 1px dashed #dcdfe6;
    border-radius: 4px;
    background-color: #fafafa;
}

.tag-list-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.custom-tag {
    cursor: move;
    user-select: none;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    transition: all 0.3s;
    margin: 4px;
    position: relative;
    padding: 0 10px;
    height: 32px;
    line-height: 30px;
    font-size: 12px;
    color: #409eff;
    background-color: #ecf5ff;
    border: 1px solid #d9ecff;
    border-radius: 4px;
}

.custom-tag.dragging {
    opacity: 0.5;
    transform: scale(1.05);
    background-color: #f0f9eb;
    z-index: 1000;
}

.custom-tag.drag-over {
    border: 2px dashed #409eff;
    background-color: #ecf5ff;
}

.tag-content {
    pointer-events: none;
}

.drag-handle {
    cursor: move;
    color: #909399;
    font-size: 14px;
    margin-left: 4px;
}

.drag-handle:hover {
    color: #409eff;
}

/* 添加过渡动画 */
.tag-list-enter-active,
.tag-list-leave-active {
    transition: all 0.3s;
}

.tag-list-enter,
.tag-list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.tag-list-move {
    transition: transform 0.3s;
}
</style>