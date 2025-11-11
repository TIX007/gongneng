### 基本使用

```vue
<template>
	<van-cell-group inset style="margin-top:10px;">
        <van-field label="交易概述" v-model="state.Task.remark" rows="2" type="textarea" readonly label-align="top" />
    </van-cell-group>
	
	<van-cell-group inset class="icon" style="margin-top:10px;">
            <van-icon name="comment" color="#22C1EB " />
            <span class="title">审批意见(必填)</span>
        </van-cell-group>
        <van-cell-group inset style="margin-top:10px;">
            <van-form :model="form">
                <van-field v-model="form.suggestion" rows="2" type="textarea" placeholder="请输入审批意见" label-align="top"
                    :rules="[{ required: true, message: '请写入审批意见' }]" />
            </van-form>
        </van-cell-group>
        <van-cell-group inset class="icon" style="margin-top:10px;">
            <van-icon name="underway" color="#22C1EB " />
            <span class="title">审批记录</span>
        </van-cell-group>
        <van-steps direction="vertical" :active-icon="state.recordLength == 0 ? 'success' : 'underway'"
            :active="state.recordLength">
            <!-- item.result 控制审批卡片的颜色 -->
            <van-step v-for="item in state.recordList" :style="{ 'color': item.result == 1 ? 'black' : '' }">
                <h3>【任务】{{ item.name }}</h3>
                <p>审批人：{{ item.assigneeUser.nickName }}</p>
                <!-- <p>创建时间：{{ item.createTime }}</p> -->
                <p v-if="item.endTime">审批时间：{{ item.endTime }}</p>
                <p v-if="item.comment">
                    <van-tag :type="getTimelineItemType(item)">{{ item.comment }}</van-tag>
                </p>
            </van-step>
        </van-steps>
        <van-row justify="space-around" style="margin-top:25px; padding: 10px; background-color:#FFFFFF;">
            <van-button plain type="danger" @click="noSubmit">审批否决</van-button>
            <van-button type="primary" @click="onSubmit">审批通过</van-button>
        </van-row>
</template>
<script setup>
import { reactive, onMounted } from 'vue'
import { useRoute } from "vue-router"
import { showToast, showNotify } from 'vant';
import axios from 'axios'
    
const state = reactive({
    Task: {},
    tranList: []
})

const form = reactive({
    suggestion: '',
})

onMounted(() => {
    init()
})

const route = useRoute()
let { id, tranType, businessId, receiver } = route.query

const init = async () => {
    axios.get("/app/appSelectData/officeMeeting", {
        params: {
            id: businessId,
        }
    }).then((res) => {
        console.log(res, 'res');
        state.Task = res.data;
        tranList()
    })
}

const tranList = async () => {
    axios.get("/app/doc/tranList", {
        params: {
            id: state.Task.entityBizId,
        }
    }).then((res) => {
        console.log(res, 'res11');
        state.tranList = res.data.data;
    })
}

/** 下载按钮操作 */
const handleDownload = (row) => {
    console.log(row, 'row');
    console.log(row.id, 'row');
    $download('/app/doc/downloadApp', { id: row.id }, row.fileName)
}

const noSubmit = (values) => {
    const back = {
        id: id,
        businessId: businessId,
        comment: form.suggestion,
        action: 'back',
        receiver: receiver
    }
    if (form.suggestion == '') {
        showToast('请写入审批意见');
    } else {
        axios.put("/bpm/taskApp/reject", back).then((res) => {
            console.log(res);
            showNotify({ type: res.data.code == 200 ? 'success' : 'danger', message: res.data.msg });
        })
    }
};

const onSubmit = (values) => {
    const data = {
        id: id,
        businessId: businessId,
        comment: form.suggestion,
        action: 'approve',
        receiver: receiver
    }
    console.log('submit', form.suggestion);
    console.log('submit', data);
    if (form.suggestion == '') {
        showToast('请写入审批意见');
    } else {
        axios.put("/bpm/taskApp/approve", data).then((res) => {
            console.log(res);
            showNotify({ type: res.data.code == 200 ? 'success' : 'danger', message: res.data.msg });
        })
    }
};
</script>

<style scoped>
.icon {
    padding: .1875rem .1875rem;
    background-color: #F6F6F6;
}

>>>.van-cell__title span{
    width: 1.125rem;
    white-space: nowrap;
    display: inline-block;
}

.van-ellipsis {
    padding-left: 2.60rem;
    color: #1989fa;
}

.title {
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #464646;
    line-height: .4125rem;
}

.van-row--justify-space-around {
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>
```

