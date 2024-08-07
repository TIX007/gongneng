### vue服务器配置

```vue
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint
  lintOnSave:false,
  // 启动配置
  devServer: {
    host:'localhost',
    port: port,
    open: true,
  },
})
```

### vue连接后端配置

```
在.env.development中将VUE_APP_DEV_REQUEST_DOMAIN_PREFIX = 'http://172.16.10.44:5080'
```

### 动态绑定class跟style

```vue
:class="row.readonly ? 'ban': '' "

:style="{'color': row.readonly ? '#C8C9CC' : '#f50'}"
:style="[{display:(activeName=='first' ? 'flex' : 'none')},{fontSize:'20px'}]"

```

### 多个或者if判断简写
``` js
v-if="['1', '2', '7'].includes(scope.row.jtgjlx)"
```

### 路由跳转传参页面刷新获取参数更新页面

[(4条消息) vue之this.$router.push页面刷新问题_凶呆呆的博客-CSDN博客_vuerouterpush刷新](https://blog.csdn.net/weixin_47800450/article/details/112167359?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2~default~CTRLIST~Rate-1.pc_relevant_antiscanv2&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2~default~CTRLIST~Rate-1.pc_relevant_antiscanv2&utm_relevant_index=1)

1.

```vue
<keep-alive :exclude="exclude">
    <!--  通过key设置页面刷新 规矩$route.fullPath 得到路由(包含带?的参数)
:key="$route.fullPath" 如果路由改变就刷新 -->
    <!--   <router-view :key="$route.fullPath"></router-view>-->
    <router-view :key="$route.fullPath"></router-view>
</keep-alive>
```

```js

this.$router.push({  
        path:'/business/appten',  
        query:{           
          appten:a.applyServeId ,
        }
      })
```

2.

**zhongzhuan.vue** 中

```vue
<template>
    <div></div>
</template>

<script>
    export default {
        // 用来中转，避免路由不变时 页面不刷新
        name: "zhongzhuan",

        created() {
            this.pushUrl()
        },
        methods: {
            getData(){
                return this.$route.query.state
            },
            pushUrl(){
                this.$router.push({
                    path: '/datadisplay',
                    query: {state: this.getData()},  // 传递参数，放在url?后面的
                })
            }
        },
    }
</script>

```

**datadisplay.vue** 中

```vue
<template>
    <div>
        <p>content：{{ content }}</p>
    </div>
</template>

<script>
    export default {
        name: "datadisplay",
        data(){
            return {
                content: '123',
            }
        },

        created() {
            this.getData()
        },
        methods: {
            getData(){
                //this.$router 实际上就是全局路由对象任何页面都可以调用 push(), go()等方法；
                // this.$route  表示当前正在用于跳转的路由器对象，可以调用其name、path、query、params等属性。
                // 应此需要接受路由参数时，要用this.$route，发送跳转路由时要用this.$router
                console.log(this.$route);
                this.content = this.$route.query;
            }
        }
    }

</script>

<style scoped>

</style>

```

### watch监听router
```js
'$route': { // $route可以用引号，也可以不用引号
      handler(to, from) {
        console.log('路由变化了')
        console.log('当前页面路由：' + to); //新路由信息
        console.log('上一个路由：' + from); //老路由信息
      },
      deep: true, // 深度观察监听
      immediate: true, // 第一次初始化渲染就可以监听到
    },
```

### vue 给data 数据的重新初始化

初始化data中某个字段key数据

```vue
Object.assign(this.$data.key, this.$options.data().key);
```


初始化全部的data数据

```vue
Object.assign(this.$data, this.$options.data());
```

### vue路由点击高亮效果

**法一**

```vue
<template>
	<router-link class="nav-link" :class="$route.path == item.url ? 'active' : '' " :to="item.url">{{ 	item.title }}</router-link>
</template>

<style>
	.active{
    color: rgb(236, 26, 11);
  }
</style>

```

**法二**

```css
.router-link-active{
    color:red
}
```

### vue滑块登录验证组件

[Vue滑块验证 - gaozejie - 博客园 (cnblogs.com)](https://www.cnblogs.com/gaozejie/p/14741385.html)

在`src\components`新建`SilderVerify\index.vue`文件

```vue
<template>
  <div class="silder-range" :class="rangeStatus?'success':''">
    <i @mousedown="rangeMove" :class="rangeStatus?successIcon:startIcon"></i>
    {{rangeStatus?successText:startText}}
  </div>
</template>
<script>
export default {
  props: {
    //成功图标
    successIcon: {
      type: String,
      default: "el-icon-success"
    },
    //成功文字
    successText: {
      type: String,
      default: "验证成功"
    },
    //开始的图标
    startIcon: {
      type: String,
      default: "el-icon-d-arrow-right"
    },
    //开始的文字
    startText: {
      type: String,
      default: "拖动滑块到最右侧"
    }
  },
  name: "SilderVerify",
  data() {
    return {
        rangeStatus:'',
        
    };
  },
  methods: {
    rangeMove(e){
			let ele = e.target;
			let startX = e.clientX;
			let eleWidth = ele.offsetWidth;
			let parentWidth =  ele.parentElement.offsetWidth;
			let MaxX = parentWidth - eleWidth;
			if(this.rangeStatus){//不运行
				return false;
			}
			document.onmousemove = (e) => {
				let endX = e.clientX;
				this.disX = endX - startX;
				if(this.disX<=0){
					this.disX = 0;
				}
				if(this.disX>=MaxX-eleWidth){//减去滑块的宽度,体验效果更好
					this.disX = MaxX;
				}
				ele.style.transition = '.1s all';
				ele.style.transform = 'translateX('+this.disX+'px)';
				e.preventDefault();
			}
			document.onmouseup = ()=> {
				if(this.disX !== MaxX){
					ele.style.transition = '.5s all';
					ele.style.transform = 'translateX(0)';

          this.$emit("failed", this.rangeStatus);
					
				}else{
					this.rangeStatus = true;

          this.$emit("success", this.rangeStatus);
					
				}
				document.onmousemove = null;
				document.onmouseup = null;
			}
		}
  
  }
};
</script>
<style scoped>
.silder-range{
	background-color: #e3e4e6;
	position: relative;
	transition: 1s all;
	user-select: none;
	color: #333;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 45px; /*no*/
}
.silder-range i{
	position: absolute;
	left: 0;
	width: 60px;/*no*/
	height: 100%;
	color: #919191;
	background-color: #fff;
	border: 1px solid #bbb;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
}
.silder-range.success{
	background-color: #7AC23C;
	color: #fff;
}
.silder-range.success i{
	color: #7AC23C;
}
</style>

```

引入

```javascript
import SilderVerify from '@/components/SilderVerify'

  components:{
    SilderVerify
  }
```

el-from验证

```vue
<script>
export default{
data() {
 const validatestatus = (rule, value, callback)=> {
      if (!value) {
        callback(new Error('请拖动滑块完成验证'))
      } else {
        callback()
      }
    }
  return {}
}
rules: {
      status: [{ validator: validatestatus, trigger: "change" }]
    }
}
</script>
```

使用

```vue
     <el-form-item prop="status">  
        <silder-verify @success="handleSuccess" @failed="handleError"></silder-verify >
      </el-form-item>

    handleSuccess(){
      this.loginForm.status = true
      this.$refs.loginForm.validateField("status")
    }
```

### vue视频插件

[(4条消息) 在vue中使用video.js实现视频播放_先养只猫的博客-CSDN博客_vue如何使用video](https://blog.csdn.net/qq_52050769/article/details/120057519)

[vue-core-video-player (core-player.github.io)](https://core-player.github.io/vue-core-video-player/)

引入

```shell
npm install --save video.js
```

这里定义一个名为VideoJs的**组件**，便于使用。
注意要引入下面的video-js.css和video.js！！，一个是样式，一个是播放器。

```vue
<template>
  <div>
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css';
import videojs from 'video.js';
export default {
  name: "VideoJs",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      player: null
    }
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this);
    })
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>

<style scoped>

</style>

```

使用

```vue
<template>
  <div>
    <video-player :options="videoOptions" />
  </div>
</template>

<script>
import VideoPlayer from '@/components/VideoPlayer.vue';
import 'video.js/dist/video-js.css';
export default {
  name: 'VideoExample',
  components: {
    VideoPlayer
  },
  data() {
    return {
      videoOptions: {
        autoplay: true,
        controls: true,//开启交互，即是用户可控。
        muted: true,//开启视频时是否静音
        fluid: true,//根据外层css样式大小，自动填充宽高！比较实用，可搭配响应式
        reload: "auto",//重载
        //其余设置根据需求添加！
        poster: require('@/assets/images/海贼王.jpg'),//视频封面
        sources: [
          {
            src:
              '/path/to/video.mp4',
              type: 'video/mp4'
          }
        ]
      }
    };
  }
};
</script>
```

### 新增一行数据滚动条自动滚到底部
```vue
<template>
    <div>
        <div ref="scrollContainer" style="height: 200px; overflow-y: auto;">
            <ul>
                <li v-for="item in items" :key="item.id">{{ item.name }}</li>
            </ul>
        </div>
        <button @click="addItem">新增一行数据</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
                // 其他数据...
            ]
        };
    },
    methods: {
        addItem() {
            // 模拟新增一行数据
            const newItem = { id: this.items.length + 1, name: 'New Item' };
            this.items.push(newItem);

            // 滚动到底部
            this.$nextTick(() => {
                this.$refs.scrollContainer.scrollTop = this.$refs.scrollContainer.scrollHeight;
            });
        }
    }
};
</script>
```


### 获取滚动条距离顶部的距离

```vue
mounted() {
        window.addEventListener('scroll',this.handleScroll,true)
    },
    methods: {
        handleScroll (e) {
	      let scrollTop =  e.target.scrollTop;
	      console.log(scrollTop,'距离顶部的距离')
	    }
    }
```

### 吸顶效果
```vue

<template>
  <div class="nav-sub ">
          <active-btn :class="fixed == true ? 'fixed' : ''">
            可添加文字</active-btn
          >
 </div>
</template>

<script>
export default {
  data () {
    return { fixed: false }
  },
  mounted () {
    window.addEventListener('scroll', this.fixedActiveBtn)
  },
  methods: {
    fixedActiveBtn () {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      scrollTop >= 120 ? (this.fixed = true) : (this.fixed = false)
    }
  }
}
</script>

<style scoped>
.nav-sub {
  // position: relative;
  height: 90px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  // position: sticky;
}
.fixed {
  position: fixed;
  z-index: 21;
  height: 60px;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #dadada;
  background-image: -webkit-linear-gradient(#fff, #f1f1f1);
  background-image: linear-gradient(#fff, #f1f1f1);
}

</style>
```

### 页面跳转路由时滚动条置顶

```vue
router.beforeEach((to, from, next) => {
    const app = document.getElementById('app')
    app.scrollTop = 0
    next()
})
```

### vue获取已定义div高度的高度

```vue
<div class="top" ref="top">

mounted () {
  let topHeight = this.$refs.top.offsetHeight // 头部高度
  console.log(topHeight)
}

```

### 初始项目vue.config.js配置

```js

const path = require("path");

function resolve(dir) {
  //此处使用path.resolve 或path.join 可自行调整
  return path.join(__dirname, dir);
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // 启动配置
  devServer: {
    host:'localhost',
    port: 8080,
    open: true,
    proxy: {
      "/gateway/api": {
        target: "http://10.9.235.54:9000",
        ws: true,
        changeOrigin: true,
      }
    },
  },

   // webpack相关配置
  chainWebpack: (config) => {
    //设置别名
    config.resolve.alias.set("@", resolve("src"));
    //    .set('vue$', 'vue/dist/vue.esm.js')
    config.plugin("html").tap((args) => {
      args[0].title = "金瑞医疗";
      return args;
    });
  },



})

```

### vue中echarts实现水球动画图

[(4条消息) vue中echarts实现水球动画图_small_fox_dtt的博客-CSDN博客_echarts水波球](https://blog.csdn.net/small_fox_dtt/article/details/107635707?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~Rate-1-107635707-blog-109188774.pc_relevant_antiscanv2&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~Rate-1-107635707-blog-109188774.pc_relevant_antiscanv2&utm_relevant_index=2)

[(4条消息) Vue中使用echarts实现水球图_是日前端的博客-CSDN博客_echarts 水球图](https://blog.csdn.net/focusmickey/article/details/109188774)

思路：把后面图片用背景图片写入 中间水球图使用echarts中的liquidFill

由于自己是在vue中使用的 首先要用npm安装

npm i echarts-liquidfill -s

在页面引用

```shell
import "echarts-liquidfill";
```



```html
//html模块
 
<div class="carLeft">
   <div class="carCharts" ref="carCharts"></div>
</div>
 
 
//css模块
 
 .carLeft{
        width: 1.4rem;
        height: 1.66rem;
        margin-right: 0.24rem;
        margin-top: 0.24rem;
        background: url(../assets/image/carBg.png) no-repeat;
        background-size: 100%;
        position: relative;
        .carCharts{
            position: absolute;
            top: 0.26rem;
            left: .13rem;
            width: .9rem;
            height: .9rem;
            // left: 0.1rem;
        }
    }
 
//js模块
 
                        var myChart = echarts.init(this.$refs.carCharts);
                        const echartsData =  [40, 60];
 
                        var option = {
                            waveLength:'100%',
                            // x轴
                            xAxis:{
                                show:false, // 不显示
                            },
                            // y轴
                            yAxis: {
                                show:false, // 不显示
                            },
                            grid:{
                                top:'2.5%',
                                right:'40',
                                bottom:'2.5%',
                                left:0,
                            },
                            series: [{
                                type: 'liquidFill',
                                radius: '100%',  // 半径大小
                                center: ['50%', '50%'],    // 布局位置
                                waveLength:'150',
                                data:echartsData, // 水球波纹值
 
 
                                //根据设计设置水波球背景颜色为透明
                                backgroundStyle: {
                                    color: 'rgba(255,255,255,0)',
                                },
                                outline: { // 轮廓设置  不展示
                                    show: false
                                },
                                itemStyle: {  
                                    //设置水球波动的渐变颜色
                                    color: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        colorStops: [{
                                            offset: 1,
                                            color: 'rgba(23,242,206, .65)'
                                        },  {
                                            offset: 0.9,
                                            color: 'rgba(23,242,206, .15)'
                                        },{
                                            offset: 0.4,
                                            color: 'rgba(23,242,206, .15)'
                                        },{
                                            offset: 0,
                                            color: 'rgba(12,255,215,1)'
                                        }],
                                        globalCoord: false
                                    }
                                },
                                //水球中间展示字体及颜色
                                label:{
                                    normal:{
                                        textStyle: {
                                            fontSize: 24,
                                            color:'#fff',
                                            fontWeight:400,
                                            formatter: '',
                                        }
                                    }
                                }
                            }]
                        };
                        myChart.clear();
                        myChart.resize();
                        myChart.setOption(option);
```

### 列表轮播组件

[Installation | vue-seamless-scroll (chenxuan0000.github.io)](https://chenxuan0000.github.io/vue-seamless-scroll/guide/)

### 记住密码逻辑

```html
<el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="loginForm demo-ruleForm">
  <!-- 账号 -->
  <el-form-item label="账号" prop="userId" autocomplete="on">
    <el-input v-model="loginForm.userId" placeholder="请输入账号"></el-input>
  </el-form-item>
  <!-- 密码 -->
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" @keyup.enter="submitForm('loginForm')"></el-input>
  </el-form-item>
  <div class="tip">
    <!-- 记住我 -->
    <el-checkbox v-model="checked" class="rememberMe">记住我</el-checkbox>
    <!-- 找回密码 -->
    <el-button type="text" @click="open()" class="forgetPw">忘记密码？</el-button>
  </div>
  <!-- 登录 -->
  <el-form-item>
    <el-button type="primary" @click="submitForm('loginForm')" class="submit-btn">登录</el-button>
  </el-form-item>
</el-form>

```

为提高安全性，密码存储前需进行加密处理。目前加密方式有很多种，我这里选用了base64。

npm安装base64依赖

```bash
//安装
npm install --save js-base64
//引入
const Base64 = require("js-base64").Base64

```

**localStorage**

```js
export default {
  data() {
    return {
      loginForm: {
        userId: "",
        password: "",
      },
      checked: false,
    };
  },
  mounted() {
    let username = localStorage.getItem("userId");
    if (username) {
      this.loginForm.userId = localStorage.getItem("userId");
      this.loginForm.password = Base64.decode(localStorage.getItem("password"));// base64解密
      this.checked = true;
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          /* ------ 账号密码的存储 ------ */
          if (this.checked) {
            let password = Base64.encode(this.loginForm.password); // base64加密
            localStorage.setItem("userId", this.loginForm.userId);
            localStorage.setItem("password", password);
          } else {
            localStorage.removeItem("userId");
            localStorage.removeItem("password");
          }
          /* ------ http登录请求 ------ */
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};

```

**cookies**

```js
export default {
  data() {
    return {
      loginForm: {
        userId: "",
        password: "",
      },
      checked: false,
    };
  },
  mounted() {
    this.getCookie();
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          /* ------ 账号密码的存储 ------ */
          if (this.checked) {
            let password = Base64.encode(this.loginForm.password); // base64加密
            this.setCookie(this.loginForm.userId, password, 7);
          } else {
            this.setCookie("", "", -1); // 修改2值都为空，天数为负1天就好了
          }
          /* ------ http登录请求 ------ */
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    
    // 设置cookie
    setCookie(userId, password, days) {
      let date = new Date(); // 获取时间
      date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * days); // 保存的天数
      // 字符串拼接cookie
      window.document.cookie =
        "userId" + "=" + userId + ";path=/;expires=" + date.toGMTString();
      window.document.cookie =
        "password" + "=" + password + ";path=/;expires=" + date.toGMTString();
    },
    
    // 读取cookie 将用户名和密码回显到input框中
    getCookie() {
      if (document.cookie.length > 0) {
        let arr = document.cookie.split("; "); //分割成一个个独立的“key=value”的形式
        for (let i = 0; i < arr.length; i++) {
          let arr2 = arr[i].split("="); // 再次切割，arr2[0]为key值，arr2[1]为对应的value
          if (arr2[0] === "userId") {
            this.loginForm.userId = arr2[1];
          } else if (arr2[0] === "password") {
            this.loginForm.password = Base64.decode(arr2[1]);// base64解密
            this.checked = true;
          }
        }
      }
    },
  },
};

```

### 数字大屏逻辑全屏

全屏方法

```js
setFullScreen() {
            let el = document.documentElement;
            let rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen
            if (rfs) { // typeof rfs != "undefined" && rfs
                rfs.call(el)
            } else if (typeof window.ActiveXObject !== 'undefined') {
				// for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
                let wscript = new ActiveXObject('WScript.Shell');  //eslint-disable-line
                if (wscript != null) {
                    wscript.SendKeys('{F11}')
                }
            }
            
        },

```

退出全屏方法

```js
exitFullScreen() {
            let el = document;
            let cfs = el.cancelFullScreen || el.mozCancelFullScreen || el.msExitFullscreen || el.webkitExitFullscreen || el.exitFullscreen;
            if (cfs) { // typeof cfs != "undefined" && cfs
                cfs.call(el);
            } else if (typeof window.ActiveXObject !== 'undefined') {
                // for IE，这里和fullScreen相同，模拟按下F11键退出全屏
                let wscript = new ActiveXObject('WScript.Shell'); //eslint-disable-line
                if (wscript != null) {
                    wscript.SendKeys('{F11}')
                    
                }
            }
        },

```

判断是否全屏

```js
isFullScreen() {
    return  !! (
        document.fullscreen || 
        document.mozFullScreen ||                         
        document.webkitIsFullScreen ||       
        document.webkitFullScreen || 
        document.msFullScreen 
    );
}

```

注意:该方法只能判断手动调用全屏和退出全屏的api，按f11键进入的全屏状态是false

全屏按钮设置点击事件

```js
	fullScreenHandle() {
            var isFull = isFullScreen()
			if(isFull) {
				this.exitFullScreen()
			}else {
				this.setFullScreen()
			}
        },

```

注意：按f11进入的全屏不能使用退出一中的退出全屏的方法，所以要监听用户按下f11的键盘事件并手动调用进入全屏的方法

监听全局的键盘事件

```js
 window.addEventListener('keydown',(e)=> {
            var isFull = isFullScreen()
            e = e || window.event
              if(e.keyCode == 122 && !isFull) {
                  e.preventDefault()
                  this.setFullScreen()
              }
        })

```

### 地图位置标点组件

main.js引入

```js
import Vue from 'vue'
import App from './App.vue'

import Element from 'element-ui'
import AMap from 'vue-amap';  //
import router from "./router";
import base from './utils'

import './styles/common.scss'
import './styles/element-variables.scss'
import '@/assets/fonts/iconfont.css'
import "./assets/css/style.css";

Vue.config.productionTip = false
Vue.prototype.$base = base()

Vue.use(AMap);  //
Vue.use(Element, {})

 // 初始化vue-amap
AMap.initAMapApiLoader({
 // 高德key
 key: 'ff749b80980f651bdb087f87fb331fc7',
 // 插件集合 （插件按需引入）
 plugin: [
		'AMap.CircleEditor',// 圆形编辑器插件
		"AMap.Geolocation", // 定位控件，用来获取和展示用户主机所在的经纬度位置
		"AMap.Geocoder", // 地理编码与逆地理编码服务，用于地址描述与坐标间的相互转换
		"AMap.Autocomplete",
		"AMap.PlaceSearch",
		"AMap.CitySearch",
	],
  uiVersion: '1.0.11' // ui版本号，也是需要写
});
//高德的安全密钥
window._AMapSecurityConfig = {
	securityJsCode:'85646af48ec8de8d9071b79bacf1d1cb',
}

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')

```

组件

```vue
<template>
    <div class="aMap-wrapper">
        <el-amap class="amap-box" :zoom="zoom" :center="center" >
            <el-amap-marker v-for="marker in markers" :position="marker.position" :key="marker.id"
                :events="marker.events" ></el-amap-marker>
            <el-amap-info-window v-if="window" :position="window.position" :visible="window.visible"
                :content="window.content" :offset="window.offset"></el-amap-info-window>
        </el-amap>
    </div>
</template>

<script>
export default {
    data() {
        return {
            center: [121.476753, 31.224349],
            zoom: 12,
            // mapStyle: "amap://styles/blue", //修改地图的背景颜色
            markers: [],
            windows: [],
            window: '',
        }
    },
    mounted() {
        this.point()
    },
    methods: {
        point() {
            //自定义map点坐标图标
            // let icon = new AMap.Icon({
            //     image: location,
            //     size: new AMap.Size(2, 2),
            //     imageSize: new AMap.Size(2, 2)
            // });

            let markers = [];
            let windows = [];
            let that = this;
            let pointMarker = [
                {
                    lng: 121.53024573538588,
                    lat: 31.240638657099563,
                    stationName: "联通（上海）产业互联网有限公司",
                    stationAddress: '上海市浦东新区浦东大道902号',//站址
                }, {
                    lng: 121.41699750635908,
                    lat: 31.21781776889725,
                    stationName: "联通（上海）产业互联网有限公司",
                    stationAddress: '上海市长宁区长宁路1033号',//站址
                }
            ]
            pointMarker.forEach((item, index) => {
                markers.push({
                    position: [item.lng, item.lat],
                    icon: location, //不设置默认蓝色水滴
                    events: {
                        click() {
                            that.windows.forEach(window => {
                                window.visible = false; //关闭窗体
                            });
                            that.window = that.windows[index];
                            that.$nextTick(() => {
                                that.window.visible = true;//点击点坐标，出现信息窗体
                            });
                        }
                    }
                })
                windows.push({
                    position: [item.lng, item.lat],
                    content: "" +
                        "<div>" + "名称：" + item.stationName + "</div>" +
                        "<div>" + "地 址：" + item.stationAddress + "</div>" 
                        // "<div>" + "温度：" + "<span style='color: #66A0FF'>" + item.temperature + "</span>" + "</div>" +
                        // "<div>" + "雨量：" + "<span style='color: #66A0FF'>" + item.rainfall + "</span>" + "</div>" +
                        // "<div>" + "风向：" + "<span style='color: #66A0FF'>" + item.windDirection + "</span>" + "</div>" +
                        // "<div>" + "风速：" + "<span style='color: #66A0FF'>" + item.windSpend + "</span>" + "</div>" +
                        // "<div>" + "水位：" + "<span style='color: #66A0FF'>" + item.waterLevel + "</span>" + "</div>" +
                        // "<div>" + "流速：" + "<span style='color: #66A0FF'>" + item.waterVelocity + "</span>" + "</div>" +
                        // "<div>" + "流量：" + "<span style='color: #66A0FF'>" + item.waterTraffic + "</span>" + "</div>"
                    ,
                    offset: [5, -15],//窗体偏移
                    visible: false//初始是否显示
                })
            })
            //添加点标注
            this.markers = markers;
            //生成弹窗
            this.windows = windows
        },
    },

};
</script>

<style scoped>

.aMap-wrapper{
    width: 100%;
    height: 100%;
}
</style>
```

### vue过滤器（多出字符改省略号）

```vue
<div class="case_card_text2">{{ item.text1 | ellipsis}}</div>

export default {

filters:{
        ellipsis(value){
          if (!value) return '';
          if (value.length > 54) {
            return value.slice(0,54) + '...'
          }
          return value
        },
        ellipsis1(value){
          if (!value) return '';
          if (value.length > 100) {
            return value.slice(0,100) + '...'
          }
          return value
        },
      },

}
```

### 数据每隔一秒分段依次显示

```vue
<template>
    <div>
        <ul v-for="(item, index) in list " :key="index">
            <li>{{ item.title }}</li>
        </ul>
    </div>
</template>

<script>
const list = [
    {
        title: '1',
    }, 
    {
        title: '2',
    }, 
    {
        title: '3',
    },
    {
        title: '4',
    },
    {
        title: '5',
    },
    {
        title: '6',
    },
    {
        title: '7',
    },
    {
        title: '8',
    },
    {
        title: '9',
    },
]
export default {
    data() {
        return {
            list : list.slice(0,4)
        }
    },
    mounted() {
        this.xuan()
    },
    methods: {
        xuan(){
            if (list.length <= 4) {
                
            } else if ( 4< list.length){
                console.log(list);
                var lists = arrayChunk(list,4)
                // size每组数组多少个，如：8
                // array需要拆分的数组
                function arrayChunk(array, size) {
                    let data = []
                    for (let i = 0; i < array.length; i += size) {
                        data.push(array.slice(i, i + size))
                    }
                    return data
                }
            
            var a = 1
            setInterval(() => {
                if (a < lists.length) {
                    this.list = lists[a]
                    a++
                } else {
                    a = 0
                    this.list = lists[a]
                    a++
                }
            }, 1000);
            }
            
        }
    }
}
</script>

<style>
</style>
```

### 流光特效（大屏）

```vue
<template>
  <div class="login">
    <h1>动态效果</h1>
    <div class="lightline"></div>
    <ol>
      <li v-for="(item, index) in indoorParams" :key="index">
        <div class="animate-border">
          <i></i>
          <i></i>
        </div>
      </li>
    </ol>
  </div>
</template>
 
<script>
import { ref } from "vue";
export default {
  setup() {
    let indoorParams = ref([1]);
    return { indoorParams };
  },
};
</script>
<style scoped lang="scss">
.login {
  background-color: #000;
  height: 100%;
}
 
ol li {
  border: 1px solid rgba(32, 254, 255, 0.3);
  /* 宽高和相对定位是一定要给的,因为这会影响.animate-border子元素的定位 */
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  /* 利用伪元素和两个i元素产生4条线 */
  .animate-border {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
    }
    i {
      position: absolute;
      display: inline-block;
      height: 100%;
      width: 1px;
    }
    &::before {
      top: 0;
      left: -100%;
      background-image: linear-gradient(
        90deg,
        transparent,
        #03e9f4,
        transparent
      );
 
      animation: one 4s linear infinite;
    }
    i:nth-child(1) {
      top: -100%;
      right: 0;
      background-image: linear-gradient(
        180deg,
        transparent,
        #03e9f4,
        transparent
      );
      /* 动画名称  动画持续时间  动画渲染函数 动画延迟时间 动画执行次数 */
      animation: two 4s linear 1s infinite;
    }
    &::after {
      bottom: 0;
      right: -100%;
      background-image: linear-gradient(
        -90deg,
        transparent,
        #03e9f4,
        transparent
      );
      animation: three 4s linear 2s infinite;
    }
    i:nth-child(2) {
      bottom: -100%;
      left: 0;
      background-image: linear-gradient(
        360deg,
        transparent,
        #03e9f4,
        transparent
      );
      animation: four 4s linear 3s infinite;
    }
  }
}
@keyframes one {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}
 
@keyframes two {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}
 
@keyframes three {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}
 
@keyframes four {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
.lightline {
  margin-left: 100px;
  width: 100px;
  height: 2px;
  background-image: linear-gradient(90deg, transparent, #03e9f4, transparent);
}
</style>
```

### lottie-web动画

```vue
<template>
    <div class="box">
        <div id="bm"></div>
        <button @click="startFun">播放</button>
        <button @click="suspendFun">暂停</button>
    </div>
</template>

<script >
import lottie from 'lottie-web';
import * as animationData from '@/components/data.json'

export default {
    name: 'Lottie',
    data() {
        return {
            lottie: {},
        }
    },
    methods: {
        suspendFun () {
            this.lottie.pause();
        },
        startFun () {
            this.lottie.play()
        },
        
    },
    mounted() {
        console.log(lottie);
        this.lottie = lottie.loadAnimation({
            container: document.getElementById('bm'),
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData: animationData.default  
        })
    }
}
</script>

<style>


.box {
  background-color: #000;
  width: 100%;
  height: 100%;
}

#bm {
    max-width: 100%;
    max-height: 100%;
}
</style>
```

### vue添加.pug器

```shell
npm i -D pug pug-html-loader pug-plain-loader
```

在vue.config.js中

```js
// 配置HTML lang='pug'
  chainWebpack: config => {
      config.module.rule('pug')
        .test(/\.pug$/)
        .use('pug-html-loader')
        .loader('pug-html-loader')
        .end()
  }
```

<template lang='pug'>

### 文件上传及进度条

```vue
<template>
    <div class="block">
        <input id="uploadFile" type="file" name="file" />
        <img style="width: 300px;" :src=imgurl alt="">
        <button type="submit" @click="upload">上传按钮</button>
        <el-progress id="progress" type="circle" :percentage="percent" :stroke-width="8" :width="100" :show-text="true"
            stroke-linecap="round" :format="progressFormat"></el-progress>

        <form action="http://127.0.0.1:7001/user/uploadImg" method="post" encType="multipart/form-data">
            <input type="file" name="file" />
            <input type="submit" value="上传" />
        </form>
        
    </div>
</template>

<style>


</style>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            percent: 0,
            progressFlag: false,
            deg: 135,
            status: this.percent < 100 ? "" : "success",//进度条组件加上状态后不显示文字
            color: [
                { color: "#fdfdfd", percentage: 99 },
                { color: "#ccccc", percentage: 100 },
            ],
            imgurl:''
        }
    },
    mounted() {
        // console.log(servicePath);
        this.imgurl = localStorage.getItem('headPicPath')
    },
    methods: {
        upload(){
            let file = document.querySelector('#uploadFile').files[0]
            let formData = new FormData()
            let userId = localStorage.getItem('userId')

            formData.append("uploadFile", file)
            formData.append("userId", userId)

            axios.post('http://fengling.xyz:7001/user/uploadImg', formData, {
                onUploadProgress: (progressEvent) => {
                    // progressEvent.loaded:已上传文件大小
                    // progressEvent.total:被上传文件的总大小
                    this.percent = Math.trunc(progressEvent.loaded / progressEvent.total * 100)  ;
                    // console.log(progressEvent.loaded / progressEvent.total * 100 + "%");
                }
            } )
                .then(function (response) {
                    localStorage.setItem('headPicPath', response.data.url)
                    navigate('/index/my/myDetail')
                    console.log(response,'111');
                    
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        progressFormat(percentage) {
            return percentage < 100 ? "已上传(" + percentage + "%)" : "上传完成"
        }
    }
}
</script>

```

### 打包项目时移除所有console.log()

vue.config.js

```js
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	configureWebpack: {
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log'] // 移除console
            }
          },
        })
      ]
    }
  }
}
```

2.

```js
chainWebpack(config){
    config.optimization.minimizer('terser').tap((args) => {
      args[0].terserOptions.compress.drop_console = true
      return args
    })
}
```



### 忽略 ESlint 校验

新建一个`.eslintignore`文件用来指定不进行 ESlint 校验的目录/文件

```
/build/
/dist/
/node_modules/
*.js
```

### Vue 数组中出现__ob__: Observer无法取值

我们应该考虑到我们再用vue取值的方式是Ajax异步的，换句人话就是说，你还没有从数据库中取到值放到对应的数组中去你那边就开始取值，那肯定是取不到的，所以我们可以有两种方法，第一种把这个换成同步的形式等你加载完之后再进行取值，或者说采用第二种方式就是设一个延迟等去取完之后呢你在进行赋值即可！那么你就可以看到这个值了

```js
mounted() {
     setTimeout(()=>{
     //这里就写你要执行的语句即可，先让数据库的数据加载进去数组中你在从数组中取值就好了
     },800)
 }
```

### 子组件调用父组件方法

**1、子组件中通过 \**this.$parent.event\** 来调用父组件的方法。**

父

```vue
<template>
  <div>
    <child></child>
  </div>
</template>
<script>
  import child from './child';
  export default {
    components: {
      child
    },
    methods: {
      fatherMethod() {
        console.log('调用父组件方法成功');
      }
    }
  };
</script>
```

子

```vue
<template>
  <div>
    <button @click="childClick()">点击</button>
  </div>
</template>
<script>
  export default {
    methods: {
      childClick() {
        this.$parent.fatherMethod();
      }
    }
  };
</script>
```

**2、在子组件里用 \**`$emit`\**向父组件触发一个事件，父组件监听这个事件。**

父

```vue
<template>
  <div>
    <child @fatherMethod="fatherMethod"></child>
  </div>
</template>
<script>
  import child from './child';
  export default {
    components: {
      child
    },
    methods: {
      fatherMethod() {
        console.log('调用父组件方法成功');
      }
    }
  };
</script>
```

子

```vue
<template>
  <div>
    <button @click="childClick()">点击</button>
  </div>
</template>
<script>
  export default {
    methods: {
      childClick() {
        this.$emit('fatherMethod');
      }
    }
  };
</script>
```

**3、父组件把方法传入子组件中，在子组件里直接调用这个方法。**

父

```vue
<template>
  <div>
    <child :fatherMethod="fatherMethod"></child>
  </div>
</template>
<script>
  import child from './child';
  export default {
    components: {
      child
    },
    methods: {
      fatherMethod() {
        console.log('调用父组件方法成功');
      }
    }
  };
</script>
```

子

```vue
<template>
  <div>
    <button @click="childClick()">点击</button>
  </div>
</template>
<script>
  export default {
    props: {
      fatherMethod: {
        type: Function,
        default: null
      }
    },
    methods: {
      childClick() {
        if (this.fatherMethod) {
          this.fatherMethod();
        }
      }
    }
  };
</script>
```
**通过组件的$emit、$on方法；**
父
```vue
<template>

    <div>

        <Button @click="handleClick">点击调用子组件方法</Button>

        <Child ref="child"/>

    </div>

</template>    

 

<script>

import Child from './child';

 

export default {

    methods: {

        handleClick() {

               this.$refs.child.$emit("childmethod")    //子组件$on中的名字

        },

    },

}

</script>
```

子
```vue
<template>

    <div>我是子组件</div>

</template>

<script>

export default {

    mounted() {

        this.$nextTick(function() {

            this.$on('childmethods', function() {

                console.log('我是子组件方法');

            });

        });

     },

};

</script>
```

项目关闭tab页返回上级

```js
// 关闭当前页并返回上一页
export function closePageAndBack(nextPath) {
  this.$tab.closePage(this.$route).then(({visitedViews}) => {
    if (nextPath) {
      this.$router.push(nextPath);
    } else {
      this.$router.history.go(-1)
    }
  })
}
```

### Promise合并请求

```js
const tasks = [getList1(id),getList2(id)]
//tasks为所有请求
Promise.all(tasks).then(results=>{
 console.log(results)
})
```

### 打包体积

```js
vue-cli-service build --report
```

### Element中Table树形数据懒加载新增（删除 编辑同理）后数据动态更新

```vue
<template>
  <div>
    <div>
      <el-button type="primary" @click="addTo">添加</el-button>
    </div>
    
    <el-table ref="table" :data="tunnelList" row-key="id" lazy :load="load" :tree-props="{ children: 'children', hasChildren: 'hasChildren' }" border>
      <el-table-column label="序号" width="55" align="center">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column prop="name" label="名称" align="center"></el-table-column>
      <el-table-column prop="date" label="时间" align="center"></el-table-column>
      <el-table-column prop="address" label="地址" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      tunnelList: [
        {
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          hasChildren: true
        }
      ],
      tId: '',
      loadData: new Map(),
    }
  },
  filters: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    getSonData(id, resolve, addData) { // 模拟调用接口
      let data = [
        {
          id: 31,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          id: 32,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }
      ]
      
      if (addData) {
        data.push(addData)
      }

      setTimeout(() => {
        resolve(data)
      }, 1000)
    },
    load(tree, treeNode, resolve) {
      this.tId = tree.id // 储存当前展开节点
      this.loadData.set(this.tId, { tree, treeNode, resolve }) // 缓存load
      this.getSonData(tree.id, resolve) // 重置子节点数据
    },
    addTo() {
      let id = this.tId
      const { tree, treeNode, resolve } = this.loadData.get(id); // 根据id取出对应节点的数据
      this.$set(this.$refs.table.store.states.lazyTreeNodeMap, id, []); // 重置当前对应id的节点
      let addData = { // 模拟新增数据
        id: 33,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }
      this.getSonData(tree.id, resolve, addData) // 重置子节点数据
    }
  }
}
</script>

<style scoped lang="less">
</style>


```

### 前端实现换行/n和＜br/＞的转换
 this.$notify要想换行需要设置`dangerouslyUseHTMLString: true,`

```js
// \n转换成<br/>
let replaceRegex = /(\n\r|\r\n|\r|\n)/g; 
let str = '123啦啦啦\n哦哦哦234\n'
let newStr = str.replace(replaceRegex, '<br/>');
console.info(newStr);
// 123啦啦啦<br/>哦哦哦234<br/>
 
//<br/>转换成\n
let text = '你好啊<br/>我很好<br/>好的，下次见'; 
let newText = text.replace(/<br\/>/g, '\n');
console.info(newText);
 
```

### 监听url变化

**方法一：通过 watch**

```js
// 监听,当路由发生变化的时候执行
watch:{
  $route(to,from){
    console.log(to.path);
  }
},
```

```js
// 监听,当路由发生变化的时候执行
watch: {
  $route: {
    handler: function(val, oldVal){
      console.log(val);
    },
    // 深度观察监听
    deep: true
  }
},
```

```js
// 监听,当路由发生变化的时候执行
watch: {
  '$route':'getPath'
},
methods: {
  getPath(){
    console.log(this.$route.path);
  }

}
```

**方法二：：key是用来阻止“复用”的。**

Vue 为你提供了一种方式来声明“这两个元素是完全独立的——不要复用它们”。只需添加一个具有唯一值的 key 属性即可(Vue文档原话)

```vue
<router-view :key="key"></router-view>

<script>
computed: {
  key() {
    return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
  }
}
</script>
```

使用computed属性和Date()可以保证每一次的key都是不同的，这样就可以如愿刷新数据了。

**方法三：：通过 vue-router 的钩子函数 beforeRouteEnter  beforeRouteUpdate  beforeRouteLeave**

```vue
<script>
  // 引入 Tabbar组件
  import mTabbar from './components/Tabbar'
  import mTabbarItem from './components/TabbarItem'
  // 引入 vuex 的两个方法
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'app',
    // 计算属性
    computed:mapGetters([
      // 从 getters 中获取值
      'tabbarShow'
    ]),
    // 监听,当路由发生变化的时候执行
    watch:{
      $route(to,from){
        if(to.path == '/' || to.path == '/Prisoner' || to.path == '/Goods' || to.path == '/Time' || to.path == '/Mine'){
          /**
           * $store来自Store对象
           * dispatch 向 actions 发起请求
           */
          this.$store.dispatch('showTabBar');
        }else{
          this.$store.dispatch('hideTabBar');
        }
      }
    },
    beforeRouteEnter (to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当钩子执行前，组件实例还没被创建
    },
    beforeRouteUpdate (to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
    },
    beforeRouteLeave (to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
    },
    components:{
      mTabbar,
      mTabbarItem
    },
    data() {
      return {
        select:"Building"
      }
    }
  }
</script>
```

### 日期选择器设置结束日期不得早于开始日期不早于当前日期

```html
<el-form-item label="开始时间" class="marLeft15">
  <el-date-picker v-model="ruleForm.startDate" :picker-options="pickerOptions0" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker>
</el-form-item>
<el-form-item label="结束时间" class="marLeft15">
 <el-date-picker v-model="ruleForm.endDate" :picker-options="pickerOptions1" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker>
</el-form-item>
```

```js
data() {
        return {
            pickerOptions0: {//结束时间不能大于开始时间
                disabledDate: (time) => {
                    if (this.ruleForm.endDate) {
                        return time.getTime() > new Date(this.ruleForm.endDate).getTime();
                    }else{//还没有选择结束时间的时候，让他只能选择今天之前的时间包括今天
                        return time.getTime() > Date.now() - 8.64e7;
                    } 
 
                }
            },
            pickerOptions1: {
                disabledDate: (time) => {
                    if(this.ruleForm.startDate){
                      return time.getTime() < new Date(this.ruleForm.startDate).getTime() - 1*24*60*60*1000 + 8.64e7 || time.getTime() > Date.now() - 8.64e7;//可以选择同一天
                    }
                }
            },
   }
 }


```

### 关于mounted/created和activated里重复查询/重复调接口的问题

```vue
<script>
created(){
    this.fetchData().then(res=>{
        this.updata = 100
    })
},
activated(){
    if(this.updata == 100){
        this.fetchData()
    }
},
methods:{
    async fetchData(){
        // api
        await getList().then(res=>{
            this.List = res.data
        })
    }
}
</script>
```

### element table左右 fixed同时固定列，列表错位情况修复及监听表格滚动条事件

样式

```scss
// 调整横向滚动条出现错位情况
.table-fixed {
	.el-table__fixed {
		top: -10px;
		.el-table__fixed-header-wrapper {
			top: 10px; 
			z-index: 10;
		}
	}
	.el-table__fixed-right {
		top: -10px;
		.el-table__fixed-header-wrapper {
			top: 10px;
			z-index: 10;
		}
	}
}
```

要写在获取表格数据后

```js
let _self = this
// 注意 this 指向 方法内部this 指向的是该节点 而不是vue实例
const selectWrapper = document.querySelector('.el-table__body-wrapper')
			// 监听滚动事件
			selectWrapper.addEventListener('scroll', function() {
				let sign = 0
				const scrollDistance = this.scrollHeight - this.scrollTop - this.clientHeight
				// 滚动到底部返回true
				_self.isBottom = scrollDistance <= sign;
			})
```

class类

```html
<el-table v-loading="loading"
		:class="isBottom ? 'table-fixed' : ''" 
        ref="muTable" 
        :data="markList"
         @selection-change="handleSelectionChange">
        ...
</table>
```

### 计算距离下次生日还有多少天

注意这里借助 [moment](https://link.juejin.cn?target=http%3A%2F%2Fmomentjs.cn%2F) 实现

```ts
    getBirthdayFun(){
       // 首先要获取到今年的生日
      let birthdayTime = moment().format('YYYY-') + '12-19'
      // 通过时间戳  去判断当前的时间戳是否大于今年生日的时间戳 
      if (moment().unix() >= moment(birthdayTime).unix()) {
        // 如果大于的话，那么就在今年的生日上再添加一年，已达到获取下次生日的时间
        birthdayTime = moment(birthdayTime).add(1, 'y').format('YYYY-MM-DD')
      }
      // 这个直接通过计算 （下次生日的时间戳 - 当前日期的时间戳) / (60 * 60 * 24) 最后求出来的就是 XX 天
      return parseInt(
        (moment(birthdayTime).unix() - moment().unix()) / (60 * 60 * 24)
      )
    }
```

### 不同项目嵌套（iframe的使用）

```html
<iframe id="iframe" :src="iframeSrc" style="height: calc(100% - 50px)" width="100%" frameborder="0"></iframe>
```

###### **获取iframe里面的内容**

iframe.contentWindow, 获取iframe的window对象
iframe.contentDocument, 获取iframe的document对象

```js
const _iframe = document.getElementById('iframe').contentWindow
```

###### CDM跨域

如果你设置的iframe的域名和你top window的域名完全不同，可以使用CDM(cross document messaging)进行跨域消息的传递。

**发送消息**: 使用postmessage方法 

postMessage(message, targetOrigin)

message: 传递给iframe的内容, 通常是string,最好不要传object对象，需要传对象时，使用JSON.stringfy转换。

targetOrigin: 接受你传递消息的域名，可以设置绝对路径，也可以设置""或者"/"。 表示任意域名都行，"/"表示只能传递给同域域名。

```js
_iframe.postMessage(JSON.stringify(_obj), '*')
```

**接受消息**: 监听message事件

当targetOrigin接受到message消息之后,会触发message事件。 message提供的event对象上有3个重要的属性，data,origin,source.

```js
window.addEventListener('message', function (event) {
      console.log(event)
      if (event.origin === window.callBackUrl.iframeSrc) {
        _this.childData = event.data
        console.log(event.data)
        _this.saveForm()
      }
    })
```

### 判断是否为手机端

方法

```js
_isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    },
```

调用

```js
if (this._isMobile()) {
      alert("手机端");
    } else {
      alert("pc端");
    }
```

### 使用VUE监听网页关闭并执行退出操作

先在mounted()中创建页面关闭的监听

```js
window.addEventListener("beforeunload", (e) => this.beforeunloadHandler(e));
window.addEventListener("unload", (e) => this.unloadHandler(e));
```

第一个监听的是页面关闭之前，对应的方法可以写做

```js
// 页面关闭之前，触发提示框
    beforeunloadHandler(e) {
      if (e) {
        e = e || window.event;
        console.log(e);
        if (e) {
          e.returnValue = "关闭提示";
        }
        return "关闭提示";
      }
    },

```

第二个监听的是页面关闭的时候，这里面可以调用退出登录的方法

```js
// 页面关闭
    async unloadHandler(e) {
      // 退出登录
      await this.handleGoLog();
    },

```

最后记得在destroyed()中，注销监听

```js
destroyed() {
    window.removeEventListener("beforeunload", (e) =>
      this.beforeunloadHandler(e)
    );
    window.removeEventListener("unload", (e) => this.unloadHandler(e));
  },

```

### Vue.config.js 的基本内容

如果使用了某些长期不会改变的库，像 element-ui ，打包完成有 600 多 KB ，包含在默认 vendor 中显然不合适，每次用户都要加载这么大的文件体验不好，所以要单独打包：



```js
config.optimization.splitChunks({
               chunks: 'all',
       cacheGroups: {
               // cacheGroups 下可以可以配置多个组，每个组根据 test 设置条件，符合 test 条件的模块
          commons: {
                         name: 'chunk-commons',
            test: resolve('src/components'),
             minChunks: 3, //  被至少用三次以上打包分离
                          priority: 5, // 优先级
                          reuseExistingChunk: true // 表示是否使用已有的 chunk，如果为 true 则表示如果当前的 chunk 包含的模块已经被抽取出去了，那么将不会重新生成新的。
          },
                     node_vendors: {
                          name: 'chunk-libs',
            chunks: 'initial', // 只打包初始时依赖的第三方
                          test: /[\\/]node_modules[\\/]/,
            priority: 10
          },
                    vantUI: {
                         name: 'chunk-vantUI', // 单独将 vantUI 拆包
                         priority: 20, // 数字大权重到，满足多个 cacheGroups 的条件时候分到权重高的
                         test: /[\\/]node_modules[\\/]_?vant(.*)/
          }
              }
      })
```

### 兼容安卓的文件流下载方式

```js
downloadFile() {
  axios({
    url: 'your_server_url',
    method: 'GET',
    responseType: 'blob',
  }).then(response => {
    const reader = new FileReader();
    reader.readAsDataURL(response.data);
    reader.onload = () => {
      const url = reader.result;
      if (navigator.userAgent.indexOf('Android') > -1) {
        // 如果用户使用安卓设备，则将数据URI转换为Blob对象并下载文件
        const downloader = document.createElement('a');
        downloader.href = window.URL.createObjectURL(new Blob([response.data]));
        downloader.download = 'filename.extension';
        downloader.style.display = 'none';
        document.body.appendChild(downloader);
        downloader.click();
        document.body.removeChild(downloader);
      } else {
        // 对于其他设备，创建Blob URL并下载文件
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'filename.extension');
        document.body.appendChild(link);
        link.click();
      }
    };
  });
}

```

=======>						

```js
export function download(url, params, filename) {
  return service.post(url, params, {
    transformRequest: [(params) => { return tansParams(params) }],
    headers: { 'Accept': 'text/htmlapplication/xhtml+xml.application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;=0.8application/signed-exchange;v=b3;g=0.9' },
    responseType: 'blob'
  }).then(response => {
    const reader = new FileReader();
    reader.readAsDataURL(response.data);
    let disposition = response.headers["content-disposition"]
    let suffix = disposition.split('.')[1]
    let fileTypeMime = ''
    switch (suffix) {
      case 'doc':
        fileTypeMime = 'application/msword;charset=utf-8';
        break;
      case 'docx':
        fileTypeMime = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document;charset=utf-8';
        break;
      case 'jpg':
      case 'jpeg':
        fileTypeMime = 'image/jpeg;charset=utf-8;charset=utf-8';
        break;
      case 'svg':
        showToast("暂不支持该类型文件下载");
        return;
      case 'txt':
        showToast("暂不支持该类型文件下载");
        return;
      case 'pdf':
        fileTypeMime = 'application/pdf;charset=utf-8';
        break;
      case 'ppt':
        fileTypeMime = 'application/vnd.ms-powerpoint;charset=utf-8';
        break;
      case 'pptx':
        fileTypeMime = 'application/vnd.openxmlformats-officedocument.presentationml.presentation;charset=utf-8';
        break;
      case 'xls':
        fileTypeMime = 'application/vnd.ms-excel;charset=utf-8';
        break;
      case 'xlsx':
        fileTypeMime = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8';
        break;
      case 'zip':
        showToast("暂不支持该类型文件下载");
        return;
      case '7z':
        showToast("暂不支持该类型文件下载");
        return;
    }
    reader.onload = () => {
      if (navigator.userAgent.indexOf('Android') > -1) {
        const blob = new Blob([response.data], { type: fileTypeMime })
        // const blob = new Blob([response.data])
        let blobUrl = window.URL.createObjectURL(blob)
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;
        console.log(blobUrl);
        document.body.appendChild(link);
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, true);
        link.dispatchEvent(evt);
        document.body.removeChild(link);
        // downloads(blobUrl, filename)
      } else {
        const blob = new Blob([response.data], { type: fileTypeMime })
        let blobUrl = window.URL.createObjectURL(blob)
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;
        console.log(blobUrl);
        document.body.appendChild(link);
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, true);
        link.dispatchEvent(evt);
        document.body.removeChild(link);
      }
    };
  });
}
```

### 文件流zip下载

```js
export function download2(url, params, filename) {
  downloadLoadingInstance = Loading.service({ text: "正在下载数据，请稍候", spinner: "el-icon-loading", background: "rgba(0, 0, 0, 0.7)", })
  return service.post(url, params, {
    headers: { 'Content-Type': 'application/json' },
    responseType: 'blob',
  }).then(async (data) => {
    console.log(data);
    const isBlob = blobValidate(data);
    if (isBlob) {
      const blob = new Blob([data], { type: 'application/zip' })
      saveAs(blob, filename)
    } else {
      const resText = await data.text();
      const rspObj = JSON.parse(resText);
      const errMsg = errorCode[rspObj.code] || rspObj.msg || errorCode['default']
      Message.error(errMsg);
    }
    downloadLoadingInstance.close();
  }).catch((r) => {
    console.error(r)
    Message.error('下载文件出现错误，请联系管理员！')
    downloadLoadingInstance.close();
  })
}
// 使用
/** 导出zip文件按钮操作 */
    downloadFile(type, ids) {
      console.log(type, ids, 'type, ids');
      download2('hsy/invoice/downLoad?type=' + type + '&ids=' + ids,
        ids
        , `invoice_${new Date().getTime()}.zip`)
    }
```


### vue中实现拖动调整左右两侧div的宽度

```vue
<template>
	<div class="box" ref="box">
		<div class="left">
			<!--左侧div内容-->
		</div>
		<div class="resize" @mousemove="dragControllerDiv" title="收缩侧边栏">⋮</div>
		<div class="mid">
			<!--右侧div内容-->
		</div>
	</div>
</template>

<script>
    export default {
        methods：{
        	dragControllerDiv() {
              var resize = document.getElementsByClassName("resize");
              var left = document.getElementsByClassName("left");
              var mid = document.getElementsByClassName("mid");
              var box = document.getElementsByClassName("box");
              console.log(resize, left, mid, box);
              for (let i = 0; i < resize.length; i++) {
                // 鼠标按下事件
                resize[i].onmousedown = function (e) {
                  //颜色改变提醒
                  resize[i].style.background = "#818181";
                  var startX = e.clientX;
                  resize[i].left = resize[i].offsetLeft;
                  console.log(resize[i].left, resize[i].offsetLeft);
                  // 鼠标拖动事件
                  document.onmousemove = function (e) {
                    var endX = e.clientX;
                    var moveLen = resize[i].left + (endX - startX); // （endx-startx）=移动的距离。resize[i].left+移动的距离=左边区域最后的宽度
                    var maxT = box[i].clientWidth - resize[i].offsetWidth; // 容器宽度 - 左边区域的宽度 = 右边区域的宽度

                    if (moveLen < 32) moveLen = 32; // 左边区域的最小宽度为32px
                    if (moveLen > maxT - 150) moveLen = maxT - 150; //右边区域最小宽度为150px

                    resize[i].style.left = moveLen; // 设置左侧区域的宽度

                    for (let j = 0; j < left.length; j++) {
                      left[j].style.width = moveLen + "px";
                      mid[j].style.width = box[i].clientWidth - moveLen - 20 + "px";
                    }
                  };
                  // 鼠标松开事件
                  document.onmouseup = function (evt) {
                    //颜色恢复
                    resize[i].style.background = "#d6d6d6";
                    document.onmousemove = null;
                    document.onmouseup = null;
                    resize[i].releaseCapture && resize[i].releaseCapture(); //当你不在需要继续获得鼠标消息就要应该调用ReleaseCapture()释放掉
                  };
                  resize[i].setCapture && resize[i].setCapture(); //该函数在属于当前线程的指定窗口里设置鼠标捕获
                  return false;
                };
              }
            },
    	}
    }
</script>
<style lang="scss" scoped>
/* 拖拽相关样式 */
/*包围div样式*/
.box {
  width: 100%;
  height: 100%;
  margin: 1% 0px;
  overflow: hidden;
  box-shadow: -1px 9px 10px 3px rgba(0, 0, 0, 0.11);
}
/*左侧div样式*/
.left {
  width: calc(32% - 10px); /*左侧初始化宽度*/
  height: 100%;
  background: #ffffff;
  float: left;
}
/*拖拽区div样式*/
.resize {
  cursor: col-resize;
  float: left;
  position: relative;
  top: 45%;
  background-color: #d6d6d6;
  border-radius: 5px;
  margin-top: -10px;
  width: 10px;
  height: 50px;
  background-size: cover;
  background-position: center;
  /*z-index: 99999;*/
  font-size: 32px;
  color: white;
}
/*拖拽区鼠标悬停样式*/
.resize:hover {
  color: #444444;
}
/*右侧div'样式*/
.mid {
  float: left;
  width: 68%; /*右侧初始化宽度*/
  height: 100%;
  background: #fff;
  box-shadow: -1px 4px 5px 3px rgba(0, 0, 0, 0.11);
}
</style>
```

### watch方法使用
1、在vue中watch用来监听数据的变化，一旦发生变化可以执行一些其他操作 
2、watch就是当值第一次绑定的时候，是不会执行监听函数的，只有值诞生改变才会执行。如果需要在第一次绑定的时候也执行函数，则需要用到immediate属性，比如当父组件向子组件动态传值时，子组件props首次获取到父组件传来的No认知时，也需要执行函数          
3、handler方法：immediate表示在watch中首次绑定的时候，是否执行handler，值为TRUE则表示在watch中声明的时候，就立即执行handler方法，值为false，则和一般使用watch一样，在数据发生变化时才执行
4、deep，当需要监听一个对象的变化时，普通的watch方法无法监听带对象内部属性的变化，只有data中的数据才能够坚挺到变化，此时需要deep属性进行深度监听，设置deep：true，当对象的属性较多是，每个属性的变化都会执行handler
```js
watch: {
    'person.name': {
        handler(newVal, oldVal) {
            console.log(newVal, oldVal)
        },
        deep: true,
        immediate: true
    }，
cascaderName(newVal, oldVal) {
      console.log(newVal, oldVal)
    }
}
```

### 鼠标双击事件

```js
@dblclick.native.prevent="handleIconClick"
@dblclick="handleIconClick"
```

### 接口数据给el-input赋值成功后不能编辑

原因：在Vue实例创建时，obj.b并未声明，因此就没有被Vue转换为响应式的属性，自然就不会触发视图的更新

解决：this.$set(val1,val1.val2,val3)
```js
this.$set(this.convenForm, 'orPrice', this.convenForm.orPrice);
```
**注：this.convenForm是对象，orPrice是对象里字段，最后一个是赋值**

### 邮箱输入带@提示
```vue
<template>
  <div>
    <el-form class="mailbox" :rules="rules" ref="form" :model="form">
      <el-form-item prop="inputEmail">
        <el-input
          v-model="form.inputEmail"
          placeholder="请输入邮箱账号"
          clearable
          prefix-icon="el-icon-user"
        ></el-input>
	<div class="hintBox">
        <div
          @click="setInput(mail)"
          class="hintItem"
          v-for="mail in emails"
          :key="mail"
        >
          {{ mail }}
        </div>
      </div>
      </el-form-item>
      
    </el-form>
  </div>
</template>

  <script>

export default {

  data() {

    return {

      form:{

        inputEmail: "",

      },

      rules: {

        inputEmail: [

          { required: true, message: "请输入正确的邮箱", trigger: "blur" },

        ],}

    };

  },

  created() {},

  computed: {

    emails() {

      // 如果inputEmail中没有任何东西，则不处理

      if (!this.form.inputEmail) return [];

      // 考虑到用户自己要输@符号，如果@符号首次出现的位置大于等于第零个位置时，则不处理

      if (this.form.inputEmail.indexOf("@") > -1) return [];

      return [

       this.form.inputEmail + "@163.com",

       this.form.inputEmail + "@126.com",

       this.form.inputEmail + "@0355.net",

       this.form.inputEmail + "@263.net",

       this.form.inputEmail + "@3721.net",

       this.form.inputEmail + "@qq.com",

       this.form.inputEmail + "@yahoo.com",

       this.form.inputEmail + "@gmail.com",

       this.form.inputEmail + "@msn.com",

       this.form.inputEmail + "@hotmail.com",

       this.form.inputEmail + "@aol.com",

       this.form.inputEmail + "@ask.com",

       this.form.inputEmail + "@live.com",

       this.form.inputEmail + "@yeah.net",

      ];

    },

  },

  methods: {

    // 点击该邮箱后缀是补全文本框

    setInput(mail) {

     this.form.inputEmail = mail;

      this.$emit("MailboxDelivery",this.form.inputEmail);

    },

  },

};

</script>

  <style scoped>

.hintBox {
  max-height: 120px;
  overflow-y: scroll;
  overflow-x: auto;
  position: absolute;
  z-index: 999;
  background-color: #fff;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.hintItem {
padding: 0 20px;
margin: 0;
line-height: 34px;
cursor: pointer;
color: #606266;
font-size: 14px;
list-style: none;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}

.el-form-item {
    margin: 0;
}

</style>
```

### 电子发票商品计算及含税不含税逻辑
```vue
<template>
<el-form :model="form" ref="form" border :inline="true" class="fieldStyleForm" style="width: 100%;">
                <el-form-item label="行号" class="text_align50">
                </el-form-item>
                <el-form-item label="项目名称" class="text_align500">
                </el-form-item>
                <el-form-item label="规格型号" class="text_align120">
                </el-form-item>
                <el-form-item label="单位" class="text_align100">
                </el-form-item>
                <el-form-item label="数量" class="text_align100">
                </el-form-item>
                <el-form-item class="text_align100 ">
                  <template slot="label">
                    单价<span :class="hs ? 'redText' : ''">{{ hs ? '(含税)' : '(不含税)' }}</span>
                  </template>
                </el-form-item>
                <el-form-item label="金额(含税)" v-show="hs" class="text_align100 tax">
                  <template slot="label">
                    金额<span class="redText">{{ '(含税)' }}</span>
                  </template>
                </el-form-item>
                <el-form-item label="金额(不含税)" v-show="!hs" class="text_align100" style="width: 6%;">
                </el-form-item>
                <el-form-item label="税率" class="text_align100">
                </el-form-item>
                <el-form-item label="税额" class="text_align100" style="width: 80px;">
                </el-form-item>
                <el-form-item label="操作" class="text_align_right150">
                </el-form-item>
                <hr>

                <div v-for="(item, index) in form.dynamicItem" :key="index">

                  <el-form-item class="text_align50">
                    <span class="text_align50">{{ index + 1 }}</span>
                  </el-form-item>
                  <el-form-item :prop="'dynamicItem.' + index + '.goodsName'" class="text_align500">
                    <!-- <el-input v-model="item.goodsName" class="text_align500"></el-input> -->
                    <!-- <el-cascader v-model="item.goodsName" :options="restaurants" clearable class="text_align500"></el-cascader> -->
                    <!-- <el-cascader ref="cascader" v-model="item.goodsName" :options="restaurants" clearable
                      class="text_align500"></el-cascader> @change="getByName(item)"-->
                    <!-- {{ item.commodityCategory }} -->
                    <el-autocomplete v-model="item.goodsName" :fetch-suggestions="querySearchAsync"
                      :trigger-on-focus="false" placeholder="请输入项目名称" @select="handleSelect"
                      @focus="getByName(item, index)" @dblclick.native.prevent="handleIconClick" :disabled="item.disabled"
                      class="text_align500">
                      <!-- <i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick">
                      </i> -->
                      <template slot-scope="{ item }">
                        <el-button v-if="item.is_add" type="primary" plain class="add_button" style=""
                          @click="handleIconClick">
                          添加
                        </el-button>
                      </template>
                    </el-autocomplete>
                  </el-form-item>
                  <el-form-item :prop="'dynamicItem.' + index + '.specification'" class="text_align120">
                    <el-input v-model="item.specification" :disabled="item.disabled" class="text_align120"></el-input>
                  </el-form-item>
                  <el-form-item :prop="'dynamicItem.' + index + '.unit'" class="text_align100">
                    <el-input v-model="item.unit" :disabled="item.disabled" class="text_align100"></el-input>
                  </el-form-item>
                  <el-form-item :prop="'dynamicItem.' + index + '.quantity'" class="text_align100">
                    <el-input v-model="item.quantity" :disabled="item.disabled" @change="handleBlur(item, 'quantity')"
                      class="text_align100"></el-input>
                  </el-form-item>
                  <el-form-item :prop="'dynamicItem.' + index + '.unitPrice'" class="text_align100">
                    <el-input v-model="item.unitPrice" :disabled="item.disabled" @change="handleBlur(item, 'unitPrice')"
                      class="text_align100"></el-input>
                  </el-form-item>
                  <el-form-item :prop="'dynamicItem.' + index + '.amountWithTax'" v-show="hs" class="text_align100">
                    <el-input v-model="item.amountWithTax" :disabled="item.disabled" @change="handleBlur(item, 'amount')"
                      class="text_align100"></el-input>
                  </el-form-item>
                  <el-form-item :prop="'dynamicItem.' + index + '.amount'" v-show="!hs" class="text_align100">
                    <el-input v-model="item.amount" :disabled="item.disabled" @change="handleBlur(item, 'amount')"
                      class="text_align100"></el-input>
                  </el-form-item>
                  <el-form-item :prop="'dynamicItem.' + index + '.taxRate'" class="text_align100">
                    <el-select v-model="item.taxRate" :disabled="item.disabled" @change="handleBlur(item)" clearable>
                      <el-option v-for="dict in dict.type.sys_tax_rate" :key="dict.value" :label="dict.label"
                        :value="dict.value" />
                    </el-select>
                  </el-form-item>
                  <el-form-item :prop="'dynamicItem.' + index + '.taxAmount'" class="text_align70">
                    <el-input v-model="item.taxAmount" class="text_align70" disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item class="text_align_right150">
                    <el-button type="text" @click="discount(item, index)" :disabled="item.disabled">折</el-button>
                    <el-button type="text" @click="deleteItem(item, index)">删</el-button>
                  </el-form-item>
                  <hr>
                </div>
                <div style="border-style: dashed;border-width: 0.1px;margin-left: 58px; width: 30%;">
                  <el-button type="text" class="background_color" @click="addItem(0)" icon="el-icon-plus"
                    aria-label="+">新增</el-button>
                </div>
                <hr>
                <div style="display: flex;">
                  <div style="margin-left: 10%;">价税合计 (大写) ⊗ {{ this.dxhj }}</div>
                  <div style="margin-left: 40%;">(小写) ￥ {{ this.xxhj }} </div>
                </div>
                <hr>
              </el-form>
</template>

<script>
import { Decimal } from 'decimal.js'
export default {

 methods: {
handleBlur(item, row) {
      console.log(item, '9999');
      var hj = 0;
      let amountWithTax = roundFixed(Number(Decimal(Number(item.unitPrice)).mul(Decimal(Number(item.quantity)))), 2)
      let amount = roundFixed(Number(Decimal(Number(item.unitPrice)).mul(Decimal(Number(item.quantity)))), 2)
      let unitPrice = roundFixed(Number(Decimal(Number(item.amountWithTax)).div(Decimal(Number(item.quantity)))), 8)
      let quantity = Number(Decimal(Number(item.amountWithTax)).div(Decimal(Number(item.unitPrice))))
      let taxAmountWithTax = roundFixed(Number(Decimal(Number(item.amountWithTax)).div(Decimal(Number(item.taxRate) + 1)).mul(Decimal(Number(item.taxRate)))), 2)
      let taxAmount = Decimal(Number(item.amount)).mul(Decimal(Number(item.taxRate)))
      // ((Number(je)) * Number(sl) / (1 + Number(shui)) * Number(shui))
      // debugger
      if (this.hs == true) {
        if (item.unitPrice != "" && item.quantity != "" && item.amountWithTax != '') {
          if (row == 'unitPrice') {
            item.amountWithTax = ''
            item.amountWithTax = amountWithTax
          } else if (row == 'amount') {
            item.unitPrice = ''
            item.unitPrice = unitPrice
          } else {
            item.amountWithTax = ''
            item.amountWithTax = amountWithTax
          }
        }
        if (item.unitPrice != "" && item.amountWithTax != '' && item.quantity == "") {
          item.quantity = quantity

        }
        if (item.unitPrice == "" && item.amountWithTax != '' && item.quantity != "") {
          item.unitPrice = unitPrice

        }
        if (item.unitPrice != "" && item.amountWithTax == '' && item.quantity != "") {
          item.amountWithTax = amountWithTax

        }

      } else {
        console.log(amount, 'amount');
        if (item.unitPrice != "" && item.quantity != "" && item.amount != '') {
          if (row == 'unitPrice') {
            item.amount = ''
            item.amount = amount
          } else if (row == 'amount') {
            item.unitPrice = ''
            item.unitPrice = unitPrice
          } else {
            item.amount = ''
            item.amount = amount
          }
        }
        if (item.unitPrice != "" && item.amount != '' && item.quantity == "") {
          item.quantity = quantity

        }
        if (item.unitPrice == "" && item.amount != '' && item.quantity != "") {
          item.unitPrice = unitPrice

        }
        if (item.unitPrice != "" && item.amount == '' && item.quantity != "") {
          item.amount = amount

        }

      }
      taxCalculation(item, this.hs)
      hj = total(this.form.dynamicItem, this.hs)

      if (hj == 0) {
        this.dxhj = '零圆整'
      } else {
        this.dxhj = dealBigMoney(hj)
      }
      this.xxhj = hj.toFixed(2);
    },
}

// 含税不含税切换逻辑
watch:{
hs(newVal, oldVal) {
      console.log(newVal, oldVal)
      Decimal.set({ precision: 5, rounding: 4 })
      console.log(Number(Decimal(5).div(Decimal(0.13))));
      console.log(roundFixed(2.335, 2), (2.335.toFixed(2)));
      if (newVal == false && this.form.dynamicItem[0].amountWithTax != '' && this.form.dynamicItem[0].amountWithTax != ''
      ) {
        for (var i = 0; i < this.form.dynamicItem.length; i++) {
          this.form.dynamicItem[i].taxSign = '0'
          var je = this.form.dynamicItem[i].unitPrice
          var sl = this.form.dynamicItem[i].quantity
          var ze = this.form.dynamicItem[i].amount
          var shui = this.form.dynamicItem[i].taxRate
          var zez = this.form.dynamicItem[i].amountWithTax
          var se = this.form.dynamicItem[i].taxAmount
          // let unit = Decimal(Number(je)).sub((Decimal(Number(je))).div(Decimal(Number(shui) + 1)).mul(Decimal(Number(shui))))
          let unit = Decimal(Number(je)).sub(Decimal(Number(se)).div(Decimal(Number(sl))))
          console.log(unit, Number(unit));
          if (Number(unit) == -Infinity || Number(unit) == Infinity) {
            this.form.dynamicItem[i].unitPrice = ''
            this.form.dynamicItem[i].amount = roundFixed((Number(zez) - (Number(zez) / (1 + Number(shui)) * Number(shui))), 2)
          } else {
            this.form.dynamicItem[i].unitPrice = roundFixed(Number(unit), 8)
            this.form.dynamicItem[i].amount = roundFixed((Number(zez) - ((Number(je)) * Number(sl) / (1 + Number(shui)) * Number(shui))), 2)
          }

          // .length > 8 ? ((Number(zez) - ((Number(je)) * Number(sl) / (1 + Number(shui)) * Number(shui)))).toFixed(8) : ((Number(zez) - ((Number(je)) * Number(sl) / (1 + Number(shui)) * Number(shui)))).toFixed(2);
          // this.form.dynamicItem[i].amount = this.form.dynamicItem[i].unitPrice * Number(sl)
        }
      } else {
        for (var i = 0; i < this.form.dynamicItem.length; i++) {
          console.log('oldVal', oldVal);
          this.form.dynamicItem[i].taxSign = '1'
          var je = this.form.dynamicItem[i].unitPrice
          var sl = this.form.dynamicItem[i].quantity
          var ze = this.form.dynamicItem[i].amount
          var shui = this.form.dynamicItem[i].taxRate
          var zez = this.form.dynamicItem[i].amountWithTax
          var se = this.form.dynamicItem[i].taxAmount
          let unit = Decimal(Number(je)).add(Decimal(Number(se)).div(Decimal(Number(sl))))
          if (Number(unit) == -Infinity || Number(unit) == Infinity) {
            this.form.dynamicItem[i].unitPrice = ''
            // this.form.dynamicItem[i].amountWithTax = roundFixed(this.form.dynamicItem[i].unitPrice * Number(sl), 2)
          } else {
            this.form.dynamicItem[i].unitPrice = roundFixed(Number(unit), 8)
            this.form.dynamicItem[i].amountWithTax = roundFixed(this.form.dynamicItem[i].unitPrice * Number(sl), 2)
          }
          // this.form.dynamicItem[i].unitPrice = Number(Decimal(Number(je)).add((Decimal(Number(je))).mul(Decimal(Number(shui)))))

        }
      }
    },
}
}
</script>
```
```js
import { Decimal } from 'decimal.js'
export function total(arr, row) {
  console.log(arr);
  let hj = 0;
  for (let i = 0; i < arr.length; i++) {
    var je = arr[i].unitPrice
    var sl = arr[i].quantity
    var ze = arr[i].amount
    var shui = arr[i].taxRate
    var zez = arr[i].amountWithTax
    var se = arr[i].taxAmount
    if (row == true) {
      hj += Number(zez);
    } else {
      hj += Number(ze) + Number(se);
    }
  }
  return hj
}

export function taxCalculation(item, row) {
  let taxAmountWithTax = roundFixed(Number(Decimal(Number(item.amountWithTax)).div(Decimal(Number(item.taxRate) + 1)).mul(Decimal(Number(item.taxRate)))), 2)
  let taxAmount = Decimal(Number(item.amount)).mul(Decimal(Number(item.taxRate)))
  if (row == true) {
    item.taxAmount = taxAmountWithTax
  } else {
    item.taxAmount = taxAmount
  }
  return item
}

export function roundFixed(num, fixed) {//修改js四舍五入
  var pos = num.toString().indexOf('.'),
    decimal_places = num.toString().length - pos - 1,
    _int = num * Math.pow(10, decimal_places),
    divisor_1 = Math.pow(10, decimal_places - fixed),
    divisor_2 = Math.pow(10, fixed);
  return Math.round(_int / divisor_1) / divisor_2;
}
```

### 生成二维码
```vue
<template>
  <div class="about">
    <h1>This is an about page11</h1>
    <div class="qr">
      <vue-qr :logoSrc="src2" :text="src" :size="200"></vue-qr>
    </div>

  </div>
</template>
<script>
import VueQr from 'vue-qr'
// npm install vue-qr --save
export default {
  components: { VueQr },
  data() {
    return {
      // 中间图片
      src2: require('@/assets/logo.png'),
      src: ''
    }
  },
  mounted() {
    console.log(this);
    let url = window.location.origin
    this.src = url + '/'
    // this.src = 'http://192.168.20.160:8081/'
  },
  methods: {

  }
}
</script>
<style lang="scss">
.qr {
  width: 200px;
  height: 200px;
}
</style>
```

### 发票模版
```vue
<template>
    <div>
        <el-dialog :title="title" :visible.sync="open" width="80%" append-to-body>
      <div class="invoice-box">
        <br>
        <div id="myComponent">
          <div class="top">
            <div class="title">
              <h1>{{ forTitle(invoiceData.itype) }}</h1>
            </div>
            <div class="top-tips">
              <div class="tips-box">发票代码：<span>{{ invoiceData.fpDm }}</span></div>
              <div class="tips-box">发票号码：<span>{{ invoiceData.fpHm }}</span></div>
              <div class="tips-box">开票日期：<span>{{ invoiceData.kprq }}</span></div>
              <div class="tips-box"><span class="jym">校验码</span><i>：</i><span class="JYM">{{
                invoiceData.jym
              }}</span>
              </div>
            </div>
            <img :src="qrCodeData" alt="二维码">
            <div class="tips-box jqbh">
              机器编号：<span>{{ invoiceData.jqbh }}</span>
            </div>
          </div>
          <div class="center">
            <div class="invoice-info">
              <div class="gmf">
                <div class="title">购买方</div>
                <div class="info">
                  <p>
                    <span class="mc">名称</span>
                    <i class="mc-i">：</i>
                    <span class="parameter">{{ invoiceData.gmfMc }}</span>
                  </p>
                  <p>
                    纳税人识别号：<span class="parameter">{{ invoiceData.gmfNsrsbh }}</span>
                  </p>
                  <p>
                    <span class="dzdh">地址、电话</span>
                    <i class="dzdh-i">：</i>
                    <span class="parameter">{{ invoiceData.gmfDzdh }}</span>
                  </p>
                  <p>
                    开户行及账号：<span class="parameter">{{ invoiceData.gmfYhzh }}</span>
                  </p>
                </div>
              </div>
              <div class="password">
                <div class="title">密码区</div>
                <p>{{ invoiceData.fpMw }}</p>
              </div>
            </div>
            <table cellspacing="0" cellpadding="0">
              <thead>
                <tr>
                  <th class="spmc">货物或应税劳务、服务名称</th>
                  <th class="ggxh">规格型号</th>
                  <th class="dw">单位</th>
                  <th class="sum">数量</th>
                  <th class="dj">单价</th>
                  <th class="je">金额</th>
                  <th class="sl">税率</th>
                  <th class="se">税额</th>
                </tr>
              </thead>
              <tbody>
                <!--              <tr v-for="(item, index) in invCrestvInvoiceItemList" :key="index">-->
                <tr v-for="(item, index) in invCrestvInvoiceItemList" :key="index">
                  <td>{{ item.spmc }}</td>
                  <td>{{ item.ggxh }}</td>
                  <td>{{ item.dw }}</td>
                  <td>{{ item.spsl }}</td>
                  <td>{{ item.hsdj }}</td>
                  <td>{{ item.hsje }}</td>
                  <td>{{ item.sl }}</td>
                  <td class="se">{{ item.se }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr class="hjh">
                  <td class="hj"> 合　　计</td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td style="text-align: right">{{ invoiceData.hjje }}</td>
                  <td />
                  <td class="se" style="text-align: right">{{ invoiceData.hjse }}</td>
                </tr>
                <tr class="hjh no-border">
                  <td class="jshj">价税合计（大写）</td>
                  <td colspan="7" class="no-border">
                    <span class="uppercase">⊗{{ dealBigMoney(invoiceData.jshj) }}</span>
                    <span class="lowercase">（小写）<i>￥{{ invoiceData.jshj }}</i></span>
                  </td>
                </tr>
              </tfoot>
            </table>
            <div class="invoice-info xsf-box">
              <div class="xsf">
                <div class="title">销售方</div>
                <div class="info">
                  <p>
                    <span class="mc">名称</span><i class="mc-i">：</i><span class="parameter">{{
                      invoiceData.xsfMc
                    }}</span>
                  </p>
                  <p>
                    纳税人识别号：<span class="parameter">{{ invoiceData.xsfNsrsbh }}</span>
                  </p>
                  <p>
                    <span class="dzdh">地址、电话</span><i class="dzdh-i">：</i><span class="parameter">{{
                      invoiceData.xsfDzdh
                    }}</span>
                  </p>
                  <p>
                    开户行及账号：<span class="parameter">{{ invoiceData.xsfYhzh }}</span>
                  </p>
                </div>
              </div>
              <div class="password">
                <div class="title bz">备注</div>
                <p>{{ invoiceData.bz }}</p>
              </div>
            </div>
          </div>
          <div class="yz">
            <img :src="fpylyz" alt="fpylyz">
          </div>
          <div class="footer">
            <span class="skr">收款人：<i class="parameter"> {{ invoiceData.skr }}</i></span>
            <span class="fh">复核：<i class="parameter"> {{ invoiceData.fhr }}</i></span>
            <span class="kpr">开票人：<i class="parameter">{{ invoiceData.kpr }}</i></span>
            <span class="xsf">销售方（章）：</span>
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="printComponent('myComponent')">打 印</el-button>
        <el-button @click="cancel()">取 消</el-button>
      </div>
    </el-dialog>
    </div>
</template>

<script>
export default {

	methods:{
	// 表单重置
    reset() {
      this.form = {
        id: null,
        seqNumber: null,
        udisksn: null,
        itype: "0",
        dataResources: null,
        kplx: null,
        zsfs: null,
        xsfNsrsbh: null,
        xsfMc: null,
        xsfDzdh: null,
        xsfYhzh: null,
        gmfNsrsbh: null,
        gmfMc: null,
        gmfDzdh: null,
        gmfYhzh: null,
        fpHm: null,
        fpDm: null,
        jym: null,
        kprq: null,
        jqbh: null,
        fpMw: null,
        kpr: null,
        skr: null,
        fhr: null,
        yfpDm: null,
        yfpHm: null,
        yfpYf: null,
        jshj: null,
        hjje: null,
        hjse: null,
        kce: null,
        bz: null,
        qdbz: null,
        tspz: null,
        fpmw: null,
        ewm: null,
        slxzyy: null,
        yfplx: null,
        ykprq: null,
        tzdbh: null,
        chyydm: null,
        spflbbh: null,
        previewUrl: null,
        ofdUrl: null,
        pdfUrl: null,
        state: null,
        zfr: null,
        zfrq: null,
        hzxxbbh: null,
        hzsqdbh: null,
        zfbz: null,
        invoiceResult: null,
        zfSeqnumber: null,
        hcbz: null,
        originalId: null,
        importTime: null,
        isRelevancy: null,
        qfjg: null,
        isQf: null
      };
      this.invCrestvInvoiceItemList = [];


      this.standardform = {
        id: null,
        jsrq: null,
        // gdh: null,
        cph: null,
        wxlx: null,
        cz: null,
        zje: null,
        vin: null,
        czbh: null,
        drsj: null,
        sfygl: null
      };
      this.resetForm("standardform");
      this.resetForm("form");
    },
	/** 发票明细 */
    queryItem(row) {
      console.log(row);
      this.reset();
      const id = row.id || this.ids
      getCrestv(id).then(response => {
        this.invoiceData = response.data;
        console.log('response.data', response.data);
        let kprq = formatDate(this.invoiceData.kprq);
        this.invoiceData.kprq = kprq;
        this.invoiceData.state = this.invoiceData.state;
        this.invCrestvInvoiceItemList = response.data.invCrestvInvoiceItemList;
        const { ewm } = this.invoiceData;
        QRCode.toDataURL(ewm)
          .then(dataUrl => {
            this.qrCodeData = dataUrl;
          })
          .catch(error => {
            console.error(error);
          });
        this.open = true;
        this.title = "发票";
      });
    },

	}
}
</script>

<style lang="scss" scoped>
.yz {
  top: -65px;
  position: relative;
  right: 5px;
  float: right;
  transform: rotate(-31deg);
}

/* 发票详情展示 */
.invoice-box {
  border: 2px solid #902121;
  width: 1100px;
  font-size: 15px;
  margin: 0 auto;
  background: #fff;
}


.invoice-box code {
  color: #000;
  box-shadow: none;
  background: none;
  display: block;
  border: 0;
  font-size: 18px;
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
}

.top {
  height: 155px;
  position: relative;
  border: none;
  overflow: hidden;

  .title {
    width: 408px;
    margin: 0 auto;
    padding-bottom: 2px;
    border-bottom: 1px solid #983232;
    position: relative;

    .el-image {
      position: absolute;
      width: 140px;
      left: 135px;
      top: 0px;
    }

    h1 {
      font-size: 32px;
      text-align: center;
      margin: 45px auto 0;
      padding-bottom: 18px;
      font-weight: 500;
      color: #9e5210;
      border-bottom: 1px solid #800000;
      letter-spacing: 4px;
    }
  }
}

.invoice-box .top-tips {
  position: absolute;
  right: 40px;
  top: 20px;
  margin-left: 30px;
  font-size: 16px;
  color: #9e5210;
}

.invoice-box .tips-box {
  height: 30px;
  line-height: 30px;
}

.invoice-box .tips-box span {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  color: #000;
  margin-right: 5px;
  font-weight: bold;
  font-size: 14px;
}

.invoice-box .top-tips .jym {
  color: #9e5210;
  letter-spacing: 8px;
  margin-right: 0;
  font-size: 16px;
  font-weight: 300;
}

.invoice-box .top-tips i {
  margin-left: -8px;
  font-style: normal;
}

.invoice-box .top img {
  position: absolute;
  width: 94px;
  height: 94px;
  left: 70px;
  top: 15px;
}

.invoice-box .jqbh {
  position: absolute;
  left: 55px;
  top: 115px;
  font-size: 16px;
  color: #9e5210;
}

.invoice-box .center {
  width: 1045px;
  /* min-height: 485px; */
  margin: 0 auto;
  border: 2px solid #902121;
}

.invoice-box .center .invoice-info {
  height: 110px;
  border-bottom: 2px solid #ba7575;
  overflow: hidden;
}

.invoice-box .invoice-info div {
  float: left;
}

.invoice-box .invoice-info .gmf,
.invoice-box .invoice-info .xsf {
  width: 600px;
  height: 110px;
  border-right: 2px solid #902121;
}

.invoice-box .invoice-info .title {
  width: 35px;
  height: 110px;
  line-height: 30px;
  padding-top: 10px;
  font-size: 16px;
  letter-spacing: 1px;
  text-align: center;
  border-right: 2px solid #902121;
  color: #9e5210;
}

.invoice-box .invoice-info .bz {
  line-height: 48px;
}

.invoice-box .info p {
  margin: 3px 0 3px 10px;
  width: 550px;
  overflow: hidden;
  white-space: nowrap;
  color: #9e5210;
  font-size: 16px;
  line-height: 23px;
}

.invoice-box i {
  font-style: normal;
}

.invoice-box .info .mc {
  letter-spacing: 64px;
}

.invoice-box .info .parameter {
  font-size: 15px;
  color: #000;
}

.invoice-box .mc-i {
  margin-left: -64px;
}

.invoice-box .info .dzdh {
  letter-spacing: 4px;
}

.invoice-box .dzdh-i {
  margin-left: -4px;
}

.invoice-box .password {
  width: 440px;
}

.invoice-box .password p {
  float: left;
  width: 400px;
  padding: 10px 30px;
  margin: 0;
  font-size: 18px;
  height: 110px;
  overflow: hidden;
  letter-spacing: 2px;
}

.invoice-box .center .xsf-box {
  border-top: 2px solid #902121;
  border-bottom: none;
}

.invoice-box table {
  color: #9e5210;
  border: none;
}

.invoice-box table th {
  text-align: center;
}

.invoice-box table th,
.invoice-box table td {
  border-right: 2px solid #902121;
}

.invoice-box table .spmc {
  width: 280px;
}

.invoice-box table .ggxh {
  width: 80px;
}

.invoice-box table .dw {
  width: 65px;
}

.invoice-box table .sum {
  width: 120px;
}

.invoice-box table .dj {
  width: 130px;
}

.invoice-box table .je {
  width: 165px;
}

.invoice-box table .sl {
  width: 45px;
}

.invoice-box table .se {
  width: 160px;
  border: none;
}

.invoice-box table tr {
  height: 20px;
}

.invoice-box table td {
  color: #000;
}

.invoice-box .hjh td {
  border-bottom: 2px solid #902121;
}

.invoice-box .hjh .hj {
  color: #9e5210;
  text-align: center;
}

.invoice-box .hjh .jshj {
  color: #9e5210;
  text-align: center;
  border-bottom: none;
}

.invoice-box .hjh span {
  display: inline-block;
  margin-left: 20px;
  color: #9e5210;
}

.invoice-box .hjh i,
.invoice-box .hjh .uppercase {
  color: #000;
}

.invoice-box .hjh .lowercase {
  margin-left: 380px;
}

.invoice-box table .no-border {
  border: none;
}

.invoice-box tbody td {
  text-align: right;
  padding: 0 2px;
  font-size: 14px;
}

.invoice-box tbody td:nth-child(1) {
  text-align: left;
  font-weight: bold;
}

.invoice-box .footer {
  margin: 20px auto;
  position: relative;
  color: #9e5210;
  height: 60px;
  overflow: hidden;
}

.invoice-box .footer span {
  position: absolute;
}

.invoice-box .footer .skr {
  top: 0;
  left: 60px;
}

.invoice-box .footer .fh {
  top: 0;
  left: 350px;
}

.invoice-box .footer .kpr {
  top: 0;
  left: 575px;
}

.invoice-box .footer .xsf {
  top: 0;
  left: 800px;
}

.invoice-box .footer i {
  color: #000;
}


.inputys {
  width: 100px;
  // display: inline-block;
  border: none;
  outline: none;
  background-color: white;
}
</style>

### 实现电子印章

```vue
<template>
    <div>
        <canvas id="canvas" width="200" height="200"></canvas>
    </div>
</template>
<script>
import chapter from './config/chapter'
export default {
    mounted(){
        chapter('XXX专用章','XXX科技股份有限公司')
    }
}
</script>

```

```js
let chapter = (text, companyName) => {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");

  //let text = "XXX专用章";
  //let companyName = "XXX科技股份有限公司";

  // 绘制印章边框
  let width = canvas.width / 2;
  let height = canvas.height / 2;
  context.lineWidth = 5;
  context.strokeStyle = "#f00";
  context.beginPath();
  context.arc(width, height, 90, 0, Math.PI * 2); //宽、高、半径
  context.stroke();

  //画五角星
  create5star(context, width, height, 25, "#f00", 0);

  // 绘制印章名称
  context.font = "20px 宋体";
  context.textBaseline = "middle"; //设置文本的垂直对齐方式
  context.textAlign = "center"; //设置文本的水平对对齐方式
  context.lineWidth = 1;
  context.strokeStyle = "#f00";
  context.strokeText(text, width, height + 60);

  // 绘制印章单位
  context.translate(width, height); // 平移到此位置,
  context.font = "23px 宋体";
  let count = companyName.length; // 字数
  let angle = (4 * Math.PI) / (3 * (count - 1)); // 字间角度
  let chars = companyName.split("");
  let c;
  for (let i = 0; i < count; i++) {
    c = chars[i]; // 需要绘制的字符
    if (i == 0) {
      context.rotate((5 * Math.PI) / 6);
    } else {
      context.rotate(angle);
    }

    context.save();
    context.translate(70, 0); // 平移到此位置,此时字和x轴垂直，公司名称和最外圈的距离
    context.rotate(Math.PI / 2); // 旋转90度,让字平行于x轴
    context.strokeText(c, 0, 0); // 此点为字的中心点
    context.restore();
  }

  //绘制五角星
  function create5star(context, sx, sy, radius, color, rotato) {
    context.save();
    context.fillStyle = color;
    context.translate(sx, sy); //移动坐标原点
    context.rotate(Math.PI + rotato); //旋转
    context.beginPath(); //创建路径
    // let x = Math.sin(0);
    // let y = Math.cos(0);
    let dig = (Math.PI / 5) * 4;
    for (let i = 0; i < 5; i++) {
      //画五角星的五条边
      let x = Math.sin(i * dig);
      let y = Math.cos(i * dig);
      context.lineTo(x * radius, y * radius);
    }
    context.closePath();
    context.stroke();
    context.fill();
    context.restore();
  }
};

export default chapter;

```

### 横向滚动公告
```vue
<template>
    <div class="my-outbox">
          <div class="my-inbox" ref='box'>
                <div class="my-list" :style="note" v-for="(item, index) in sendVal" :key='index' ref='list'>
                      <!--{{item.name}}刚刚购买了产品-->
                      <span class="my-uname">{{ item.detail }}</span>
                    </div>
              </div>
    </div>
</template>

<script>
export default {
    name: 'my-marquee-left',
    props: {

        sendVal: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            note: {
                // backgroundImage:
                //     "url(" + require("@/assets/logo.png") + ")",
                backgroundSize: "20px 20px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "1%  50%"
            },
            // 定时器标识
            nowTime: null,
            // 每一个内容的宽度
            disArr: []
        }
    },
    mounted() {
        // var that = this
        var item = this.$refs.list
        var len = this.sendVal.length
        var arr = []
        // 因为设置的margin值一样，所以取第一个就行。
        var margin = this.getMargin(item[0])
        for (var i = 0; i < len; i++) {
            arr.push(item[i].clientWidth + margin) // 把宽度和 margin 加起来就是每一个元素需要移动的距离
        }
        this.disArr = arr
        this.moveLeft()
    },
    beforeDestroy() {
        // 页面关闭清除定时器
        clearInterval(this.nowTime)
        // 清除定时器标识
        this.nowTime = null
    },
    methods: {
        // 获取margin属性
        getMargin(obj) {
            var marg = window.getComputedStyle(obj, null)['margin-right']
            marg = marg.replace('px', '')
            return Number(marg) // 强制转化成数字
        },
        // 移动的方法
        moveLeft() {
            var that = this
            var outbox = this.$refs.box
            // 初始位置
            var startDis = 0
            //   console.log('that.disArr: ', that.disArr)
            this.nowTime = setInterval(function () {
                startDis -= 0.5
                // console.log('初始化移动：', startDis)
                if (Math.abs(startDis) > Math.abs(that.disArr[0])) {
                    // 每次移动完一个元素的距离，就把这个元素的宽度
                    that.disArr.push(that.disArr.shift())
                    // 每次移动完一个元素的距离，就把列表数据的第一项放到最后一项
                    // console.log('that.sendVal: ', that.sendVal)
                    // console.log('that.sendVal: ', that.sendVal.shift())
                    that.sendVal.push(that.sendVal.shift())
                    startDis = 0
                    // console.log('移动')
                } else {
                    // console.log('不来不来就不来...')
                }
                // 每次都让盒子移动指定的距离，在我自己做的项目中，这种字符串拼接的方法并没有生效
                // outbox.style = 'transform: translateX3d(' + startDis + 'px)' 
                // 后面换了es6的模板字符串就可以了
                outbox.style = `transform: translateX(${startDis}px)`
                // outbox.style = 'transform: translateX(\' + startDis + \' px)'
                // outbox.style.marginLeft = 'startDis'
                // console.log('这里:', startDis)
            }, 1000 / 60)
        }
    }
}
</script>

<style lang="scss" scoped>
.my-outbox {
    color: #D7BC8D;
    overflow: hidden;
    // color: #FFFFFF;
    height: 35px;

    /*background: #422b02;*/
    .my-inbox {
        white-space: nowrap;

        .my-list {
            margin-right: 100px;
            display: inline-block;
            font-size: 14px;
            // height: 20px;
            text-indent: 30px;
            line-height: 40px;

            .my-uname {
                color: #FF8900;
                // color: #FFFFFF;
            }
        }
    }
}
</style>
```

使用`<marqueeLeft :sendVal="newsList"></marqueeLeft>`

### HTML打印

```js
// @click="printComponent('myComponent')"  myComponent为需要打印的dive的id名称（<div id="myComponent" class="id-card-holder">）
import html2canvas from 'html2canvas';
import printJS from 'print-js';

/** 打印 */
printComponent(componentId) {
// 将分辨率提高到特定的DPI 提高16倍
html2canvas(document.querySelector(`#${componentId}`), { dpi: window.devicePixelRatio * 16, scale: 16 }).then(canvas => {
printJS({
  printable: canvas.toDataURL('image/png'),
  type: 'image'
});
});
},
```

### Vue输入框同时绑定了blur和其他事件，避免同时触发两次事件
做的项目有个需求，弹窗里面有个表单，里面的输入框按回车和失焦都可以触发某一事件，如果同时绑定就会出现按回车之后，在关闭弹窗或点击其他位置都会触发blur的事件，解决方法：
```html
<el-input
 @input="func()"
 @blur="blur&&getTestInfoBlur()"
></el-input
```
```js
// An highlighted block
export default {
  data() {
    return {
      blur:true,
      },
  },
  methods: {
  //func函数是用来解决用户enter之后再输入内容blur失效的问题
    func(){
      this.blur=true;
    },
    //blur触发的事件
    getTestInfoBlur(){
      this.getTestInfo();
    },
    //enter触发的事件，触发之后把blur设置为false，避免重复触发
     getTestInfoEnter(){
      this.blur=false;
      this.getTestInfo();
    },
    //你自己的代码
    getTestInfo() {
      ...
    },
};

```

### 缓存页面接口重复调用

```js
if (this.isRequesting) return;
this.isRequesting = true;
// 调用接口
this.isRequesting = false;
```

### 扫码枪扫码自动请求事件

```vue
<template>
    <div>
     <el-dialog title="微信扫码新增信息" class="dialogBox" :show-close="false" :visible.sync="scanVisible" width="400px">
      <el-descriptions :title="addData.buyerName" :column="1" :labelStyle="{ width: '60px' }">
        <el-descriptions-item label="税号">{{ addData.buyerNsrsbh }}</el-descriptions-item>
        <el-descriptions-item label="单位地址">{{ addData.address }}</el-descriptions-item>
        <el-descriptions-item label="电话">{{ addData.companyTel }}</el-descriptions-item>
        <el-descriptions-item label="开户银行">{{ addData.yhmc }}</el-descriptions-item>
        <el-descriptions-item label="银行账户">{{ addData.yhzh }}</el-descriptions-item>
      </el-descriptions>
      <el-button type="primary" @click="submitAdd">确认</el-button>
    </el-dialog>
    </div>
</template>
<script>
export default {
  data() {
   return{
      formScan: {},
      keyupLastTime: null,
      realBarcode: '',
      realBarcode1: '',
      addData: {},
    }
  },
methods: {
// 扫码新增
    handleKeyUp(e) {
      let gap = 0;
      clearTimeout
      if (this.keyupLastTime) {
        gap = new Date().getTime() - this.keyupLastTime;
        if (gap > 50) {
          gap = 0;
          this.realBarcode = "";
        }
      }
      this.keyupLastTime = new Date().getTime();
      if (e.key != "Process" && gap < 50) {
        if (e.key.trim().length == 1) {
          // 输入单个字母或者数字
          this.realBarcode += e.key;
          if (this.realBarcode.length == 53) {
            // this.realBarcode = this.realBarcode.replace(/\/cak/, '?cak');
            console.log(this.realBarcode1);
            this.formScan.scanEntry = this.realBarcode;
            this.submitScan()
          }
          console.log(e);
          console.log(this.realBarcode.length);
          console.log('this.realBarcode**', this.realBarcode);
        }
      } else {
        console.log(this.realBarcode1);
        // this.formScan.scanEntry = this.realBarcode;
        // this.submitScan()
      }
    },
    scanAdd() {
      this.formScan = {};
      this.scanVisible = true;
      let that = this;
      document.onkeypress = function (e) {
        that.handleKeyUp(e);
      };
    },
    submitScan() {
      let scanData = { scanText: this.formScan.scanEntry }
      this.$modal.loading("正在获取数据，请稍候...");
      scanTitle(scanData).then((res) => {
        // console.log(res);
        let { title, phone, taxNo, addr, bankType, bankNo } = res.data
        this.addData = {
          buyerName: title,
          companyTel: phone,
          buyerNsrsbh: taxNo,
          address: addr,
          yhmc: bankType,
          yhzh: bankNo
        }
        this.$modal.msgSuccess("获取成功");
        this.$modal.closeLoading()
      }).catch(() => {
        this.realBarcode = "";
        let that = this;
        document.onkeyup = function (e) {
          that.handleKeyUp(e);
        };
        this.$modal.closeLoading()
      });
    },
    submitAdd() {
      addBuyer(this.addData).then(response => {
        this.$modal.msgSuccess("新增成功");
        this.$modal.closeLoading()
        this.scanVisible = false;
        this.getList();
      }).catch(() => {
        this.realBarcode = "";
        this.$modal.closeLoading()
      });
    },
 }

}
</script>
```

### 发票PDF预览
```vue
<template>
  <el-dialog :title="title" :visible.sync="examineOpen" width="1000px" class="invoice-dialog" append-to-body>
    <div :style="{ height: examineHeight }" v-loading="examineOpenOf">
      <vue-office-pdf ref="examineOpenPDF" :src="examinePDF" @rendered="renderedHandler" @error="errorHandler" />
    </div>
  </el-dialog>
</template>

<script>
import VueOfficePdf from '@vue-office/pdf'
export default {
  components: {
    VueOfficePdf
  },
  data() {
    return {
      examineOpen: false,
      examineOpenOf: true,
      examinePDF: '',
      examineHeight: '600px',
    }
  },
  methods: {
    /** 发票明细点击事件 */
    handlePreview(row) {
      const id = row.id || this.ids
      queryDetailInfoById(id).then(response => {
        this.invoiceData = response.data;
        this.invoiceData.state = this.invoiceData.state;
        this.examinePDF = this.invoiceData.qdPdfUrl;
        this.invCrestvInvoiceItemList = response.data.invoiceItemList;
        const { ewm, fpDm, fpHm, hjje, kprq } = this.invoiceData;
        let ewms = '01,01,' + '' + ',' + fpHm + ',' + hjje + ',' + kprq + ',' + '' + ',' + '727C'
        let kprqs = formatDate(this.invoiceData.kprq);
        this.invoiceData.kprq = kprqs;
        if (this.invoiceData.qdPdfUrl == '') {
          this.open = true;
          this.title = "发票预览";
        } else {
          this.examineOpenOf = true;
          this.examineOpen = true;
          this.title = "PDF预览";
          if (!!this.$refs.examineOpenPDF) {
            setTimeout(() => {
              this.examineOpenOf = false;
            }, 800);
          }

        }
      });
    },
    renderedHandler() {
      this.examineOpenOf = false;
      console.log("渲染完成")
      let ele = document.getElementsByClassName('vue-office-pdf-wrapper')
      this.examineHeight = ele[0].childNodes[0].clientHeight + 3 + 'px';
    },
    errorHandler() {
      console.log("渲染失败")
    },
  },
}
</script>

<style lang="scss" scoped>
.invoice-dialog :deep .vue-office-pdf-wrapper {
  padding: 0 !important;
  background: #fff !important;
}
</style>
```

### 网页打印小票解决方案

1.先去网站下载控件[下载](https://www.lodop.net/download.html)

2.在项目中执行`npm i lodop-print-designer`或者 `npm install kr-print-designer`
并在main.js加入
```js
// import KrPrintDesigner from "kr-print-designer";
// import "kr-print-designer/lib/kr-print-designer.css";

// Vue.use(KrPrintDesigner);
import LodopPrintDesigner from "lodop-print-designer";
import "lodop-print-designer/lib/lodop-print-designer.css";

Vue.use(LodopPrintDesigner);
```

3.定义一个jison样式
```js
export let printData = {
    "title": "123",
    "type": 1,
    "width": 180,
    "height": 500,
    "pageWidth": 58,
    "pageHeight": 140,
    "tempItems": [
        {
            "type": "braid-txt",
            "isEdit": 0,
            "dragable": true,
            "resizable": true,
            "width": 179,
            "height": 19,
            "left": 0,
            "top": 13,
            "title": "公司名称",
            "value": "{公司名称}",
            "defaultValue": "某某公司",
            "name": "companyName",
            "style": {
                "zIndex": 0,
                "FontSize": 10,
                "FontColor": "#000000",
                "Bold": true,
                "Italic": false,
                "Underline": false,
                "Alignment": "center",
                "ItemType": 0
            },
            "uuid": "ljlb357ae3k04e2b"
        },
        {
            "type": "braid-txt",
            "isEdit": 1,
            "dragable": true,
            "resizable": true,
            "width": 171,
            "height": 20,
            "left": 12,
            "top": 48,
            "title": "出库单号",
            "value": "{出库单号1111111111}",
            "defaultValue": "CK-1234567890",
            "name": "stockoutCode",
            "style": {
                "zIndex": 0,
                "FontSize": 9,
                "FontColor": "#000000",
                "Bold": false,
                "Italic": false,
                "Underline": false,
                "Alignment": "left",
                "ItemType": 0
            },
            "uuid": "bqath1ja3su0s1cm"
        },
        {
            "type": "braid-txt",
            "isEdit": 1,
            "dragable": true,
            "resizable": true,
            "width": 168,
            "height": 19,
            "left": 12,
            "top": 71,
            "title": "出库时间",
            "value": "{出库时间845848484}",
            "defaultValue": "2020-08-27 12:00:00",
            "name": "businessDate",
            "style": {
                "zIndex": 0,
                "FontSize": 9,
                "FontColor": "#000000",
                "Bold": false,
                "Italic": false,
                "Underline": false,
                "Alignment": "left",
                "ItemType": 0
            },
            "uuid": "kwoqo1jao95amhb5"
        },
        {
            "type": "braid-txt",
            "isEdit": 1,
            "dragable": true,
            "resizable": true,
            "width": 141,
            "height": 18,
            "left": 12,
            "top": 96,
            "title": "合计金额",
            "value": "{合计金额}",
            "defaultValue": "123.00",
            "name": "totalPrice",
            "style": {
                "zIndex": 0,
                "FontSize": 9,
                "FontColor": "#000000",
                "Bold": false,
                "Italic": false,
                "Underline": false,
                "Alignment": "left",
                "ItemType": 0
            },
            "uuid": "ek1ejq1k0jnbzhpg"
        },
        {
            "type": "horizontal-line",
            "isEdit": false,
            "dragable": true,
            "resizable": true,
            "width": 177,
            "height": 10,
            "left": 2,
            "top": 125,
            "title": "横线",
            "value": "横线",
            "defaultValue": "——",
            "name": "",
            "style": {
                "type": "solid",
                "zIndex": 0,
                "FontSize": 1,
                "FontColor": "#000000",
                "lineType": 0,
                "ItemType": 0
            },
            "uuid": "uwu13b9oui5aio63"
        },
        {
            "type": "braid-txt",
            "isEdit": 1,
            "dragable": true,
            "resizable": true,
            "width": 179,
            "height": 25,
            "left": 0,
            "top": 281,
            "title": "自定义文本",
            "value": "支付宝或微信扫码开票",
            "defaultValue": "自定义文本",
            "name": "",
            "style": {
                "zIndex": 0,
                "FontSize": 9,
                "FontColor": "#000000",
                "Bold": true,
                "Italic": false,
                "Underline": false,
                "Alignment": "center",
                "ItemType": 0
            },
            "uuid": "c0p50209qqxg9wm2"
        },
        {
            "type": "braid-txt",
            "isEdit": 1,
            "dragable": true,
            "resizable": true,
            "width": 179,
            "height": 23,
            "left": 0,
            "top": 308,
            "title": "自定义文本",
            "value": "请于2023年前扫码开票",
            "defaultValue": "自定义文本",
            "name": "",
            "style": {
                "zIndex": 0,
                "FontSize": 9,
                "FontColor": "#000000",
                "Bold": true,
                "Italic": false,
                "Underline": false,
                "Alignment": "center",
                "ItemType": 0
            },
            "uuid": "emyb5a59to709i8b"
        },
        {
            "type": "braid-txt",
            "isEdit": 1,
            "dragable": true,
            "resizable": true,
            "width": 177,
            "height": 20,
            "left": 1,
            "top": 336,
            "title": "自定义文本",
            "value": "否则二维码将失效",
            "defaultValue": "自定义文本",
            "name": "",
            "style": {
                "zIndex": 0,
                "FontSize": 9,
                "FontColor": "#000000",
                "Bold": true,
                "Italic": false,
                "Underline": false,
                "Alignment": "center",
                "ItemType": 0
            },
            "uuid": "3qe7nbdyhgx1e9i2"
        },
        {
            "type": "bar-code",
            "isEdit": 1,
            "dragable": true,
            "resizable": true,
            "width": 120,
            "height": 120,
            "left": 33,
            "top": 142,
            "title": "单号条码",
            "value": "{单号}",
            "defaultValue": "CK-1234567890",
            "name": "stockoutCode",
            "style": {
                "zIndex": 0,
                "FontSize": 9,
                "ShowBarText": false,
                "codeType": "QRCode",
                "ItemType": 0
            },
            "lodopStyle": {
                "QRCodeVersion": "1",
                "QRCodeErrorLevel": "L"
            },
            "uuid": "11vm4wo9kqimha8j"
        }
    ]
}
```
4.之后直接进行调用
```js
import { printData } from "@/utils/print";
this.$lodop.previewTemp(printData)
```
#### 法二
public内的html引入下面js文件
```js
//==本JS是加载Lodop插件或Web打印服务CLodop/Lodop7的综合示例，可直接使用，建议理解后融入自己程序==

//用双端口加载主JS文件Lodop.js(或CLodopfuncs.js兼容老版本)以防其中某端口被占:
var MainJS = "CLodopfuncs.js",
  URL_WS1 = "ws://localhost:8000/" + MainJS,                //ws用8000/18000
  URL_WS2 = "ws://localhost:18000/" + MainJS,
  URL_HTTP1 = "http://localhost:8000/" + MainJS,              //http用8000/18000
  URL_HTTP2 = "http://localhost:18000/" + MainJS,
  URL_HTTP3 = "https://localhost.lodop.net:8443/" + MainJS;   //https用8000/8443

var CreatedOKLodopObject, CLodopIsLocal, LoadJsState;

//==判断是否需要CLodop(那些不支持插件的浏览器):==
function needCLodop() {
  try {
    var ua = navigator.userAgent;
    if (ua.match(/Windows\sPhone/i) ||
      ua.match(/iPhone|iPod|iPad/i) ||
      ua.match(/Android/i) ||
      ua.match(/Edge\D?\d+/i))
      return true;
    var verTrident = ua.match(/Trident\D?\d+/i);
    var verIE = ua.match(/MSIE\D?\d+/i);
    var verOPR = ua.match(/OPR\D?\d+/i);
    var verFF = ua.match(/Firefox\D?\d+/i);
    var x64 = ua.match(/x64/i);
    if ((!verTrident) && (!verIE) && (x64)) return true;
    else if (verFF) {
      verFF = verFF[0].match(/\d+/);
      if ((verFF[0] >= 41) || (x64)) return true;
    } else if (verOPR) {
      verOPR = verOPR[0].match(/\d+/);
      if (verOPR[0] >= 32) return true;
    } else if ((!verTrident) && (!verIE)) {
      var verChrome = ua.match(/Chrome\D?\d+/i);
      if (verChrome) {
        verChrome = verChrome[0].match(/\d+/);
        if (verChrome[0] >= 41) return true;
      }
    }
    return false;
  } catch (err) {
    return true;
  }
}

//==检查加载成功与否，如没成功则用http(s)再试==
//==低版本CLODOP6.561/Lodop7.043及前)用本方法==
function checkOrTryHttp() {
  if (window.getCLodop) {
    LoadJsState = "complete";
    return true;
  }
  if (LoadJsState == "loadingB" || LoadJsState == "complete") return;
  LoadJsState = "loadingB";
  var head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
  var JS1 = document.createElement("script")
    , JS2 = document.createElement("script")
    , JS3 = document.createElement("script");
  JS1.src = URL_HTTP1;
  JS2.src = URL_HTTP2;
  JS3.src = URL_HTTP3;
  JS1.onload = JS2.onload = JS3.onload = JS2.onerror = JS3.onerror = function () { LoadJsState = "complete"; }
  JS1.onerror = function (e) {
    if (window.location.protocol !== 'https:')
      head.insertBefore(JS2, head.firstChild); else
      head.insertBefore(JS3, head.firstChild);
  }
  head.insertBefore(JS1, head.firstChild);
}

//==加载Lodop对象的主过程:==
(function loadCLodop() {
  if (!needCLodop()) return;
  CLodopIsLocal = !!((URL_WS1 + URL_WS2).match(/\/\/localho|\/\/127.0.0./i));
  LoadJsState = "loadingA";
  if (!window.WebSocket && window.MozWebSocket) window.WebSocket = window.MozWebSocket;
  //ws方式速度快(小于200ms)且可避免CORS错误,但要求Lodop版本足够新:
  try {
    var WSK1 = new WebSocket(URL_WS1);
    WSK1.onopen = function (e) { setTimeout("checkOrTryHttp()", 200); }
    WSK1.onmessage = function (e) { if (!window.getCLodop) eval(e.data); }
    WSK1.onerror = function (e) {
      var WSK2 = new WebSocket(URL_WS2);
      WSK2.onopen = function (e) { setTimeout("checkOrTryHttp()", 200); }
      WSK2.onmessage = function (e) { if (!window.getCLodop) eval(e.data); }
      WSK2.onerror = function (e) { checkOrTryHttp(); }
    }
  } catch (e) {
    checkOrTryHttp();
  }
})();


//==获取LODOP对象主过程,判断是否安装、需否升级:==
function getLodop(oOBJECT, oEMBED) {
  var strFontTag = "<br><font color='#FF00FF'>打印控件";
  var strLodopInstall = strFontTag + "未安装!点击这里<a href='install_lodop32.exe' target='_self'>执行安装</a>";
  var strLodopUpdate = strFontTag + "需要升级!点击这里<a href='install_lodop32.exe' target='_self'>执行升级</a>";
  var strLodop64Install = strFontTag + "未安装!点击这里<a href='install_lodop64.exe' target='_self'>执行安装</a>";
  var strLodop64Update = strFontTag + "需要升级!点击这里<a href='install_lodop64.exe' target='_self'>执行升级</a>";
  var strCLodopInstallA = "<br><font color='#FF00FF'>Web打印服务CLodop未安装启动，点击这里<a href='CLodop_Setup_for_Win32NT.exe' target='_self'>下载执行安装</a>";
  var strCLodopInstallB = "<br>（若此前已安装过，可<a href='CLodop.protocol:setup' target='_self'>点这里直接再次启动</a>）";
  var strCLodopUpdate = "<br><font color='#FF00FF'>Web打印服务CLodop需升级!点击这里<a href='CLodop_Setup_for_Win32NT.exe' target='_self'>执行升级</a>";
  var strLodop7FontTag = "<br><font color='#FF00FF'>Web打印服务Lodop7";
  var strLodop7HrefX86 = "点击这里<a href='Lodop7_Linux_X86_64.tar.gz' target='_self'>下载安装</a>(下载后解压，点击lodop文件开始执行)";
  var strLodop7HrefARM = "点击这里<a href='Lodop7_Linux_ARM64.tar.gz'  target='_self'>下载安装</a>(下载后解压，点击lodop文件开始执行)";
  var strLodop7Install_X86 = strLodop7FontTag + "未安装启动，" + strLodop7HrefX86;
  var strLodop7Install_ARM = strLodop7FontTag + "未安装启动，" + strLodop7HrefARM;
  var strLodop7Update_X86 = strLodop7FontTag + "需升级，" + strLodop7HrefX86;
  var strLodop7Update_ARM = strLodop7FontTag + "需升级，" + strLodop7HrefARM;
  var strInstallOK = "，成功后请刷新本页面或重启浏览器。</font>";
  var LODOP;
  try {
    var isWinIE = (/MSIE/i.test(navigator.userAgent)) || (/Trident/i.test(navigator.userAgent));
    var isWinIE64 = isWinIE && (/x64/i.test(navigator.userAgent));
    var isLinuxX86 = (/Linux/i.test(navigator.platform)) && (/x86/i.test(navigator.platform));
    var isLinuxARM = (/Linux/i.test(navigator.platform)) && (/aarch/i.test(navigator.platform));

    if (needCLodop() || isLinuxX86 || isLinuxARM) {
      try {
        LODOP = window.getCLodop();
      } catch (err) { }
      if (!LODOP && LoadJsState !== "complete") {
        if (!LoadJsState)
          alert("未曾加载Lodop主JS文件，请先调用loadCLodop过程."); else
          alert("网页还没下载完毕，请稍等一下再操作.");
        return;
      }
      var strAlertMessage;
      if (!LODOP) {
        if (isLinuxX86)
          strAlertMessage = strLodop7Install_X86;
        else if (isLinuxARM)
          strAlertMessage = strLodop7Install_ARM;
        else
          strAlertMessage = strCLodopInstallA + (CLodopIsLocal ? strCLodopInstallB : "");
        document.body.innerHTML = strAlertMessage + strInstallOK + document.body.innerHTML;
        return;
      } else {
        if (isLinuxX86 && LODOP.CVERSION < "7.0.7.5")
          strAlertMessage = strLodop7Update_X86;
        else if (isLinuxARM && LODOP.CVERSION < "7.0.7.5")
          strAlertMessage = strLodop7Update_ARM;
        else if (CLODOP.CVERSION < "6.5.7.9")
          strAlertMessage = strCLodopUpdate;

        if (strAlertMessage)
          document.body.innerHTML = strAlertMessage + strInstallOK + document.body.innerHTML;
      }
    } else {
      //==如果页面有Lodop插件就直接使用,否则新建:==
      if (oOBJECT || oEMBED) {
        if (isWinIE)
          LODOP = oOBJECT;
        else
          LODOP = oEMBED;
      } else if (!CreatedOKLodopObject) {
        LODOP = document.createElement("object");
        LODOP.setAttribute("width", 0);
        LODOP.setAttribute("height", 0);
        LODOP.setAttribute("style", "position:absolute;left:0px;top:-100px;width:0px;height:0px;");
        if (isWinIE)
          LODOP.setAttribute("classid", "clsid:2105C259-1E0C-4534-8141-A753534CB4CA");
        else
          LODOP.setAttribute("type", "application/x-print-lodop");
        document.documentElement.appendChild(LODOP);
        CreatedOKLodopObject = LODOP;
      } else
        LODOP = CreatedOKLodopObject;
      //==Lodop插件未安装时提示下载地址:==
      if ((!LODOP) || (!LODOP.VERSION)) {
        document.body.innerHTML = (isWinIE64 ? strLodop64Install : strLodopInstall) + strInstallOK + document.body.innerHTML;
        return LODOP;
      }
      if (LODOP.VERSION < "6.2.2.6") {
        document.body.innerHTML = (isWinIE64 ? strLodop64Update : strLodopUpdate) + strInstallOK + document.body.innerHTML;
      }
    }
    //===如下空白位置适合调用统一功能(如注册语句、语言选择等):=======================
    LODOP.SET_LICENSES("", "EE0887D00FCC7D29375A695F728489A6", "C94CEE276DB2187AE6B65D56B3FC2848", "");

    //===============================================================================
    return LODOP;
  } catch (err) {
    alert("getLodop出错:" + err);
  }
}

```
vue文件中直接调用
``` js
/** 打印 */
    printComponent() {

      var strStyleCSS = "<link href='/css/myComponent.css' type='text/css' rel='stylesheet'>";
      var strFormHtml = strStyleCSS + "<body>" + document.getElementById("myComponent").innerHTML + "</body>";
      var LODOP = getLodop();
      LODOP.SET_PRINT_STYLEA("FontSize", 12);//打印区域的字体大小
      LODOP.SET_PRINT_PAGESIZE(5, 560, 1250, "");//打印区域的整体尺寸
      LODOP.ADD_PRINT_HTM(5, 5, 500, 1350, strFormHtml);
      LODOP.PRINT();
      // LODOP.PREVIEW()
    },
```
#### PDF打印
写出共用方法，并全局注册
```js
function demoGetBASE64(dataArray) {
  var digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var strData = "";
  for (var i = 0, ii = dataArray.length; i < ii; i += 3) {
    if (isNaN(dataArray[i])) break;
    var b1 = dataArray[i] & 0xFF, b2 = dataArray[i + 1] & 0xFF, b3 = dataArray[i + 2] & 0xFF;
    var d1 = b1 >> 2, d2 = ((b1 & 3) << 4) | (b2 >> 4);
    var d3 = i + 1 < ii ? ((b2 & 0xF) << 2) | (b3 >> 6) : 64;
    var d4 = i + 2 < ii ? (b3 & 0x3F) : 64;
    strData += digits.substring(d1, d1 + 1) + digits.substring(d2, d2 + 1) + digits.substring(d3, d3 + 1) + digits.substring(d4, d4 + 1);
  }
  return strData;
}

export function demoDownloadPDF(url) {
  if (!(/^https?:/i.test(url))) return;
  if (window.XMLHttpRequest) var xhr = new XMLHttpRequest(); else var xhr = new ActiveXObject("MSXML2.XMLHTTP");
  xhr.open('GET', url, false); //同步方式
  if (xhr.overrideMimeType)
    try {
      xhr.responseType = 'arraybuffer';
      var arrybuffer = true;
    } catch (err) {
      xhr.overrideMimeType('text/plain; charset=x-user-defined');
    }
  xhr.send(null);
  var data = xhr.response || xhr.responseBody;
  if (typeof Uint8Array !== 'undefined') {
    if (arrybuffer) var dataArray = new Uint8Array(data); else {
      var dataArray = new Uint8Array(data.length);
      for (var i = 0; i < dataArray.length; i++) { dataArray[i] = data.charCodeAt(i); }
    }
  } else
    var dataArray = VBS_BinaryToArray(data).toArray(); //兼容IE低版本
  return demoGetBASE64(dataArray);
}
```
之后直接使用
```js
printLodop() {
      var strURL = 'https://localhost.lodop.net:8443/CLodopDemos/PDFDemo.pdf';
      LODOP = getLodop();
      LODOP.PRINT_INIT("测试PDF打印功能");
      LODOP.ADD_PRINT_PDF(0, 0, "100%", "100%", this.demoDownloadPDF(strURL));
      // LODOP.PREVIEW();
      LODOP.PRINT();
    },
```

### 拍照扫描条形码 用Quagga.js
```vue
<template>
  <div class="mt46 input-cells">
    <div class="flex a-center f-fl">
      <div>车架号</div>
      <input v-model="queryParams.vin" class="cell-input ml5 mr10" type="text" placeholder="请输入或扫描拍照" />
    </div>
    <div class="flex l-center a-left">
      <div class="qr-item mr5 ml5">
        <img src="#" width="10" height="10" alt="">
        <i class="el-icon-camera" style="font-size: 24px;"><span style="font-size: 14px;">拍照</span></i>
        <input v-if="isUploadBarCode" class="qr-item-input" @change="toQR" type="file" accept="image/*" capture="camera">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

import Quagga from 'quagga'
export default {
  name: 'One',
  data() {
    return {
      queryParams: {
        vin: null
      },
      isUploadBarCode: true, // 控制销毁
    }
  },
  mounted() {
  },
  methods: {
    // 图片 识别 条形码
    toQR(e) {
      const that = this
      const file0 = e.target.files[0]
      this.isUploadBarCode = false
      Quagga.decodeSingle({
        inputStream: {
          name: 'image',
          type: 'ImageStream',
          size: 800,
          singleChannel: false,
        },
        locator: {
          patchSize: 'medium',
          halfSample: true
        },
        numOfWorkers: 4,
        decoder: { // ean_reader 这里指定ean条形码，就是国际13位的条形码   code39    code_128
          readers: [{
            format: "code_128_reader",
            config: {}
          }]
        },
        locate: true,
        src: URL.createObjectURL(file0)
      }, (result) => {
        console.log('Quagga()-result', result)
        // let code = result.codeResult.code
        if (result && result.codeResult) {
          that.queryParams.vin = result.codeResult.code
          // 执行 页面请求刷新
        } else {
          that.queryParams.vin = null
          console.warn('识别失败，请手动输入')
        }
        this.isUploadBarCode = true
      })
    },
  }
}
</script>

<style scoped>

.input-label {
  margin-left: 0;
  font-size: .14rem;
  width: .9rem;
}

.input-cells>input {
  font-size: .14rem;
  text-align: right;
}

.input-cells>img {
  width: .06rem;
  height: .1rem;
  margin-right: .03rem;
}

.qr-item {
  width: 4.5rem;
  height: 100%;
  background-size: 120%;
  position: relative;
  overflow: hidden;
  border: 1px solid #dae7f6;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.qr-item-input {
  opacity: 0;
  width: 100%;
  height: 100%;
  background-size: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.flex {
  display: flex;
}

.a-center {
  align-items: center;
}

.f-fl {
  float: left;
}

.ml5 {
  margin-left: .05rem;
}

.mr10 {
  margin-right: .1rem;
}
</style>
```

### win消息通知

```js
showNotification() {
      // 检查浏览器是否支持Notification API
      if (!("Notification" in window)) {
        alert("此浏览器不支持通知");
        return;
      }
 
      // 请求用户权限
      Notification.requestPermission()
        .then(permission => {
          if (permission === "granted") {
            // 如果用户授权，则创建通知
            const notification = new Notification("通知标题", {
              body: "通知内容",
              icon: "notification-icon.png" // 通知的图标（可选）
            });
          }
        })
        .catch(err => {
          console.error("请求通知权限出错:", err);
        });
    }
```



