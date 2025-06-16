<template>
  <div class="p-2">
    <transition :enter-active-class="proxy?.animate.searchAnimate.enter"
      :leave-active-class="proxy?.animate.searchAnimate.leave">
      <div v-show="showSearch" class="mb-[10px]">
        <el-card shadow="hover">
          <el-form ref="queryFormRef" :model="queryParams" :inline="true">
            <el-form-item label="线路名" prop="routeName">
              <el-input v-model="queryParams.routeName" placeholder="请输入线路名" clearable @keyup.enter="handleQuery" />
            </el-form-item>
            <el-form-item label="去返程" prop="returnJourney">
              <el-select v-model="queryParams.returnJourney" placeholder="请选择去返程" clearable>
                <el-option v-for="dict in return_journey" :key="dict.value" :label="dict.label" :value="dict.value" />
              </el-select>
            </el-form-item>
            <!-- <el-form-item label="按顺序途经的国家" prop="countrys">
              <el-input v-model="queryParams.countrys" placeholder="请输入按顺序途经的国家" clearable @keyup.enter="handleQuery" />
            </el-form-item> -->
            <el-form-item label="状态" prop="status">
              <el-select v-model="queryParams.status" placeholder="请选择状态" clearable>
                <el-option v-for="dict in status" :key="dict.value" :label="dict.label" :value="dict.value" />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
              <el-button icon="Refresh" @click="resetQuery">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </transition>

    <el-card shadow="never">
      <template #header>
        <el-row :gutter="10" class="mb8">
          <el-col :span="1.5">
            <el-button type="primary" plain icon="Plus" @click="handleAdd"
              v-hasPermi="['manage:countryRoutes:add']">新增</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button type="success" plain icon="Edit" :disabled="single" @click="handleUpdate()"
              v-hasPermi="['manage:countryRoutes:edit']">修改</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button type="danger" plain icon="Delete" :disabled="multiple" @click="handleDelete()"
              v-hasPermi="['manage:countryRoutes:remove']">删除</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button type="warning" plain icon="Download" @click="handleExport"
              v-hasPermi="['manage:countryRoutes:export']">导出</el-button>
          </el-col>
          <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
        </el-row>
      </template>

      <el-table v-loading="loading" :data="countryRoutesList" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center" />
        <!-- <el-table-column label="跨境线路id" align="center" prop="id" v-if="true" /> -->
        <el-table-column label="线路名" align="center" prop="routeName" />
        <el-table-column label="去返程" align="center" prop="returnJourney">
          <template #default="scope">
            <dict-tag :options="return_journey" :value="scope.row.returnJourney" />
          </template>
        </el-table-column>
        <el-table-column label="按顺序途经的国家" align="center" prop="countrys" min-width="180px">
          <template #default="scope">
            <el-tag v-for="(tag, index) in scope.row.countrys?.split(',')" :key="index">
              {{ getCountryName(tag) }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="备注" align="center" prop="remark" />
        <el-table-column label="状态" align="center" prop="status">
          <template #default="scope">
            <dict-tag :options="status" :value="scope.row.status" />
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
          <template #default="scope">
            <el-tooltip content="修改" placement="top">
              <el-button link type="primary" icon="Edit" @click="handleUpdate(scope.row)"
                v-hasPermi="['manage:countryRoutes:edit']"></el-button>
            </el-tooltip>
            <el-tooltip content="删除" placement="top">
              <el-button link type="primary" icon="Delete" @click="handleDelete(scope.row)"
                v-hasPermi="['manage:countryRoutes:remove']"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

      <pagination v-show="total > 0" :total="total" v-model:page="queryParams.pageNum"
        v-model:limit="queryParams.pageSize" @pagination="getList" />
    </el-card>
    <!-- 添加或修改跨境线路对话框 -->
    <el-dialog :title="dialog.title" v-model="dialog.visible" width="800px" append-to-body>
      <el-alert title="途经的国家不支持修改，请确保途经国家正确" type="warning" :closable="false" show-icon style="margin-bottom: 20px;" />
      <el-form ref="countryRoutesFormRef" :model="form" :rules="rules" label-width="160px">
        <el-form-item label="线路名" prop="routeName">
          <el-input v-model="form.routeName" placeholder="请输入线路名" :disabled="dialog.title == '修改跨境线路'" />
        </el-form-item>
        <el-form-item label="去返程" prop="returnJourney">
          <el-select v-model="form.returnJourney" placeholder="请选择去返程">
            <el-option v-for="dict in return_journey" :key="dict.value" :label="dict.label"
              :value="dict.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="按顺序途经的国家" prop="countrys">
          <div v-if="dialog.title == '修改跨境线路'">
            <div>
              <el-tag v-for="(tag, index) in form.countrys?.split(',')" :key="index">
                {{ getCountryName(tag) }}
              </el-tag>
            </div>
          </div>
          <div v-else style="width: 100%">
            <el-select v-model="routines" filterable multiple placeholder="请选择途经的国家" style="width: 100%">
              <el-option v-for="item in CountryList" :key="item.id" :label="item.countryName" :value="item.alpha3Code">
              </el-option>
            </el-select>
            <div class="tag-list">
              <transition-group name="tag-list" tag="div" class="tag-list-container">
                <el-tag v-for="(tag, index) in routines" :key="index" size="large" draggable="true"
                  @dragstart="handleDragStart(tag, index)" @dragover.prevent @dragenter.prevent="handleDragEnter(index)"
                  @drop="handleDrop(index)" @dragend="handleDragEnd"
                  :class="{ 'dragging': draggedIndex === index, 'drag-over': targetIndex === index }"
                  class="draggable-tag">
                  <span class="tag-content">{{ getCountryName(tag) }}</span>
                  <el-icon class="drag-handle">
                    <Rank />
                  </el-icon>
                </el-tag>
              </transition-group>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="form.remark" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-radio-group v-model="form.status" :disabled="dialog.title == '添加跨境线路'">
            <el-radio v-for="dict in status" :key="dict.value" :value="dict.value">{{ dict.label }}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button :loading="buttonLoading" type="primary" @click="submitForm">确 定</el-button>
          <el-button @click="cancel">取 消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup name="CountryRoutes" lang="ts">
import { listCountryRoutes, getCountryRoutes, delCountryRoutes, addCountryRoutes, updateCountryRoutes } from '@/api/manage/countryRoutes';
import { CountryRoutesVO, CountryRoutesQuery, CountryRoutesForm } from '@/api/manage/countryRoutes/types';
import { listCountry } from '@/api/manage/country';

const { proxy } = getCurrentInstance() as ComponentInternalInstance;
const { status, return_journey } = toRefs<any>(proxy?.useDict('status', 'return_journey'));

const countryRoutesList = ref<CountryRoutesVO[]>([]);
const buttonLoading = ref(false);
const loading = ref(true);
const showSearch = ref(true);
const ids = ref<Array<string | number>>([]);
const routeNames = ref<Array<string | number>>([]);
const single = ref(true);
const multiple = ref(true);
const total = ref(0);

const queryFormRef = ref<ElFormInstance>();
const countryRoutesFormRef = ref<ElFormInstance>();

const dialog = reactive<DialogOption>({
  visible: false,
  title: ''
});

const initFormData: CountryRoutesForm = {
  id: undefined,
  routeName: undefined,
  returnJourney: undefined,
  countrys: undefined,
  remark: undefined,
  status: '0',
}
const data = reactive<PageData<CountryRoutesForm, CountryRoutesQuery>>({
  form: { ...initFormData },
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    routeName: undefined,
    returnJourney: undefined,
    countrys: undefined,
    status: undefined,
    params: {
    }
  },
  rules: {
    id: [
      { required: true, message: "跨境线路id不能为空", trigger: "blur" }
    ],
    routeName: [
      { required: true, message: "线路名不能为空", trigger: "blur" }
    ],
    returnJourney: [
      { required: true, message: "去返程不能为空", trigger: "change" }
    ],
    countrys: [
      { required: true, message: "按顺序途经的国家不能为空", trigger: "blur" }
    ],
  }
});