### 反向代理

```js
server: {
    proxy: {
      '/app': {
        target: 'http://222.89.153.14:16788',
        changeOrigin: true,
      },
      '/bpm': {
        target: 'http://222.89.153.14:16788',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/app/, '')
      },
    },
  },
```

### VSC报错

```js
Virtual script not found, may missing <script lang="ts"> / "allowJs": true / jsconfig.json. volar
```

**2、出现的原因是**：
没有在配置中添加允许JS的配置（allowJs:true）

**3、如何解决？**
在tsconfig.js里面的compilerOptions对象下添加属性：
“allowJs”: true,

**文件tsconfig.js或者jsconfig.js**

```js
"compilerOptions": {
    "allowJs": true,
}
```

### 自定义组件 name

Vue3 中的 setup 语法糖确实是个好东西，用起来很甜，是糖没错。但是随之而来的问题就是无法自定义组件 name，而我们在使用 keep-alive 的时候，往往是需要用到 name 的，因此我们就需要一个方案来解决这个问题。



**方案一：写两个 script 标签**

最简单的方法就是写两个script 标签，一个用 setup 语法，一个不用 setup 语法，代码如下：

```html
<script>
    export default {
        name: 'demo'
    }
</script>

<script setup>
    // do something...
</script>
```

这种方法简单，但确实不够优雅，对于有强迫症的来说，大概率是接受不了~



**方案二：通过插件**

插件名称：vite-plugin-vue-setup-extend

1、安装

```bash
npm i vite-plugin-vue-setup-extend -D
```

2、配置 ( vite.config.ts )

```js
import { defineConfig } from 'vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
export default defineConfig({
  plugins: [ VueSetupExtend() ]
})
```

3、使用

```html
<script lang="ts" setup name="demo">

</script>
```



虽然说 Vue3 会根据文

### 创建选择器与tag标签联动可拖拽排序组件

