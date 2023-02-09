### Modal 对话框 图标样式问题

```vue
<template>
  <div>
    <a-button @click="showConfirm">
      Confirm
    </a-button>
</template>
<script>
export default {
  methods: {
      delConfirm(e) {
      //改变onOk中this
      let self = this
      this.$confirm({
        title: '确认删除餐厅吗？',
        content: '删除后，' + e.title + '将立即删除，是否继续？',
        cancelText: '取消',
        okText: '确认',
        icon: h => <a-icon type="close-circle" theme="filled" style='color:#FF3B30' />,
        onOk() {
          // e.lock = true
          // 删除回调，axios二次封装
          delDining({ id: e.id })
            .then(res => {
              //回调成功的逻辑
              console.log(res);
              // 更新
              self.submit()
            })
        },
        onCancel() {
          console.log('Cancel');
        },
        class: 'test',
      });

    },
  }
}
</script>
```

### Form 表单中<a-form-item>不能用v-model当绑定数据

```js
this.form.setFieldsValue({ title: data.title, type: data.type, address: data.address });
```

在setFieldsValue直接赋值

### Ant Design Vue引入中文依然显示英文问题

```vue
<template>
	<a-range-picker :locale="locale"></a-range-picker>       
</template>
<script>
    import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
    export default {
        data() {
        return {
            locale
        };
    },
    }
</script>
```

**在app中加**

```js
// 组件文件引入中文语言包
import zhCN from 'antd/es/locale/zh_CN'; 
// 进行国际化配置
import { ConfigProvider } from 'antd';

...

{/* 用ConfigProvider组件将组件包裹起来即可*/}
<ConfigProvider locale={ zhCN }>
...
</ConfigProvider>

```

