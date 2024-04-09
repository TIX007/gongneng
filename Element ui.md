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
或者
```vue
 @input="(v) => (scope.row.amountWithTax = v.replace(/[^0-9.]/g, ''))"
```

### 表单校验最大值与最小值
```vue
<el-table-column prop="outerDiscountAmountWithTax" label="折扣金额" align="center" sortable width="120">
    <template slot-scope="scope">
      <el-input type="number" v-model="scope.row.outerDiscountAmountWithTax"
	@input="(v) => (scope.row.outerDiscountAmountWithTax = (v <= 0 ? 0 : (v > scope.row.amountWithTax ? scope.row.amountWithTax : v)))"
	:disabled="!scope.row.amountWithTax"></el-input>
    </template>
  </el-table-column>
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

### 日期时间选择器校验

```js
rules: {
	dateRange: [
          {
            type: 'array',
            required: true,
            message: '请选择日期区间',
            fields: {
              // tpye类型试情况而定,所以如果返回的是date就改成date,如果返回的是string就改成string
              0: { type: 'date', required: true, message: '请选择开始日期' },
              1: { type: 'date', required: true, message: '请选择结束日期' },
            },
          },
        ],
 }

```

### 表格懒加载

```html
<el-table
      ref="tableRef"
      v-if="refreshTable"
      v-loading="loading"
      style="width: 100%"
      :data="relatedPartyList"
      row-key="relationBizId"
      lazy
      :load="getChildrens"
      @selection-change="handleSelectionChange"
      :fit="true"
      :default-expand-all="isExpandAll"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      border
    >
```

//存储节点

   `maps: new Map()`,

```js
//树表格懒加载方法（根据一级列表查n级）
    getChildrens(tree, treeNode, resolve) {
      this.queryParamsTree.entityBizId = tree.entityBizId;
      this.queryParamsTree.bizId = tree.bizId;
      this.queryParamsTree.relationBizId = tree.relationBizId;
      listSubItem(this.queryParamsTree).then((res) => {
        // console.log(res,'shu');
        // console.log(resolve(res.list),'resolve');
        resolve(res.list);
      });
      this.maps.set(tree.id, {
        tree,
        treeNode,
        resolve,
      }); //把查询到的节点信息储存到map中
    },
```

### el-table-tree树形时固定表头滚动底部表格错位问题

先写出调整错位的css

```scss
// 调整横向滚动条错位问题
.table-fixed{
    .el-table__fixed {
        top: -7px;
        .el-table__fixed-header-wrapper {
            top: 10px;
            z-index: 10;
        }
    }
    .el-table__fixed-right {
        top: -7px;
        .el-table__fixed-header-wrapper {
            top: 10px;
            z-index: 10;
        }
    }
}
```

根据监听滚动条的位置来动态添加*table-fixed*的样式

设置*isBottom*来判断滚动条是否在底部

```vue
<template>
	<el-table
		:class="isBottom ? 'table-fixed' : '' " >
    </el-table>
</template>

<script>
    export default {
        data(){
            return{
                isBottom:undefined;
            }
        },
        // 表格滚动事件
        scrollBars(){
            let _self = this;
            // 注意 this 指向  方法内部this指向的是该节点 而不是vue实例
            const selectWrapper = document.querySelector('.el-table__body-wrapper');
            // 监视滚动事件
            selectWrapper.addEventListener('scroll',function () {
                let sign = 0;
                const scrollDistance = this.scrollHeight - this.scrollTop - this.clientHeight;
                // 滚动到底部返回true
                _self.isBottom = scrollDistance <= sign;
            })
        }
    }
</script>
	
