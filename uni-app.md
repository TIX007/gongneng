### uniapp中image src动态引用图片不生效问题

**解决：url地址用require引入**

```vue
<template>
    <image :src="list[0].url" mode="scaleToFill" class="grid_img"></image>
</template>
<script>
	export default {
		data() {
			return {
				list: [
					{
						url: require('./img/cat_01.png')
					}
				]
			}
		}
	}
</script>
```

### 组件及配置以及模块的使用

组件

```vue
<template>
	<view v-if="init_status" class="yy_text">
		<view class="title">
			<view class="classify_title">
               //在cdata中传入模板通过config.title_key进行配置数据动态加载
				{{cdata[config.title_key]}}
			</view>
			<view class="classify_flex">
				<view class="classify_icon">
					<image :src='cdata[config.url_key]' mode=""></image>
				</view>
				<view :class="{
				'base-flex':true,
				'bottom-line':config.bottom_line
			}">
					<view  class="base-fiex-item base-flex-start base-title">
						{{cdata[config.title2_key]}}
					</view>
					<view class=" base-flex-start">
						<view  style="font-size: 24upx;" v-if="config.show_count">
							{{cdata[config.not_key]}} <text class="text_blue">{{cdata[config.number_key_key]}}</text> 人/员工总人数 <text class="text_blue">{{cdata[config.max_length_key]}}</text> 人
						</view>
					</view>
				</view>
				
			</view>
			
		</view>
		
		
	</view>
</template>

<script>
	export default{
		name:"yy_classify",
		props: {
			//组件配置
			set: {
				type: Object,
				default () {
					return {}
				}
			},
			//页面数据
			ydata: {
				type: Object,
				default () {
					return {}
				}
			},
			//组件数据
			cdata: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data(){
			return {
				init_status:false,    //初始化状态
				config:{
					
				},
				title_list:[
					
				]
			}
		},
		created() {
			this.init()
		},
		methods: {
			init() {
				this.init_config()
			},
			init_config(){
				Object.assign(this.config, this.set)
				Object.assign(this.set, this.config)
				this.config=this.set
				this.init_status=true
			},
			up_date(){
				console.log("开始更新",this.config.is_show_require_text)
				this.$forceUpdate()
			},
			input(e){
				if(this.config.is_show_require_text){
					this.config.is_show_require_text=false
					this.up_date()
				}
				if(this.config.key){
					this.input_value=this.ydata[this.config.key]=e.detail.value
				}
			}
		}
	}
</script>

<style lang="scss">
	.classify_title{
		padding: 18upx 32upx;
		background-color: #F6F6F6;
		color: #9D9EA0;
	}
	.yy_text{
		background-color: #FFFFFF;
		position: relative;
	}
	.text_blue{
		color: #0089FF;
		margin: 0 10upx;
	}
	.classify_icon{
		width: 108upx;
		padding: 37upx 0;
		height: 108upx;
		margin: 0 32upx 0;
		line-height: 148upx;
	}
	.classify_icon image{
		width: 100%;
		height: 100%;
	}
	
	.classify_flex{
		display: flex;
	}
	.base-flex{
		color: rgba(23, 26, 29, 0.40);
		padding-bottom: 24upx;
		flex-direction: column;
	}
	.base-title{
		color: #36373C;
	}
	
	.base-fiex-item{
		margin: 24upx 0;
	}
	.left-title{
		color: rgba(23, 26, 29, 0.40);
		font-size: 28upx;
	}
	.yy-text-input{
		flex: 1;
		margin-top: 8upx;
	}
	.placeholder-class{
		font-size: 34upx !important;
		color: #191F25 !important;
	}
</style>
```

模板

