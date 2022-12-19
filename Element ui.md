### ElementUI组件下拉框绑定点击事件无效的解决方案

```vue
<el-dropdown>
    <span class="el-dropdown-link" ref="echarType">
    柱状图<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown" >
    <el-dropdown-item>柱状图</el-dropdown-item>
    <el-dropdown-item @click.native="seeTable">表格</el-dropdown-item>
    </el-dropdown-menu>
</el-dropdown>

```

### elment ui 使用标签时两个标签会连在一起

添加下方样式即可

```css
.el-tag+.el-tag{
  margin-left: 10px;
}
```

### 弹出框

```vue
<parameter-edit :dialog-visible="dialog.isVisible" :type="dialog.type" @close="editClose" @success="editSuccess" ref="edit" />
```

dialog-visible初始化data数据，type标题，close关闭回调函数，success成功回调函数

### CSS输入框样式修改并加图片

（样式修改不了时可以用>>>深度查找即可修改）

```css
>>> .username .el-input__inner{
/*no-repeat:图片不重复；10px：控制图片左边距 center：图片上下居中*/
	background:url(@/assets/img/登录2_slices/矢量智能对象\(1\).png) no-repeat 484px center;  
	padding: 0 50px 0 42px; /*输入内容左右边距控制*/
	width: 534px;
	height: 88px;
	font-size: 23px;
}
```

### el-menu鼠标悬停效果修改

```css
.el-menu .el-menu-item:hover {
  color: #E8161A!important;
}
```

### 表单校验数字类型限制

v-model后加上.number

```vue
<el-form-item label="设备总数" prop="totalequipment">
          <el-input v-model.number="form.totalequipment" placeholder="请输入设备总数" />
</el-form-item>

rules: {
        totalequipment: [
          { required: true, message: '设备总数不能为空' },
          { type: 'number', message: '设备总数必须为数字值' }
        ]
      }
```

### elementUI的table表格列宽自适应内容宽度

businmantableData是数据data

```html
<el-table-column
  prop="name"
  label="姓名"
  :width="flexColumnWidth('name', businmantableData)"
>
</el-table-column>

```

```js
// 自适应表格列宽
flexColumnWidth(str, tableData, flag = "max") {
   // str为该列的字段名(传字符串);tableData为该表格的数据源(传变量);
   // flag为可选值，可不传该参数,传参时可选'max'或'equal',默认为'max'
   // flag为'max'则设置列宽适配该列中最长的内容,flag为'equal'则设置列宽适配该列中第一行内容的长度。
   str = str + "";
   let columnContent = "";
   if (
     !tableData ||
     !tableData.length ||
     tableData.length === 0 ||
     tableData === undefined
   ) {
     return;
   }
   if (!str || !str.length || str.length === 0 || str === undefined) {
     return;
   }
   if (flag === "equal") {
     // 获取该列中第一个不为空的数据(内容)
     for (let i = 0; i < tableData.length; i++) {
       if (tableData[i][str].length > 0) {
         // console.log('该列数据[0]:', tableData[0][str])
         columnContent = tableData[i][str];
         break;
       }
     }
   } else {
     // 获取该列中最长的数据(内容)
     let index = 0;
     for (let i = 0; i < tableData.length; i++) {
       if (tableData[i][str] === null) {
         return;
       }
       const now_temp = tableData[i][str] + "";
       const max_temp = tableData[index][str] + "";
       if (now_temp.length > max_temp.length) {
         index = i;
       }
     }
     columnContent = tableData[index][str];
   }
   // console.log('该列数据[i]:', columnContent)
   // 以下分配的单位长度可根据实际需求进行调整
   let flexWidth = 0;
   for (const char of columnContent) {
     if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
       // 如果是英文字符，为字符分配8个单位宽度
       flexWidth += 8;
     } else if (char >= "\u4e00" && char <= "\u9fa5") {
       // 如果是中文字符，为字符分配15个单位宽度
       flexWidth += 17;
     } else {
       // 其他种类字符，为字符分配8个单位宽度
       flexWidth += 15;
     }
   }
   if (flexWidth < 100) {
     // 设置最小宽度
     flexWidth = 100;
   }
   // if (flexWidth > 250) {
   //   // 设置最大宽度
   //   flexWidth = 250
   // }
   return flexWidth + "px";
 },

```

### elementUI表格滚动条修改（完整版）

```scss
// ----------修改elementui表格的默认样式-----------
.el-table__body-wrapper {
  &::-webkit-scrollbar {
    height: 7px;
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    // 轨道颜色
    background-color: #fff;
  }
  &::-webkit-scrollbar-thumb {
    // 滚动块颜色
    background-color: #E6E9ED;
    // border-radius: 5px;

  }
  &::-webkit-scrollbar-thumb:hover {
    // hover高亮
    background-color: #d5d8db;
  }

}
 
// 解决表格固定列问题
.el-table__fixed,
.el-table__fixed-right{
  height: calc(100% - 7px) !important;
  box-shadow: -5px -2px 10px rgba(0,0,0,.12) !important;
  .el-table__fixed-body-wrapper{
    height: calc(100% - 36px) !important;
  }
}
// 当表格没有滚动条时
.el-table__body-wrapper.is-scrolling-none~.el-table__fixed-right{
  height: 100% !important;
  bottom: 0 !important;
  box-shadow: none !important;
}
// 当表格有纵向滚动条时
.el-table--scrollable-y .el-table__fixed-right{
  right: 7px !important;
}
// 当表格只有横向滚动条，没有纵向滚动条时
.el-table--scrollable-x:not(.el-table--scrollable-y) .el-table__fixed-right{
  right: 0 !important;
}


```