```



### 解决el-tree或树形列表懒加载数据改变后不能实时刷新问题

封装一个refreshLoadTree方法，每次增删改查操作后都调用一下，以此达到实时刷新目的

```js
refreshLoadTree(lazyTreeNodeMap, maps, parentId) {
      if (maps.get(parentId)) {
        const { tree, treeNode, resolve } = maps.get(parentId)
        this.$set(lazyTreeNodeMap, parentId, [])
        if (tree) { // 重新执行父节点加载子级操作
          this.getChildrens(tree, treeNode, resolve)
          if (tree.parentId) { // 若存在爷爷结点，则执行爷爷节点加载子级操作，防止最后一个子节点被删除后父节点不显示删除按钮
            const a = maps.get(tree.parentId)
            this.getChildrens(a.tree, a.treeNode, a.resolve)
          }
        }
      }
    }
```

这里传入的三个参数分别是：组件懒加载数据的节点，data return的map，以及**被操作的节点的\**父节点\****

```js
this.refreshLoadTree(this.$refs.table.store.states.lazyTreeNodeMap, this.maps, this.temp.parentId)
```

**方法调用时首先从map中取出刚刚加载过子级的节点的数据，再用this.$set清空对应父节点的数据，实现了视图的实时刷新，再通过取出的数据重新加载父节点数据。**

记得对组件加上命名

```html
<el-table
      ref="table"
    >
```

[(35条消息) 解决el-tree或树形列表懒加载数据改变后不能实时刷新问题_明天赚到五百万的博客-CSDN博客_删除tree数据后刷新不及时](https://blog.csdn.net/m0_58191077/article/details/121426275)

### element的Tree组件二次封装（含右键菜单）

**`Tree.vue`文件**

```vue
<template>
  <div class="tree-container">
    <!-- 点击node节点,才加载子节点的时候，需设置 :lazy="true" -->

    <el-tree
      class="_tree"
      :data="treeList"
      :props="defaultProps"
      @node-expand="handleNodeExpand"
      @node-click="handleNodeClick"
      @node-contextmenu="handleRightClick"
      :default-expanded-keys="expandedKeys"
      :node-key="nodeKey"
      :highlight-current="true"
      ref="comnTree"
      :style="
        `max-height:${treeHeight}px;max-width:${treeWidth}px;overflow-x:auto;}`
      "
    >
      <span slot-scope="{ node, data }">
        <i :class="data.icon ? data.icon : 'el-icon-folder-opened'"></i>
        <span class="tree_label">{{ node.label }}</span>
        <span
          class="tree_label"
          v-if="data.total || data.total === 0"
          title="数量"
          >({{ data.total }})</span
        >
      </span>
    </el-tree>

    <el-popover
      placement="right"
      width="150"
      trigger="manual"
      v-model="Flag"
      class="popover-intree"
      id="contextMenu"
      :style="`left:${clientX}px;top:${clientY}PX`"
    >
      <ul>
        <li
          v-for="item in contextMenu"
          :key="item.id"
          class="context-menu"
          @click="handleClickMenu(item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </el-popover>
  </div>
