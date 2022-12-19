# 项目准备

## 项目地址

> 项目所有代码会提交到码云仓库。

码云地址：https://gitee.com/luckybo0027

## 创建新项目

> 目标：使用脚手架命令创新项目

### 操作步骤

1. 通过命令行创建项目

```bash
npx create-react-app ts-geek-park-h5 --template typescript
```

2. 删除 `src` 目录中的所有文件
3. 修改页面模板 `public/index.html` 中的页面标题

```html
<title>极客园App</title>
```

4. 新建项目根组件 `src\App.tsx`

```diff
+export default function App() {
+  return (
+    <div>
+      <h1>极客园根组件</h1>
+    </div>
+  )
+}
```

5. 新建项目入口文件 `src\index.tsx` 

```diff
+import ReactDOM from 'react-dom'
+import App from './App'

+ReactDOM.render(<App />, document.getElementById('root'))
```

   

### 项目结构参考

```
/src
  /assets         项目资源
  /components     通用组件
  /pages          页面组件
  /store          仓库
  /utils          工具封装
  App.tsx         根组件
  index.tsx       项目入口
```

## 配置 SASS 支持

> 目标：让项目样式支持使用 SASS/SCSS 语法编写



**操作步骤**

1. 安装 `sass` 

```bash
yarn add sass
```

2. 拷贝项目素材

```js
// 拷贝 `assets` 文件夹 到 `src` 目录下
```

3. 项目入口`src\index.tsx` 导入公用样式文件

````jsx
import './assets/styles/index.scss'
````



## 配置 `antd-mobile` 组件库

> 目标：安装本项目使用的 `UI` 组件库 Ant Design Mobile，并通过 Babel 插件实现按需加载

官方文档(国内站点)：https://antd-mobile.gitee.io/zh

官方文档(全球站点)：https://mobile.ant.design/zh

**操作步骤**

1. 安装 `antd-mobile`

```bash
yarn add antd-mobile
```

3. 使用组件

```diff
+import { Button } from 'antd-mobile'
export default function App() {
  return (
    <div>
      <h1>极客园根组件</h1>
+      <Button color="primary">按钮</Button>
    </div>
  )
}

```

- `antd-mobile v5` 版支持按需加载，无需额外配置

## 配置路径别名 @

> 目标：让代码中支持以 `@/xxxx` 形式的路径来导入文件

