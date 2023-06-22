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