```vue
<template>
  <div class="country-select-sort">
    <el-select v-model="selectedAddressIds" multiple filterable remote reserve-keyword clearable placeholder="请输入地址关键词"
      style="width: 100%" @change="handleSelectChange">
      <!-- 表头 -->
      <template #header>
        <div class="option-table-header">
          <span class="option-col" style="width: 120px;">国家名称</span>
          <span class="option-col" style="width: 180px;">所属省份/州名称</span>
          <span class="option-col" style="width: 180px;">城市名称</span>
          <span class="option-col" style="width: 280px;">详细地址</span>
        </div>
      </template>

      <!-- 数据行 -->
      <el-option v-for="item in AddressList" :key="item.id"
        :label="`${item.countryName} / ${item.provinceName || ''} / ${item.cityName || ''} / ${item.detail || ''}`"
        :value="item.id">
        <div class="option-table-row">
          <span class="option-col" style="width: 120px;">{{ item.countryName }}</span>
          <span class="option-col" style="width: 180px;">{{ item.provinceName }}</span>
          <span class="option-col" style="width: 180px;">{{ item.cityName }}</span>
          <span class="option-col" style="width: 280px;">{{ item.detail }}</span>
        </div>
      </el-option>
    </el-select>

    <div class="tag-list">
      <transition-group name="tag-list" tag="div" class="tag-list-container">
        <el-tag v-for="(address, index) in selectedAddresses" :key="index" size="large" draggable="true"
          @dragstart="handleDragStart(index)" @dragover.prevent @dragenter.prevent="handleDragEnter(index)"
          @drop="handleDrop(index)" @dragend="handleDragEnd"
          :class="{ 'dragging': draggedIndex === index, 'drag-over': targetIndex === index }" class="draggable-tag">
          <span class="tag-content">
            {{ address.countryName || address.pickupCountryName || '未知地址' }}
            {{ address.provinceName || address.pickupProvince ? ` - ${address.provinceName || address.pickupProvince}` :
              ''
            }}
            {{ address.cityName || address.pickupCity ? ` - ${address.cityName || address.pickupCity}` : '' }}
          </span>
          <el-icon class="drag-handle">
            <Rank />
          </el-icon>
        </el-tag>
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue';
import { Rank } from '@element-plus/icons-vue';
import { listCountry } from '@/api/manage/country';

// 定义props接收v-model字符串
const props = defineProps({
  modelValue: {
    type: String,
    default: '[]'
  },
  AddressList: {
    type: Array,
    default: () => []
  }
});

// 定义emit用于更新v-model字符串
const emit = defineEmits(['update:modelValue']);

// 内部维护的对象数组状态（由字符串转换而来）
const selectedAddresses = ref<any[]>([]);

// 计算属性：用于el-select的地址ID数组
const selectedAddressIds = computed({
  get() {
    return selectedAddresses.value.map(address => address.id);
  },
  set(ids: string[]) {
    // 根据ID从AddressList中获取完整地址对象
    const newAddresses = ids.map(id => {
      // 尝试从AddressList中获取
      const addressFromList = props.AddressList.find(item => item.id === id);
      if (addressFromList) {
        // 从AddressList中找到的对象，提取需要的属性
        return {
          id: addressFromList.id,
          pickupCity: addressFromList.cityName,
          pickupDetail: addressFromList.detail,
          pickupCountry: addressFromList.countryCode, // 假设countryCode对应pickupCountry
          pickupProvince: addressFromList.provinceName,
          pickupCountryName: addressFromList.countryName
        };
      }

      // 如果没找到，尝试从已选中列表中获取（拖拽排序场景）
      const existingAddress = selectedAddresses.value.find(address => address.id === id);
      if (existingAddress) {
        return existingAddress;
      }

      // 都没找到，创建一个新的临时对象
      return {
        id: `temp_${Date.now()}_${id}`,
        pickupCity: '',
        pickupDetail: '',
        pickupCountry: '',
        pickupProvince: '',
        pickupCountryName: '未知地址'
      };
    });

    selectedAddresses.value = newAddresses;
  }
});

const draggedIndex = ref<number>(-1);
const targetIndex = ref<number>(-1);

// 初始化：将字符串转换为对象数组
watch(() => props.modelValue, (newVal) => {
  console.log('props.modelValue changed:', newVal);
  try {
    if (typeof newVal === 'string' && newVal.trim() !== '') {
      selectedAddresses.value = JSON.parse(newVal);
    } else {
      selectedAddresses.value = [];
    }
  } catch (error) {
    console.error('解析地址列表失败', error);
    selectedAddresses.value = [];
  }
});

// 对象数组变化时更新字符串v-model
watch(() => selectedAddresses.value, (newVal) => {
  console.log('selectedAddresses changed:', newVal);
  try {
    const strValue = JSON.stringify(newVal);
    emit('update:modelValue', strValue);
  } catch (error) {
    console.error('序列化地址列表失败', error);
  }
}, { deep: true });

// 选择变化处理
const handleSelectChange = (values: string[]) => {
  selectedAddressIds.value = values;
};

// 拖拽相关处理函数
const handleDragStart = (index: number) => {
  draggedIndex.value = index;
  event.dataTransfer?.setData('text/plain', index.toString());
};

const handleDragEnter = (index: number) => {
  if (index !== draggedIndex.value) {
    targetIndex.value = index;
  }
};

const handleDrop = (index: number) => {
  if (index !== draggedIndex.value) {
    // 获取被拖拽的地址对象
    const draggedAddress = selectedAddresses.value[draggedIndex.value];

    // 从原位置移除
    selectedAddresses.value.splice(draggedIndex.value, 1);

    // 插入到新位置
    selectedAddresses.value.splice(index, 0, draggedAddress);
  }
};

const handleDragEnd = () => {
  draggedIndex.value = -1;
  targetIndex.value = -1;
};

// 组件挂载时获取地址列表（如果未提供）
onMounted(() => {
  if (!props.AddressList || props.AddressList.length === 0) {
    fetchAddressList();
  }
  if (typeof props.modelValue === 'string' && props.modelValue.trim() !== '') {
    selectedAddresses.value = JSON.parse(props.modelValue);
  } else {
    selectedAddresses.value = [];
  }
});

// 获取地址列表的方法
const fetchAddressList = async () => {
  const queryParams = {
    pageNum: 1,
    pageSize: 100, // 获取更多地址选项
  };
  try {
    // 注意：这里假设使用listCountry获取地址列表，实际可能需要使用专门的地址API
    const res = await listCountry(queryParams);
    if (res.rows && res.rows.length > 0) {
      // 通知父组件更新地址列表
      emit('update:AddressList', res.rows);
    }
  } catch (error) {
    console.error('获取地址列表失败', error);
  }
};
</script>

<style scoped>
.country-select-sort {
  width: 100%;
}

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

.el-tag {
  margin-right: 8px;
  margin-bottom: 8px;
}

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

.tag-list-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.option-table-header {
  font-weight: bold;
  background: #f5f7fa;
  padding: 8px 12px;
  display: flex;
  align-items: center;
}

.option-table-row {
  display: flex;
  align-items: center;
  padding: 8px 12px;
}

.option-col {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
```