const { queryParams, form, rules } = toRefs(data);

/** 查询跨境线路列表 */
const getList = async () => {
  loading.value = true;
  const res = await listCountryRoutes(queryParams.value);
  countryRoutesList.value = res.rows;
  total.value = res.total;
  loading.value = false;
}

/** 取消按钮 */
const cancel = () => {
  reset();
  dialog.visible = false;
}

/** 表单重置 */
const reset = () => {
  form.value = { ...initFormData };
  countryRoutesFormRef.value?.resetFields();
}

/** 搜索按钮操作 */
const handleQuery = () => {
  queryParams.value.pageNum = 1;
  getList();
}

/** 重置按钮操作 */
const resetQuery = () => {
  queryFormRef.value?.resetFields();
  handleQuery();
}

/** 多选框选中数据 */
const handleSelectionChange = (selection: CountryRoutesVO[]) => {
  ids.value = selection.map(item => item.id);
  routeNames.value = selection.map(item => item.routeName);
  single.value = selection.length != 1;
  multiple.value = !selection.length;
}

/** 新增按钮操作 */
const handleAdd = () => {
  reset();
  dialog.visible = true;
  dialog.title = "添加跨境线路";
}

/** 修改按钮操作 */
const handleUpdate = async (row?: CountryRoutesVO) => {
  reset();
  const _id = row?.id || ids.value[0]
  const res = await getCountryRoutes(_id);
  Object.assign(form.value, res.data);
  dialog.visible = true;
  dialog.title = "修改跨境线路";
}

