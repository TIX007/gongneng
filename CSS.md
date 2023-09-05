### 文字溢出省略

```css
	overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap
```

移动端浏览器绝大部分是WebKit内核的，所以该方法适用于移动端

```css
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
```

vue过滤器

```vue
<template>
  <div class="title">{{ name | ellipsis}}</div>
</template>

<script>
    export default {
      name: "test",
      data(){
        return {
          name:'我的家在东北松花江上du, 那里有森林煤zhi矿, 还有那满山遍dao野的大豆高梁. ',
        }
      },
      filters:{
        ellipsis(value){
          if (!value) return '';
          if (value.length > 10) {
            return value.slice(0,10) + '...'
          }
          return value
        }
      }
    }
</script>

<style scoped>

</style>
```



------

### 点击禁止

```css
.ban {
        /* 点击禁止 */
        pointer-events: none;
        /* 光标禁止 */
        cursor: not-allowed;
      }
```

### 调整背景图大小

```css
-webkit-background-size: 683px 474px;
```

### 调整背景图不透明度

```css
background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("bg.jpg");
```

或

```css
opacity:0.5; //1为原图，0为全透明
```

### 移入小手提示

```css
cursor : pointer;
```

### 吸顶效果

```css
.isFixed {
  position: fixed;
  top: 0;
  z-index: 1000;
}

```

### 渐变框样式

```css
#grad1 {
    height: 200px;
	background: #0F275A;
    box-shadow: inset 0px 0px 100px 0px rgb(0 228 255 / 50%);
}
```

### 毛玻璃

[玻璃拟态是什么？前端该如何实现 - 掘金 (juejin.cn)](https://juejin.cn/post/7086759520025706526)

卡片毛玻璃

```css
.card {
    color: rgba(255, 255, 255, 0.8);
    position: absolute;
    right: 100px;
    bottom: 100px;
    z-index: 10;
    font-family: sans-serif;
    text-align: center;
    width: 300px;
    height: 500px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    border-left: 1px solid rgba(255, 255, 255, 0.4);
    background: linear-gradient(
    to top right,
    rgba(90, 149, 207, 0.5),
    rgba(58, 76, 99, 0.8)
    );
    box-shadow: 10px -10px 20px rgba(0, 0, 0, 0.2),
    -10px 10px 20px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px); /*  元素后面区域添加模糊效果 */
    border-radius: 20px;
    transform: rotate(-15deg);
}

```

背景

```css
body {
height: 100vh;
background: radial-gradient(
    circle at 60% 90%,
    rgba(46, 103, 161, 1),
    transparent 60%
  ),
  radial-gradient(
    circle at 20px 20px,
    rgba(46, 103, 161, 0.8),
    transparent 25%
  ),
  #182336;
}

```

### CSS定义变量

**定义变量**

```css
:root {
    --c-brand-light: #646cff;
    --vp-c-brand-light: #747bff;
    --c-brand: #747bff;
}
```

**使用变量**

```css
.custom-block.tip {
  border-color: var(--c-brand-light);
}
```

### 缓冲动画

```css
transition:
        font-size 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
        flex 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
        background 0.2s;
```

### 冒号对齐

可以通过用伪元素方式添加冒号

```html
<div class="item-info">
      <span class="item-label">品牌</span>
      <span class="item-value">121212</span>
    </div>
    <div class="item-info">
      <span class="item-label">商品价格</span>
      <span class="item-value">1212121212112121</span>
    </div>
```



```scss
.item-info{
            width: 180px;
            .item-label {
              width: 60px;
              margin-right: 15px;
              text-align: justify;
              text-align-last: justify;
              display: block;
              float: left;
              color: #999;
              position: relative;
              &:after {
              position: absolute;
              right: -5px;
              content: ":";
          }
        }
    }
```

### 字体自适应

```css
// 1920时为20px
font-size: calc(100vw * 20 / 1920);
```

### 列表渲染（虚拟列表问题修复）

<details open>
    <summary>虚拟列表问题修复</summary>
    <ul>
        <li>visible：默认值，没有效果。元素的内容被正常布局和呈现。</li>
        <li>hidden：元素跳过它的内容。跳过的内容不能被用户代理功能访问，例如在页面中查找、标签顺序导航等，也不能被选择或聚焦。这类似于给内容设置`display: none`。</li>
        <li>auto：该元素打开布局包含、样式包含和绘制包含。如果该元素与用户不相关，它也会跳过其内容。与 hidden 不同，跳过的内容必须仍可正常用于用户代理功能，例如在页面中查找、tab 顺序导航等，并且必须正常可聚焦和可选择。</li>
    </ul>
</details>


------

**contain-intrinsic-size** 可以为元素指定以下一个或两个值。如果指定了两个值，则第一个值适用于宽度，第二个值适用于高度。如果指定单个值，则它适用于宽度和高度。

```css
.card_item {
  content-visibility: auto;
  contain-intrinsic-size: 200px;
}
```

### 图像灰度

grayscale 是一个 CSS 函数，可以把图像转成灰色，参数是个百分比，结果返回一个 filter 函数

```css
-webkit-filter: grayscale(100%);
-moz-filter: grayscale(100%);
-ms-filter: grayscale(100%);
-o-filter: grayscale(100%);
filter: grayscale(100%);
filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
```

### 图带查

```css
background:linear-gradient(to top right,rgba(255,249,245,.55) 0,rgba(255,249,245,.55) calc(50% - 1px),#efefef 50%,rgba(255,249,245,.55) calc(50% + 1px),rgba(255,249,245,.55)),linear-gradient(to bottom right,rgba(255,249,245,.55) 0,rgba(255,249,245,.55) calc(50% - 1px),#efefef 50%,rgba(255,249,245,.55) calc(50% + 1px),rgba(255,249,245,.55))
```

### 表单字左右对齐
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