[craco 配置文档](https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#configuration)  



**操作步骤**

1. 安装修改 CRA 配置的包：

```bash
yarn add -D @craco/craco  -f
// -f表示的是强制下载（-force），因为版本问题如果不使用-f会报错
```

2. 在**项目根目录**中创建 craco 的配置文件：`craco.config.js`，并添加如下代码：

```js
const path = require('path')

module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src'),
    },
  },
}

```

3. 在项目**根目录中新建**  `path.tsconfig.json`，并添加如下代码：

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

4. 根目录的`tsconfig.json` 引入路径配置

```diff
{
+  "extends": "./path.tsconfig.json",
  "compilerOptions": {
    "target": "es5",
```

5. `package.json` 修改启动命令

```diff
  "scripts": {
-    "start": "react-scripts start",
-    "build": "react-scripts build",
-    "test": "react-scripts test",
+    "start": "craco start",
+    "build": "craco build",
+    "test": "craco test",
    "eject": "react-scripts eject"
  },
```

6. 测试路径导入

```diff
import { Button } from 'antd-mobile'
+import imageNone from '@/assets/none.png'
export default function App() {
  return (
    <div>
      <h1>极客园根组件</h1>
      <Button color="primary">按钮</Button>
+      <img src={imageNone} alt="" />
    </div>
  )
}

```

7. 💥重启脚手架💥



## 配置视口单位插件 

> 目标：通过 `webpack` 插件将 `px` 单位自动转换成视口长度单位 `vw/vh`，实现页面对不同屏幕的自动适配

**分析说明**： 

适配概述

- 为什么要适配？
  - 为了让我们开发的移动端项目页面，在不同尺寸大小的移动端设备（手机）中，保持相同的比例
- 适配原理
  - 选择某个手机的尺寸大小作为基准，其他手机进行**等比例缩放**
  - 一般选择 `iPhone 6`（2倍屏幕），屏幕宽度为：`375px`
- 适配方式
  - rem：需要手动修改 `html` 元素的 `font-size`；额外设置 `body` 元素的字体大小为正常值
  - vw：一 1 `vw` 等于屏幕宽度的 `1%`  
  - vh: 屏幕高度的1%

**操作步骤**

1. 安装 `postcss-px-to-viewport`
   - 包的作用：将 `px` 转化为 `vw`，所以有了该工具，只需要在代码中写 `px` 即可

```bash
yarn add postcss-px-to-viewport -D
```

2. 在 `craco.config.js` 添加相应配置

```diff
+const pxToViewport = require('postcss-px-to-viewport')
+const vw = pxToViewport({
  // 视口宽度，一般就是 375（ 设计稿一般采用二倍稿，宽度为 375 ）
+  viewportWidth: 375
+})

module.exports = {
  // 此处省略 webpack 配置
  webpack: {},

+  style: {
+    postcss: {
+      mode: "extends",
+      loaderOptions:{
+        postcssOptions: {
+          ident:"postcss",
+          plugins: [vw]
+        }
+      }
+    }
+  }
}
```

3. 在 `src\assets\styles\index.scss` 添加测试类名

```diff
+.testBox {
+  width: 100px;
+  height: 100px;
+  background-color: pink;
+}

```

4. 在 `src\App.tsx` 使用测试类名

```diff
import { Button } from 'antd-mobile'
import imageNone from '@/assets/none.png'
export default function App() {
  return (
    <div>
      <h1>极客园根组件</h1>
      <Button color="primary">按钮</Button>
      <img src={imageNone} alt="" />
+      <div className="testBox">盒子</div>
    </div>
  )
}

```

5. 💥重启脚手架💥

## 移动端`1px`像素边框

 **普通屏**，**1个css像素对应1个物理像素**；**2倍屏中**，**一个css像素对应4个物理像素**；三倍屏中则是9个， 要解决1px问题，本质就是**让高清屏用一个物理像素去展示一个css像素** 

> 目标： 解决移动端Web开发中，在高清屏机型中，`1px` 会比较粗的问题。

![image-20211119075243516](assets/image-20211119075243516.png)

**实现方案**

- [参考 antd-mobile 的实现](https://github.com/ant-design/ant-design-mobile/blob/v2/components/style/mixins/hairline.less)
- [实现原理](https://juejin.cn/post/6994196887402184734)
- 实现原理核心：**伪元素 + transform 根据比例缩放**
  - 伪元素 `::after` 或 `::before` 独立于当前元素，可以单独对其缩放而不影响元素本身的缩放

**素材代码**

```scss
素材文件： src/assets/styles/hairline.scss
```

+ 使用方式，支持全边框和上下左右四个方向。


```scss
@include hairline('all', #f00);
@include hairline('top', #f00);
@include hairline('right', #f00);
@include hairline('bottom', #f00);
@include hairline('left', #f00);

// 第三个参数可设置圆角
@include hairline('all', #f00, 100px);
```

+ 项目使用：
  1. 导入 `hairline.scss` 文件
  2. 调用 `@include hairline('方向', 颜色);`

```diff
// 导入 hairline.scss 文件并使用
+@import '@/assets/styles/hairline.scss';
+.testBox_hairline {
+  width: 100px;
+  height: 100px;
+  background-color: tan;
+  @include hairline('all', #f00);
+}

// 页面组件中使用
+{/* 普通 1px 边框 */}
+<div className="testBox"></div>
+{/* 优化后 1px 边框 */}
+<div className="testBox_hairline"></div>

// 注意，行内样式对移动适配不起效果，因为webpack解析的是css代码，js代码无法解析
```



## 配置路由

> 目标：安装 `react-router-dom`，创建 `App` 根组件并在该组件中配置路由

**操作步骤**

1. 安装 `react-router-dom v5.3`版  , 由于`v6`版变化较大，稳定后再考虑升级。

```bash
yarn add react-router-dom@5.3
```

2. 由于 `react-router-dom@5.3 源码是用 `JS` 写的，需要额外的类型声明文件。

```js
yarn add @types/react-router-dom@5.3 -D
// 下载其他第三方包
yarn add @types/第三方包名 -D
```

💥常见问题：工作中若下载的某个第三方包源码是用 `JS` 写的，在 `TS` 项目中可能会报错。

🔔解决方案：通过 `yarn add @types/第三方包名` 下载包的类型声明文件，一般都能解决错误。

2. 创建布局容器组件 `src\pages\Layout\index.tsx` 

```tsx
export default function Layout() {
  return (
    <h1>我是布局容器组件</h1>
  )
}
```

3. 创建登录页面组件 `src\pages\Login\index.tsx` 

```tsx
export default function Login() {
  return (
    <h2>我是登录页</h2>
  )
}
```

4. 根组件 `src\App.tsx` 引入页面组件并配置路由：

```diff
import React from 'react'
+import { BrowserRouter as Router, Route, Switch, Redirect, } from 'react-router-dom'
+import Login from '@/pages/Login'
+import Layout from '@/pages/Layout'

export default function App() {
  return (
    <>
+      <Router> 
+          <Switch>
+      		 <Redirect exact path='/' to='/layout' />
+            <Route path="/login" component={Login} />
+            <Route path="/layout" component={Layout} />
+          </Switch> 
+      </Router>
    </>
  )
}

```







## 路由设置懒加载

> 目标：页面组件过多时，容易造成页面卡顿，使用路由异步加载。

1. 使用React.lazy()方法，导入组件

```react
const Login = React.lazy(() => import('@/pages/Login'))
const Layout = React.lazy(() => import('@/pages/Layout'))
```



2. 使用`React.Suspense` 组件包裹Switch组件，并设置加载状态。

```diff
	<Router>
+      <React.Suspense fallback={<div>loading...</div>}>
          <Switch>          
            <Route path="/login" component={Login} />
            <Route path="/layout" component={Layout} />
          </Switch>
+      </React.Suspense>
    </Router>
```

## 配置 404 页面

> 目标：路由无法匹配页面组件时，显示 404 页面

1. 创建 404 页面组件 `src\pages\NotFound\index.tsx` 

```tsx
import { Button, ErrorBlock, Space } from 'antd-mobile'
import { useHistory } from 'react-router'

export default function NotFound() {
  const history = useHistory()
  return <ErrorBlock title="你要访问的页面不见了" description="换个页面试试..." fullPage>
    <Space>
      <Button color="primary" onClick={() => history.push('/')}>返回首页</Button>
      <Button color="warning" onClick={() => history.go(-1)}>后退一步</Button>
    </Space>
  </ErrorBlock>
}
```

2. 根组件 `src\App.tsx` 引入页面组件：

```diff
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, } from 'react-router-dom'
const Login = React.lazy(() => import('@/pages/Login'))
const Layout = React.lazy(() => import('@/pages/Layout'))
+const NotFound = React.lazy(() => import('@/pages/NotFound'))

export default function App() {
  return (
    <>
      <Router>
        <React.Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Redirect exact from="/" to="/layout" />
            <Route path="/login" component={Login} />
            <Route path="/layout" component={Layout} />
+            <Route  component={NotFound} />
          </Switch>
        </React.Suspense>
      </Router>
    </>
  )
}
```



## 配置 `Redux`

> 目标：安装 `redux` 和相关的依赖包，并创建 Store 实例后关联到应用上

所要用到的依赖包：

- `redux`       Reudx 核心包
- `react-redux ` React 和 Redux 的绑定库 
- `redux-thunk`  中间件，处理 异步 Action
- `redux-devtools-extension`  调试工具



**操作步骤**

1. 安装依赖包

```bash
yarn add redux react-redux redux-thunk redux-devtools-extension
```

2. 新建用户模块 `src\store\reducers\user.ts`

```diff
+const initState = {
+  profile: { username: '游客' },
+}

+export function userReducer(state = initState, action: any) {
+  switch (action.type) {
+    default:
+      return state
+  }
+}

```

3. 新建根 reducer： `src\store\reducers\index.ts`

```diff
+import { combineReducers } from 'redux'
+import { userReducer } from './user'

+const rootReducer = combineReducers({
+  user: userReducer,
+})

+export default rootReducer

```

4. 新建仓库入口：`src\store\index.ts`，创建仓库实例，并配置 `thunk中间件`和`调试工具`

```diff
+import { applyMiddleware, createStore } from 'redux'
+import rootReducer from './reducers'
+import thunk from 'redux-thunk'
+import { composeWithDevTools } from 'redux-devtools-extension'

+const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

+export default store
```

5. 在主入口 `index.js` 中，配置 `Provider`

```diff
import ReactDOM from 'react-dom'
import App from './App'
import './assets/styles/index.scss'
+import { Provider } from 'react-redux'
+import store from './store'


ReactDOM.render(
+  <Provider store={store}>
    <App />
+  </Provider>
  , document.getElementById('root')
)
```























## 彩色字体图标

> 目标：彩色字体图标的基本使用

### 引入彩色字体图标

**需求**

1. 如果使用普通 `class` 类名的方式，彩色图标无法生效
2. 可以通过引入 `js`文件的方式来使用彩色字体图标

**操作步骤**

1. 在 `public\index.html` 引入字体图标 `js` 文件

```diff
+ <script src="https://at.alicdn.com/t/font_2503709_f4q9dl3hktl.js"></script>
  </body>
</html>
```

2. `src\assets\styles\index.scss` 添加类名样式

```diff
+/* 字体图标 */
+.icon {
+  width: 1em;
+  height: 1em;
+  vertical-align: -0.15em;
+  fill: currentColor;
+  overflow: hidden;
+}
```

3. 以 `svg` 方式使用字体图标

```diff
+<svg className="icon" aria-hidden="true">
-  <use xlink:href="#iconbtn_readingtime"></use>
+  <use xlinkHref="#iconbtn_readingtime"></use>
+</svg>
```

💥注意💥：在 `React` 项目中 `xlink:href` 需要写成 `xlinkHref`



## 类名拼接辅助库

**操作步骤**

1. 安装 `classnames` ，辅助组件开发时类名拼接。

```
yarn add classnames
```

2. 使用方式

```
import classNames from 'classnames'

用法：classNames('类名1','类名2','类名3')  
处理后返回值：  '类名1 类名2 类名3'
```

🔔优点：

+ 简化拼接类名过程，省去手动加空格。

+ 同时会自动过滤掉无效值，如 undefined

+ 支持对象写法，类似Vue中的动态class

  ```js
  classNames({'类名': 布尔值})
  ```

  





# 组件封装

## `Icon` 图标组件封装

### 封装 `svg` 图标组件

> 目标：实现一个用于在页面上显示 `svg` 小图标的组件，方便后续开发中为界面添加小图标。

![image-20210905204352596](assets/image-20210905204352596.png)

实现思路：

- 在组件中，输出一段使用 `<use>` 标签引用事先准备好的 `SVG` 图片资源的  `<svg>` 代码
- 组件需要传入 `SVG` 图片的名字，用来显示不同的图标
- 组件可以设置额外的样式类名、及点击事件监听



**操作步骤**

1. 安装 `classnames` ，辅助组件开发时类名拼接。

```bash
yarn add classnames
```

2. 创建 `src\components\Icon\index.tsx` ，编写图标组件：

```diff
import classNames from 'classnames'

type Props = {
  type: string;
  className?: string;
}

export default function Icon({ type, className }: Props) {
  return (
    <svg className={classNames('icon', className)} aria-hidden='true'>
      <use xlinkHref={`#${type}`}></use>
    </svg>
  )
}
```

3. 测试组件，确认能否正确显示出图标

```diff
+import Icon from '@/components/Icon';

export default function Layout() {
  return (
    <>
      <h1>我是布局容器组件</h1>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref="#iconbtn_readingtime"></use>
      </svg>
+      <Icon type="iconbtn_readingtime" className="testBox" />
    </>
  )
}
```

### 升级图标组件

**需求分析**

- `type` 属性没有图标名提示
- 不能添加类名修改图标大小
- 不能注册点击事件

**操作步骤**

1. 添加图标 `type` 类型

```diff
import classNames from 'classnames'

type Props = {
-  type: string;
+  type: IconType;
  className?: string;
}

export default function Icon({ type, className }: Props) {
  return (
    <svg {...rest} className={classNames('icon', className)} aria-hidden='true'>
      <use xlinkHref={`#${type}`}></use>
    </svg>
  )
}

+type IconType =
+  | "iconphoto-fail"
+  | "iconphoto"
+  | "iconbtn_right"
+  | "iconicon_unenjoy1"
+  | "iconicon_feedback1"
+  | "iconicon_upload"
+  | "iconbianji"
+  | "icongengduo"
+  | "iconfanhui"
+  | "iconbtn_history1"
+  | "iconbtn_readingtime"
+  | "iconbtn_like2"
+  | "iconbtn_pic"
+  | "iconbtn_mine"
+  | "iconbtn_channel"
+  | "iconbtn_channel_close"
+  | "iconbtn_comment"
+  | "iconbtn_home_sel"
+  | "iconbtn_collect_sel"
+  | "iconbtn_mine_sel"
+  | "iconbtn_collect"
+  | "iconbtn_qa_sel"
+  | "iconbtn_like_sel"
+  | "iconbtn_feedback"
+  | "iconbtn_del"
+  | "iconbtn_tag_close"
+  | "iconbtn_essay_close"
+  | "iconbtn_qa"
+  | "iconbtn_myworks"
+  | "iconicon_blacklist"
+  | "iconbtn_mycollect"
+  | "iconbtn_video_sel"
+  | "iconbtn_share"
+  | "iconbtn_mymessages"
+  | "iconbtn_search"
+  | "iconbtn_like"
+  | "iconbtn_xiaozhitongxue"
+  | "iconbtn_video"
+  | "iconbtn_home"
```

2. 添加点击事件

```diff
import classNames from 'classnames'

type Props = {
  type: IconType;
  className?: string;
+  onClick?: () => void
}

-export default function Icon({ type, className }: Props) {
+export default function Icon({ type, className, onClick }: Props) {
  return (
-    <svg className={classNames('icon', className)} aria-hidden='true'>
+    <svg onClick={onClick} className={classNames('icon', className)} aria-hidden='true'>
      <use xlinkHref={`#${type}`}></use>
    </svg>
  )
}
```

3. 测试图标名称提示和点击事件

```diff
import Icon from '@/components/Icon';

export default function Layout() {
  return (
    <>
      <h1>我是布局容器组件</h1>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref="#iconbtn_readingtime"></use>
      </svg>
      <Icon type="iconbtn_readingtime" className="testBox" />
+      <Icon type="iconbtn_like_sel" className="testBox" onClick={() => alert('点赞成功~')} />
    </>
  )
}
```



## `NavBar` 导航栏组件封装

> 目标：封装顶部导航栏组件，可以用来显示页面标题、后退按钮、及添加额外的功能区域

图例一：

<img src="assets/image-20210831163053705.png" alt="image-20210831163053705" style="zoom:30%;" />

图例二：

<img src="assets/image-20210831163126729.png" alt="image-20210831163126729" style="zoom:30%;" />

图例三：

<img src="assets/image-20210831205954290.png" alt="image-20210831205954290" style="zoom:30%;" />



实现思路：

- 组件布局分为：左、中、右三个区域
- 可通过组件属性传入内容，填充中间和右边区域
- 可为左边的“后退”按钮添加事件监听

**静态结构**

+ 基础结构：`src\components\NavBar\index.tsx`

```jsx
import Icon from '@/components/Icon'
import styles from './index.module.scss'

export default function NavBar() {
  return (
    <div className={styles.root}>
      <div className="main">
        {/* 后退按钮 */}
        <div className="left">
          <Icon type="iconfanhui" />
        </div>
        {/* 居中标题 */}
        <div className="title">标题</div>
        {/* 右侧内容 */}
        <div className="right">右侧</div>
      </div>
    </div>
  )
}
```

+ 样式 `src\components\NavBar\index.module.scss`

```scss
// 导入 hiarline.scss 文件
@import '@/assets/styles/hairline.scss';

.root {
  height: 46px;
  :global {
    .main {
      height: 46px;
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      background-color: #fff;
      // 1px 项目边框处理
      @include hairline('bottom', #ccc);
    }
    .fixed {
      position: fixed;
      z-index: 999;
    }
    .left {
      width: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .icon {
      font-size: 16px;
      color: #ddd;
    }
    .title {
      flex: 1;
      margin: 0 auto;
      color: #323233;
      font-weight: 500;
      font-size: 16px;
      text-align: center;
    }
    .right {
      padding-right: 16px;
      width: 48px;
    }
  }
}

```

## 导航栏组件封装-属性升级



**操作步骤**

1. 升级属性

```jsx
import Icon from '@/components/Icon'
import styles from './index.module.scss'
import { useHistory } from 'react-router'

export default function NavBar({ children, extra }) {
  const history = useHistory()
  const back = () => {
    // 跳回上一页
    history.go(-1)
  }
  return (
    <div className={styles.root}>
      {/* 后退按钮 */}
      <div className="left">
        <Icon type="iconfanhui" onClick={back} />
      </div>
      {/* 居中标题 */}
      <div className="title">{children}</div>

      {/* 右侧内容 */}
      <div className="right">{extra}</div>
    </div>
  )
}

```

2. 测试组件功能

```jsx
<NavBar
  onLeftClick={() => alert(123)}
  rightContent={<span>右侧内容</span>}
>
  标题内容
</NavBar>
```