</template>
<script>
import { getViewHeight } from "@/utils/getViewHeight.js";
export default {
  data() {
    return {
      clientX: "",
      clientY: ""
    };
  },
  props: {
    treeList: {
      type: Array
    },
    defaultProps: {
      type: Object,
      default() {
        return {
          children: "children",
          label: "name"
          // isLeaf: "leaf" //需要加叶子节点的页面
        };
      }
    },
    nodeKey: {
      // 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的
      type: String,
      default() {
        return "menuId";
      }
    },
    contextMenu: {
      type: Array,
      default() {
        let menu = [
          {
            name: "添加",
            value: "add"
          },
          {
            name: "修改",
            value: "edit"
          },
          {
            name: "删除",
            value: "del"
          }
        ]; //树的右键菜单
        return menu;
      }
    },
    rightFlag: {
      type: Boolean,
      default() {
        return false;
      }
    },
    treeHeight: {
      type: Number,
      default() {
        return getViewHeight() - 200;
      }
    },
    treeWidth: {
      type: Number,
      default() {
        return 237;
      }
    },
    expandedKeys: {
      // 默认展开的树节点，ids
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    Flag: {
      get() {
        return this.rightFlag;
      },
      set(val) {
        this.$emit("updateTreeMenu", val);
      }
    }
  },
   mounted() {
    // 监听，除了点击自己，点击其他地方将自身隐藏
    window.addEventListener("click", this.handleClickDoc);
  },
  methods: {
    handleNodeClick(data) {
      this.$emit("updateTreeMenu", false); // 点击树节点的时候，将右键菜单隐藏。
      this.$emit("handleNodeClick", data);
    },
    handleRightClick(event, obj, node, self) {
      //  确定 右键菜单出现的位置
      this.clientX = event.offsetX;
      this.clientY = event.clientY; // 该高度需据自己的布局调整
      this.setCurrTreeNode(obj[this.nodeKey]);
      this.$emit("handleRightClick", obj);
    },
    handleClickMenu(item) {
      this.$emit("handleClickTreeMenu", item);
    },
    handleNodeExpand(data, node, self) {
      this.$emit("handleNodeExpand", data);
    },
    // 选中树节点的方法，修改的时候，id未变，子组件监听不到父组件传入的id变化时，可采取父组件主动获取子组件的该方法来实现修改后主动选择该树节点。
    setCurrTreeNode(id) {
      this.$refs["comnTree"].setCurrentKey(id);
    },
    handleClickDoc(e) {
      const contextMenu = document.getElementById("contextMenu");
      if (!contextMenu) return;
      !contextMenu.contains(e.target) && this.$emit("updateTreeMenu", false);
    }
  },
  beforeDestroy() {
    window.removeEventListener("click", this.handleClickDoc);
  }
  }
};
</script>
<style lang="scss">
.tree-container {
  position: relative;

  ._tree {
    color: #444;
    padding-left: 6px;
    overflow: auto;
    //更改tree的默认图标颜色，图标是否为叶子节点都会出现
    // span {
    //   color: $icon_color;
    // }
    // .is-leaf {
    //   color: transparent;
    // }
    .tree_label {
      font-size: 14px;
      letter-spacing: 1px;
      margin-left: 5px;
    }
  }

  .popover-intree {
    position: absolute;
    ul {
      padding: 3px;
    }
    li {
      list-style: none;
    }
  }
  .context-menu {
    letter-spacing: 1px;
    color: #222;
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    color: #000;
    text-align: center;
    &:hover {
      border-radius: 2px;
      background: #648fdb;
      color: #fff;
    }
  }
  .el-popover {
    padding: 2px;
    min-width: 20px;
    border: 1px solid #ebeef5;
    border-radius: 0;
    box-shadow: 4px 4px 4px -4px rgb(121, 118, 118);
  }
  //重写tree的 active样式
  .el-tree--highlight-current
    .el-tree-node.is-current
    > .el-tree-node__content {
    background: $active_color;
    color: #fff;
  }
  //重写tree样式，才可使横向 超出显示滚动条
  .el-tree > .el-tree-node {
    min-width: 100%;
    display: inline-block;
  }
}
</style>

```

###### 二、在组件中引入，并使用刚刚封装的Tree组件

1. **`:treeList="treeList"`** 绑定树形菜单列表

2. **`:contextMenu="contextMenu"`**  右键菜单

3. **`:rightFlag="rightFlag"`** 是否显示右键菜单

4. **`@handleNodeClick="handleNodeClick"`**  绑定树节点被单击，触发的函数；

5. **`@handleRightClick="handleRightClick"`** 绑定右键单击树节点，触发的函数

6. **`@handleClickTreeMenu="handleClickTreeMenu`"** 绑定 点击右键菜单，触发的函数

7. **`@updateTreeMenu="updateTreeMenu"`** 绑定更改`rightFlag`时，触发的函数

   

   **test.vue文件**