/** 提交按钮 */
const submitForm = () => {
  console.log(form.value);
  countryRoutesFormRef.value?.validate(async (valid: boolean) => {
    if (valid) {
      buttonLoading.value = true;
      if (form.value.id) {
        await updateCountryRoutes(form.value).finally(() => buttonLoading.value = false);
      } else {
        await addCountryRoutes(form.value).finally(() => buttonLoading.value = false);
      }
      proxy?.$modal.msgSuccess("操作成功");
      dialog.visible = false;
      await getList();
    }
  });
}

/** 删除按钮操作 */
const handleDelete = async (row?: CountryRoutesVO) => {
  const _ids = row?.id || ids.value;
  const _routeNames = row?.routeName || routeNames.value
  await proxy?.$modal.confirm('是否确认删除跨境线路名为"' + '<strong style="color: red;"> ' + _routeNames + '</strong>' + '"的数据项？').finally(() => loading.value = false);
  await delCountryRoutes(_ids);
  proxy?.$modal.msgSuccess("删除成功");
  await getList();
}

/** 导出按钮操作 */
const handleExport = () => {
  proxy?.download('manage/countryRoutes/export', {
    ...queryParams.value
  }, `countryRoutes_${new Date().getTime()}.xlsx`)
}

// 国家列表
const CountryList = ref([]);
const getCountryList = async () => {
  const queryParams = {
    pageNum: 1,
    pageSize: 50,
  };
  const res = await listCountry(queryParams);
  if (res.rows.length > 0) {
    CountryList.value = res.rows
  } else {
    CountryList.value = [];
  }
};

// 国家转换
const getCountryName = (code) => {
  const country = CountryList.value.find(item => item.alpha3Code === code);
  return country?.countryName;
}

// 国家排序
// 定义需要的响应式变量
const draggedTag = ref<any>(null);
const draggedIndex = ref<number>(-1);
const targetIndex = ref<number>(-1);
const routines = ref<any[]>([]);

watch(
  () => routines.value,
  (newVal) => {
    if (Array.isArray(newVal)) {
      form.value.countrys = newVal.join(',')
    }
  },
  { deep: true }
)

// 开始拖拽
const handleDragStart = (tag: any, index: number) => {
  draggedTag.value = tag;
  draggedIndex.value = index;
  // 设置拖拽数据，虽然这里用不到但为了兼容性
  event.dataTransfer?.setData('text/plain', tag.id.toString());
};

// 拖拽进入
const handleDragEnter = (index: number) => {
  // 避免自己拖到自己
  if (index !== draggedIndex.value) {
    targetIndex.value = index;
  }
};

// 放置
const handleDrop = (index: number) => {
  // 避免自己拖到自己
  if (index !== draggedIndex.value) {
    // 从原位置移除
    routines.value.splice(draggedIndex.value, 1);
    // 插入到新位置
    routines.value.splice(index, 0, draggedTag.value);
  }
};

// 拖拽结束
const handleDragEnd = () => {
  draggedTag.value = null;
  draggedIndex.value = -1;
  targetIndex.value = -1;
};


onMounted(() => {
  getList();
  getCountryList();
});
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

.draggable-tag {
  cursor: move;
  user-select: none;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s;
  margin: 4px;
  position: relative;
}

.draggable-tag.dragging {
  opacity: 0.5;
  transform: scale(1.05);
  background-color: #f0f9eb;
  z-index: 1000;
}

.draggable-tag.drag-over {
  border: 2px dashed #409eff;
  background-color: #ecf5ff;
}

.tag-content {
  pointer-events: none;
  font-size: 16px;
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

/* 确保拖拽时的标签样式正确 */
.el-tag {
  margin-right: 8px;
  margin-bottom: 8px;
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