#### 使用
```vue
<el-form-item label="按顺序途径的配货提货地" prop="pairPickupAddr">
  <CountrySelectSort v-model="formDistribution.pairPickupAddr" :AddressList="AddressList" />
</el-form-item>
```

### 表单校验不通过滚到不通过项
```js
shipmentTaskFormRef.value?.validate(async (valid: boolean) => {
if (valid) {

 else {
      proxy?.$modal.msgError('表单内容验证规则不通过，请检查修改');
      await nextTick();
      const isError = document.getElementsByClassName('is-error');
      if (isError[0]) {
        isError[0].scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }
```

### 计算是否在打卡范围内

```js
// 计算经纬度差（度）对应的实际距离（米）
export function convertDegreeDiffToMeters(dx, dy, circleLat) {
  // 常量：纬度每度对应的米数（近似值）
  const METERS_PER_DEGREE_LAT = 111319;
  
  // 1. 纬度差（dy）转换为米（直接乘以固定系数）
  const dyMeters = dy * METERS_PER_DEGREE_LAT;
  
  // 2. 经度差（dx）转换为米（需根据纬度调整）
  // - 将纬度（圆心纬度，单位：度）转换为弧度
  const latRad = circleLat * (Math.PI / 180);
  // - 计算该纬度下，经度每度对应的米数
  const metersPerDegreeLon = METERS_PER_DEGREE_LAT * Math.cos(latRad);
  // - 经度差转换为米
  const dxMeters = dx * metersPerDegreeLon;
  
  return { dxMeters, dyMeters };
}

// - point位置经纬数组，circle中心点经纬数组，r打卡半径
export function pointInsideCircle(point, circle, r) {
	if (r === 0) return false;
	var dx = circle[0] - point[0];
	var dy = circle[1] - point[1];
	const { dxMeters, dyMeters } = convertDegreeDiffToMeters(dx, dy, circle[1]);
	const distance = Math.sqrt(dxMeters * dxMeters + dyMeters * dyMeters);
	const distanceFixed = Number(distance.toFixed(5)); 
	const isInside = r > 0 ? distanceFixed <= r : distanceFixed === 0;

	// 返回包含判断结果和距离的对象
	return {
		isInside: isInside,
		distance: distanceFixed
	};
}
```