```vue
<template>
  <div>
    <my-tree
      :treeList="treeList"
      :rightFlag="rightFlag"
      :defaultProps="defaultProps"
      :nodeKey="nodeKey"
      @handleNodeClick="handleNodeClick"
      @handleRightClick="handleRightClick"
      @handleClickTreeMenu="handleClickTreeMenu"
      @updateTreeMenu="updateTreeMenu"
    ></my-tree>
  </div>
</template>
<script>
import myTree from "@/components/Tree.vue"; // 引入刚刚定义在src/components下的Tree.vue组件
export default {
  components: {
    myTree
  },
  data() {
    return {
      treeList: [
        // 一般来源于后台
        {
          mid: "1",
          mName: "qqq",
          subs: [
            {
              mid: "2",
              mName: "aaaa"
            }
          ]
        }
      ],
      rightFlag: false, //是否显示右键菜单
      defaultProps: {
        // 定义展示的属性，treeList中是subs和mName,
        children: "subs",
        label: "mName"
      },
      nodeKey: "mid" // 树的唯一标志，mid,也是treeList的每一条数据的唯一标志
    };
  },
  methods: {
    updateTreeMenu(val) {
      this.rightFlag = val;
    },
    handleNodeClick(data) {
      console.log("树节点被点击：", data);
    },
    handleRightClick(obj) {
      this.rightFlag = true; //显示右键菜单
      console.log("鼠标右键单击了该节点", obj);
    },
    handleClickTreeMenu(item) {
      alert(item.name);
      this.rightFlag = false;
    }
  }
};
</script>
```

###### 三、getViewHeight的内容如下：

**`getViewHeight.js`** 获取当前视口高度

```javascript
export function getViewHeight() {
  let winHeight = 0;
  if (window.innerHeight) {
    winHeight = window.innerHeight;
  } else if (document.body && document.body.clientHeight) {
    winHeight = document.body.clientHeight;
  }else 
  if (document.documentElement && document.documentElement.clientHeight) {
    winHeight = document.documentElement.clientHeight;
  }
  return winHeight;
}
```



### el-tree默认选中第一个

```html
<el-tree :data="data" :props="defaultProps" node-key="id" current-node-key="121233"  @node-click="handleNodeClick"></el-tree>
```

### el-date-pickere带星期几

```vue
<template>
	<el-date-picker
	      v-model="value"
	      type="date"
	      format="yyyy 年 MM 月 dd 日"
	      placeholder="选择日期"
	      @change="handleChange(value)" />
	      {{ value1 }}
</template>
<script>

export default {
data() {
    return {
      timeValue: '',
      value: '',
      value1: '',
      	}
      },
      methods: {
    //监听点击日期对应周几
    handleChange(value) {
      if (!value) return
      console.log(value);
      const getWeek = value.getDay()
      console.log(getWeek);
      this.value1 = weekArr[getWeek]
    },
    }
      
}
</script>
```

### el-table中的文本居中
1、整个表格和内容居中的方式：
header-cell-style设置头部居中；
cell-style设置单元格内容居中
```vue
<el-table
    :data="tableData"
    :header-cell-style="{'text-align':'center'}"
    :cell-style="{'text-align':'center'}"
    style="width: 100%">
</el-table>
```

2、单个表格的内容居中：
只需要在el-table-column上加上align=‘center’
```vue
<el-table-column label="姓名" prop="realname" align="center">
</el-table-column>
```

