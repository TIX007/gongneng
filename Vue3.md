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