```vue
<template>
	<view>
		<yy_classify :set="config.card" :cdata="item" :ydata="{}" v-for="(item,index) in title_list" :key="index" ></yy_classify>
	</view>
</template>

<script>
	import {deep_merge} from "@/components/yysoft/js/unit.js"
	export default {
		name:"yp_classify",
		props: {
			//组件配置
			set: {
				type: Object,
				default () {
					return {}
				}
			},
			//页面数据
			ydata: {
				type: Object,
				default () {
					return {}
				}
			},
			//组件数据
			cdata: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data() {
			return {
				init_status:false,    //初始化状态
				config:{
					card: {
						title_key:"title",
						title2_key:'title2',
						not_key:"not",
						url_key:"url",
						max_length_key:'max_length',
						number_key_key:'number_key'
					},
				},
				title_list:[
					{
						title:'手工处理记录',
						title2:"内部人员", 
						not:'未录入',
						url:require('@/components/yysoft/static/images/common/Me_faceidpay.png'),
						max_length:20,
						number_key:0
					},
					{
						title:'卡片管理1',
						title2:"卡片管理1", 
						not:'未绑定',
						url:require('@/components/yysoft/static/images/common/Me_overview.png'),
						max_length:20,
						number_key:0
					},
				]
			}
		},
		created() {
			this.init()
		},
		methods: {
			init() {
				this.init_config()
			},
			init_config(){
				Object.assign(this.config, this.set)
				Object.assign(this.set, this.config)
				this.config=this.set
				this.init_status=true
			},
			up_date(){
				console.log("开始更新",this.config.is_show_require_text)
				this.$forceUpdate()
			},
			input(e){
				if(this.config.is_show_require_text){
					this.config.is_show_require_text=false
					this.up_date()
				}
				if(this.config.key){
					this.input_value=this.ydata[this.config.key]=e.detail.value
				}
			}
		}
	}
</script>

<style>

</style>

```

### 加法函数

```js
getprice(arr){
					var num = 0
					for(var i=0;i<arr.length;i++){
						num+= arr[i].price
					}
					return num
				},
```

如在vue使用直接 `{{getprice(item.goods_list)}}`（v-for="(item,index) in list" :key='index'）



### css实现星星

```css
.stars{
	width: 0;
	height: 0;
	border-top: 50px solid yellow;
	border-left: 86.6px solid transparent;
	border-right: 86.6px solid transparent;
	margin-top: 100px;
	position: relative;
}
.stars::before{
	content: "";
	display: block;
	width: 0;
	height: 0;
	border-top: 50px solid red;
	border-left: 86.6px solid transparent;
	border-right: 86.6px solid transparent;
	transform: rotate(75deg);
	position: absolute;
	top: -50px;
	left: -86.6px;
}

.stars::after{
	content: "";
	display: block;
	width: 0;
	height: 0;
	border-top: 50px solid green;
	border-left: 86.6px solid transparent;
	border-right: 86.6px solid transparent;
	transform: rotate(149deg);
	position: absolute;
	top: -50px;
	left: -86.6px;
}
```

### uni-app评分小星星效果

```vue
<template>
	<view class="star-phone" @click.stop="clickRating">
		<view  
			   v-for="(item, index) in config.starNum.default"
			  :key="index"
			  :class="isRating(index)"
			  :data-index="index">
		</view>
	</view>
</template>

<script>
	import {deep_merge} from "@/components/yysoft/js/unit.js"
	export default {
		name: "yp_score",
		props: {
			//组件配置
			set: {
				type: Object,
				default () {
					return {}
				}
			},
			//页面数据
			ydata: {
				type: Object,
				default () {
					return {}
				}
			},
			//组件数据
			cdata: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data() {
			return {
				rating: this.defaultRating, // 用于控制点亮星星的个数
				config:{
					starNum: {
					      // 星星的个数
					      type: Number,
					      default: 5,
					    },
					    defaultRating: {
					      // 默认点亮的个数
					      type: Number,
					      default: 5,
					    },
					    outIndex: {
					      // 外界传进来的一个标识
					      type: Number,
					      default: 0,
					    },
					    readOnly: {
					      // 是否是只读，默认不是，拥有点击功能
					      type: Boolean,
					      default: false,
					    },
				}
			}
		},
		methods: {
			isRating (index) {
			      ++index
			      return index <= this.rating ? 'star-item star-active' : 'star-item'
			    },
			    clickRating (ev) {
			      if (this.readOnly) {
			        return
			      }
			
			      let mark = parseInt(ev.target.dataset.index) + 1
			      this.rating = mark
			      this.$emit('starMarkChange', mark, this.outIndex)
			    },
			  }
	}
</script>

<style>
	 .star-phone {
	    position: relative;
	    display: inline-block;
	    line-height: 26px;
	    -webkit-tap-highlight-color:transparent;
	  }
	  .star-item {
	    display: inline-block;
	    width: 36px;
	    height: 26px;
	    background-image: url('@/components/yysoft/static/images/common/star.png'); /* 换成图片真实路劲，图片在下面给出 */
	    background-clip: content-box;
	    background-position: center 0;
	    background-repeat: repeat-y;
	    cursor: pointer;
	    vertical-align: bottom;
	    white-space: nowrap;
	  }
	  
	  .star-item:last-child {
	    padding-right: 0;
	  }
	  .star-active {
	    background-position: center 26px;
	  }
</style>

```