### 表格单击确认
```vue
<template>
 <el-table :data="redData" stripe border height="600" highlight-current-row @row-click="rowClick"">
  <el-table-column type="index" label="序号" width="50" />
  <el-table-column property="date" label="客户类型" width="150"></el-table-column>
 </el-table>
</template>
<script>
export default {
 methods: {
  rowClick(row) {
      this.selectedData = row
      console.log(row);
    },
 }
</script>
```
### el-autocomplete组件添加底部固定按钮
首先是组件的使用：
```html
<el-autocomplete
   class="voucher-subject-input"
   :ref="'inputcredit_2_'+index"
   :popper-append-to-body="false"
   :class="{ 'subject-opacity': voucher.items[index].showText }"
   v-model="voucher.items[index].subjectName"
   value-key="name"
   :fetch-suggestions="querySearch"
   :highlight-first-item="true"
   @select="handleSelectSubject($event,index)"
   @focus="handleFocusSubject($event,index)"
   >
   <!-- 下一篇小编为大家带来这里使用:popper-append-to-body="false"时候，又要监听@blur与@select事件会发生什么，该怎么解决 position: absolute;bottom: 0px;left: 0px;可不添加 -->

  <template slot-scope="{ item }">
     <el-button
       v-if="item.is_add"
       type="primary" plain
       style="width: 100%;position: absolute;bottom: 0px;left: 0px;"
       class="add-button"
       @click="accAddBtn()"
       >
       添加
    </el-button>
 </template>
</el-autocomplete>
```
vue部分（在methods中使用如下方法）：
添加一个空的数据，然后把这个空的数据当做button使用
```js
//会计科目返回查询结果
querySearch(queryString, cb) {
  // console.log("会计科目返回查询结果",results)
  var restaurants = this.selectArrObj.SubjectsList;
  var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
  results = results.length > 0 ? results : [{name: '没有匹配项'}]
  //这里给列表中的每串数据都加上is_add:false控制组件部分的按钮显示
  for (let i = 0;i<results.length;i++){
  	results[i].is_add = false
  }
  //注意的是这里要加上name，因为我是根据name模糊查询的，不然会报错，导致不可用
  results.push({name:'',is_add:true});
  // 调用 callback 返回建议列表的数据
  cb(results);
},
//会计科目查询(模糊查询)
createFilter(queryString) {
  return (restaurant) => {
  	return (restaurant.name.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);
  };
 },
```
这就是把按钮添加到el-autocomplete组件建议值下拉列表的大致部分，
那么，这里小编先带大家了解一下为什么这里要使用:popper-append-to-body=“false”，我们看文档可以看到

如果使用默认的true，查看dom结构发现是因为下拉列表的class是插入至body下的，而不是vue app 下。所以我们使用深度选择器是没办法控制他的css样式的。
因此这里我们要使用false，让他在vue app下。然后在css中我们就可以使用深度选择器，调整下拉框的底部内边距，使按钮能够置于最底下不会挡到选项。
```js
<style scoped>
    /deep/ .el-scrollbar__wrap{
      margin-bottom: 30px;
      overflow-x: hidden;
    }
    /deep/ .el-autocomplete-suggestion__list{
      padding-bottom: 50px;
    }
</style>
```

### 表单标签颜色自定义
```html
<el-form-item class="text_align100 ">
                  <template slot="label">
                    单价<span :class="hs ? 'redText' : ''">{{ hs ? '(含税)' : '(不含税)' }}</span>
                  </template>
                </el-form-item>
```

### 表格合计
```js
getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '总价';
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (column.property == 'amountWithTax' || column.property == 'amount') {
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 元';
          } else {
            sums[index] = 'N/A';
          }
        }
      });
      return sums;
    }
```

### 动态表格

```html
<el-table v-loading="loading" :data="invoiceList" border @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column v-for="(item, index) in titleList" :key="index" :label="invoiceListTittle[item]" align="center"
        :prop="item" width="150" />
    </el-table>
```
```json
"title": [ //表头
    "name",
    "total",
    "one",
    "thirteen"
],
"list":[ // 列表
    {},
    {}
]

### 搜索提示带左右两个不同数据

```html
<el-autocomplete v-model="formData.purchaserName" :fetch-suggestions="querySearchAsyncName"
                    placeholder="请输入购方名称" @select="handleSelectName" @dblclick.native.prevent="selectingCustomers"
                    clearable :style="{ width: '100%' }">
                    <el-button slot="append" @click="selectingCustomers" icon="el-icon-more"></el-button>
                    <template slot-scope="{ item }">
                      <div class="autocomplete">{{ item.buyerName }}</div>
                      <div class="autocomplete">{{ item.source == 2 ? '扫码录入' : '本地' }}</div>
                    </template>
                  </el-autocomplete>
```

```css
.dynamicItem :deep .el-form-item__content,
.el-autocomplete,
.el-input--medium,
.el-input__inner {
  width: 98%;
}
```

### el-date-picker 限制选择日期在一个月范围内
``` vue
<template>
  <el-date-picker
    placeholder="请选择"
    unlink-panels
    :value="timeArr"
    type="datetimerange"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    value-format="yyyy-MM-dd HH:mm:ss"
    :default-time="['00:00:00', '23:59:59']"
    :picker-options="pickerOptions"
    @input="change($event)"
  />
</template>

<script>
export default {
  name: 'DatePicker', 
  props: {
    value: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      selectDate: '',
      // 日期时间范围在一个月以内
      pickerOptions: {
        onPick: ({ maxDate, minDate }) => {
          this.selectDate = minDate.getTime()
          if (maxDate) {
            this.selectDate = ''
          }
        },
        disabledDate: (time) => {
         if (this.selectDate !== '') {
            const one = 30 * 24 * 3600 * 1000
            const minTime = this.selectDate - one
            const maxTime = this.selectDate + one
            return time.getTime() < minTime || time.getTime() > maxTime
          }
        }
      }
    }
  },
  methods: {
    change(val) {
      this.$emit('input', val)
    }
  }
}
</script>
```

### el-table支持单选
```html
<el-table
    :data="tableData"
    style="width: 100%"
    @row-click="rowCommoditysClick"
    @selection-change="handleSelectionChange"
    class="commodity_list>
     <el-table-column
      label="选择项"
      width="55">
      <template slot-scope="scope">
      	<el-radio v-model="tableRadio" :label="scope.row.id"></el-radio>
      </template>
    </el-table-column>
</el-table>

```

```js
rowCommodityClick(row) {
      console.log(this.form.dynamicItem[this.commodityCode], row);
      this.rowCommodity = row;
// 选中时获取当前唯一标识
      this.tableRadioCommodity = row.id
    },
```
```scss
.commodity_list ::v-deep .el-radio__label {
  display: none;
}
```

```js
data(){
	return{
		tableRadio: '',
	}
}
handleSelectionChange(currentRow){
	this.tableRadio = currentRow
},
rowCommoditysClick(row) {
      this.commodityValue = row;
      this.tableRadio = row.revenueCode
    },
```

### 邮箱提示
```html
<el-autocomplete class="inline-input" v-model="formData.purchaserEmail"
                  :fetch-suggestions="queryEmailName" placeholder="请输入内容" :trigger-on-focus="false"></el-autocomplete>
```

```js
queryEmailName(queryString, cb) {
      // var restaurants = this.restaurantsName;
      let index = this.formData.purchaserEmail.indexOf("@")
      if (index == -1) {
        index = this.formData.purchaserEmail.length
      }
      let newEmail = this.formData.purchaserEmail.substring(0, index)
      let Emails = [
        { "value": newEmail + "@163.com" },
        { "value": newEmail + "@126.com" },
        { "value": newEmail + "@139.com" },
        { "value": newEmail + "@189.cn" },
        { "value": newEmail + "@qq.com" },
        { "value": newEmail + "@yahoo.com" },
        { "value": newEmail + "@gmail.com" },
        { "value": newEmail + "@msn.com" },
        { "value": newEmail + "@aliyun.com" },
      ]
      var restaurants = Emails;
      restaurants = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      cb(restaurants);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
```

### 简单消息通知

```html
<el-dropdown-menu slot="dropdown" class="padding12">
            <el-tabs stretch class="width280">
              <el-tab-pane label="通知"> <router-link to="/digital/fullElectronicList">{{ billNews }}</router-link>
              </el-tab-pane>
              <!-- <el-tab-pane label="消息">消息</el-tab-pane>
              <el-tab-pane label="代办">代办</el-tab-pane> -->
            </el-tabs>
          </el-dropdown-menu>
```

### 动态输入框表单

```html
<el-form ref="form" :model="form" label-width="80px">
            <div v-for="(item, index) in dataList" :key="index">
                <el-form-item :label="item.label">
                    <el-input v-model="form[item.value]"></el-input>
                </el-form-item>
            </div>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
```
```js
export const dataList = [
    {
        label: '姓名',
        value: 'name'
    },
    {
        label: '年龄',
        value: 'age'
    },
    {
        label: '专业',
        value: 'one'
    },
]
```

### 单选重复点击取消选中

```html
<el-radio-group v-model="radioColor">
    <el-radio :label="'black'" @click.native.prevent="clickitemdataType('black')">黑色</el-radio>
    <el-radio :label="'white'" @click.native.prevent="clickitemdataType('white')">白色</el-radio>
</el-radio-group>
```
```js
clickitemdataType (e) { // e为radio的label值
      e === this.radioColor ? this.radioColor = '' : this.radioColor = e
 },
```

### 表单标签两端对齐
先给from标签一个`wordSpacing`类
```css
.wordSpacing :deep label {
  width: 110px;
  font-size: 16px;
  text-align: justify;
  text-align-last: justify;
  -moz-text-align-last: justify;
  text-justify: distribute-all-lines;
  display: inline-block;
}
```

### 表单加星号
只需加个`class="is-required"`即可

### 给表头加必填星号
### 1.在需要加必填星号的el-table-column上添加render-header属性。

```html
<el-table-column :render-header="addRedStar" v-for="(item, index) in columns" :prop="item.prop">
  <template>
    ...
  </template>
</el-table-column>
```

### 2.addRedStar函数。除了加红\*外也可以有别的控制表头内容的操作，可按需编写。

```javascript
    // 给表头加必填符号*
    addRedStar(h, { column }) {
      return [
        h("span", { style: "color: red" }, "*"),
        h("span", " " + column.label),
      ];
    },
```

### 利用溢出隐藏实现展开收起

```vue
<template>
    <div class=''>
        <el-form :model="form" ref="form" :rules="rules" label-width="80px" :inline="false" size="normal">
            <el-row>
                <el-col :span="8">
                    <el-form-item label="生成时间" prop="orderGenerationTime">
                        <el-date-picker v-model="form.orderGenerationTime" type="daterange" align="right" unlink-panels
                            value-format="yyyy-MM-dd" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
                            :picker-options="pickerOptions">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="失效时间" prop="orderExpirationTime">
                        <el-date-picker v-model="form.orderExpirationTime" type="daterange" align="right" unlink-panels
                            value-format="yyyy-MM-dd" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
                            :picker-options="pickerOptions">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item>
                        <el-button type="primary" icon="el-icon-search" size="mini" @click="manageQuery">搜索</el-button>
                        <el-button icon="el-icon-refresh" size="mini" @click="manageResetQuery">重置</el-button>
                        <el-button type="text" :icon="advanced ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"
                            @click="toggleAdvanced">{{
                                advanced ? '收起' : '高级搜索' }}</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="订单编号" prop="orderNum">
                <el-input v-model="form.orderNum" placeholder="请输入订单编号" clearable @keyup.enter.native="manageQuery" />
            </el-form-item>
            <el-form-item label="购方名称" prop="buyerName">
                <el-input v-model="form.buyerName" placeholder="请输入购方名称" clearable @keyup.enter.native="manageQuery" />
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
export default {
    data() {
        return {
            advanced: false,
        };
    },
    methods: {
        toggleAdvanced() {
            this.advanced = !this.advanced
        },
    },

}
</script>

<style lang='scss' scoped>
.hide {
    height: 52px;
    overflow: hidden;
}
</style>
```

### 在使用`el-table组件`时，数据已经发生了变化，但是页面显示的数据却没变化;

**二、解决办法**

在[el-table](https://so.csdn.net/so/search?q=el-table&spm=1001.2101.3001.7020)中添加一个key，可以设置成boolean类型的，在数据更新后更新这个key;

```cobol
  <el-table :data="currentRecordList" :key="isUpdate">        <el-table-column prop="address" label="Sender" min-width="10%" />        <el-table-column prop="date" label="Date" min-width="15%" />        <el-table-column label="Message conten" min-width="40%">          <template slot-scope="scope">            <span v-if="scope.row.bodyHighlights" v-html="scope.row.bodyHighlights"></span>            <span v-else>{{ scope.row.body }}</span>          </template>        </el-table-column>     </el-table>
```

在数据更新的地方后面加上如下 

```kotlin
this.isUpdate = !this.isUpdate;
```

### `el-table`表格中计算表格总价

```vue
<template>
<el-col :span="24">
	<el-table :inline="true" :data="yfList" ref="multipleTable2" :highlight-selection-row="true">
	  <!-- <el-table-column type="selection" width="55" :selectable="selectEnable" disabled="true" align="center" /> -->
	  <el-table-column label="货物或应税劳务、服务名称" align="center" prop="xmmc" />
	  <el-table-column label="规格型号" align="center" prop="ggxh" />
	  <el-table-column label="单位" align="center" prop="dw" />
	  <el-table-column label="数量" align="center" prop="xmsl" />
	  <el-table-column label="单价(含税)" align="center" prop="xmdj" />
	  <el-table-column label="金额(含税)" align="center" prop="xmje" />
	  <el-table-column label="税率" align="center" prop="sl">
	    <template slot-scope="scope">
	      <dict-tag :options="dict.type.sys_spbm_sl" :value="scope.row.sl" />
	    </template>
	  </el-table-column>
	  <el-table-column label="税额" align="center" prop="se" />
	</el-table>
	</el-col>
	
	<el-col :span="24" class="card-box">
	<el-card>
	  <div class="el-table el-table--enable-row-hover el-table--medium">
	    <el-col :span="24">
	      <el-row>
		<el-col :span="12">
		  <el-form-item label="合计金额：" prop="mc" label-width="140px">
		    {{ yfhjje }}
		  </el-form-item>
		</el-col>
		<el-col :span="12">
		  <el-form-item label="合计税额：" prop="mc" label-width="140px">
		    {{ yfhjse }}
		  </el-form-item>
		</el-col>
	      </el-row>
	      <el-row>
		<el-col :span="12">
		  <el-form-item label="价税合计（大写）：" prop="mc" label-width="140px">
		    {{ yfjshjd }}
		  </el-form-item>
		</el-col>
		<el-col :span="12">
		  <el-form-item label="小写：" prop="mc" label-width="140px">
		    {{ yfjshjx }}
		  </el-form-item>
		</el-col>
	      </el-row>
	    </el-col>
	  </div>
	</el-card>
	</el-col>

</template>

<script>
export default {
mounted(){
detailOrder(id).then((response) => {
      this.invoiceInfo = response.data;

      var mxList = [];
      //  invoiceSKRedAppItems
      this.invoiceInfo.invoiceSKItemList.forEach((item, index) => {
        const { xmje, se, xmsl } = item;
        mxList.push({ ...item, xmje: xmje, se: se, xmsl: xmsl });
      });
      this.mxList = mxList;
      this.hjje = this.invoiceInfo.hjje;
      this.hjse = this.invoiceInfo.hjse;
      this.jshjx = Number(this.hjje) + Number(this.hjse);
      this.jshjd = "负" + smallToBig(this.jshjx.toFixed(2));
      this.$nextTick(() => {
        let table = this.mxList; // 从后台获取到的数据
        table.forEach((row) => {
          if (row.chbz != '1') {
            this.$refs.multipleTable.toggleRowSelection(row, true);
          }
        });
      });
    });
}
}

</script>

```

