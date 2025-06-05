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

### 水印相机

```vue
<template>
  <view class="container">
    <form @submit="submitForm">
      <!-- 表单基本信息 -->
      <view class="form-group">
        <view class="form-item">
          <text class="label">姓名：</text>
          <input type="text" v-model="formData.name" placeholder="请输入姓名" />
        </view>

        <view class="form-item">
          <text class="label">车牌号：</text>
          <input type="text" v-model="formData.plateNumber" placeholder="请输入车牌号" @input="updateWatermark" />
        </view>

        <view class="form-item">
          <text class="label">日期：</text>
          <picker mode="date" :value="formData.date" @change="bindDateChange">
            <view class="picker">
              {{ formData.date || '请选择日期' }}
            </view>
          </picker>
        </view>
      </view>

      <!-- 照片上传区域 -->
      <view class="form-item photo-section">
        <text class="label">出境照片：</text>
        <view class="photo-container">
          <view v-if="formData.photo" class="preview-wrapper">
            <image :src="formData.photo" mode="aspectFill" class="preview-image" @click="previewPhoto">
            </image>
            <view class="delete-btn" @click="removePhoto">×</view>
          </view>
          <view v-else class="upload-placeholder" @click="openPhotoActionSheet">
            <text class="upload-text">拍照或上传</text>
            <text class="upload-desc">照片将自动添加水印</text>
          </view>
        </view>
      </view>

      <!-- 提交按钮 -->
      <button form-type="submit" type="primary" class="submit-btn"
        :disabled="!formData.photo || !formData.name || !formData.plateNumber || !formData.date">
        提交表单
      </button>
    </form>

    <!-- 相机组件（带水印层） -->
    <view class="camera-container" v-if="showCamera">
      <camera :device-position="cameraPosition" flash="off" @error="handleCameraError" class="camera"
        :style="{ width: '100%', height: '100%' }">
        <!-- 实时水印层 -->
        <cover-view class="watermark-overlay">
          <cover-view class="watermark-content">
            <cover-view class="watermark-line">车牌号：{{ formData.plateNumber || '未输入' }}</cover-view>
            <cover-view class="watermark-line">位置：{{ formData.address || '获取中...' }}</cover-view>
            <cover-view class="watermark-line">日期：{{ formData.date || '未选择' }}</cover-view>
          </cover-view>
        </cover-view>

        <!-- 相机控制按钮 -->
        <cover-view class="camera-actions">
          <cover-view class="action-btn cancel-btn" @click="closeCamera">
            <cover-image src="/static/icons/close.png" class="btn-icon"></cover-image>
          </cover-view>
          <cover-view class="action-btn take-photo" @click="capturePhoto">
            <cover-view class="take-photo-dot"></cover-view>
          </cover-view>
          <cover-view class="action-btn switch-btn" @click="switchCamera">
            <cover-image src="/static/icons/switch.png" class="btn-icon"></cover-image>
          </cover-view>
        </cover-view>
      </camera>
    </view>

    <!-- 水印处理Canvas -->
    <canvas canvas-id="watermarkCanvas" class="watermark-canvas" :style="'width:'+canvasW+'px;height:'+(canvasH)+'px'"></canvas>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          plateNumber: '',
          date: '',
          photo: '',
          location: '',
          address: '获取位置中...'
        },
        showCamera: false,
        cameraPosition: 'back',
        canvasW : 900,
        canvasH : 1080,
        watermarkConfig: {
          opacity: 0.7, // 水印透明度
          dashLineSize: 1.5, // 虚线边框粗细
          dashPadding: 8, // 边框内边距
          marginLeft: 6, // 左侧边距
          paddingTop: 10, // 顶部边距
          showTime: 100, // 水印显示周期
          baseOpacity: 0.7 // 基础透明度
        },
        isLocationReady: false // 位置信息是否获取完成
      }
    },
    onLoad() {
      // 初始化日期
      this.formData.date = this.getFormattedDate();
      // 初始化位置信息
      this.fetchLocationInfo();
    },
    methods: {
      // 获取格式化日期 YYYY-MM-DD
      getFormattedDate() {
        const date = new Date();
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
      },

      // 日期选择变化
      bindDateChange(e) {
        this.formData.date = e.detail.value;
        this.updateWatermark();
      },

      // 打开照片操作菜单
      openPhotoActionSheet() {
        uni.showActionSheet({
          itemList: ['拍照', '从相册选择'],
          success: (res) => {
            if (res.tapIndex === 0) this.openCamera();
            else this.chooseImageFromAlbum();
          }
        });
      },

      // 打开相机
      openCamera() {
        if (!this.formData.plateNumber) {
          uni.showToast({
            title: '请先输入车牌号',
            icon: 'none'
          });
          return;
        }
        this.showCamera = true;
      },

      // 拍照
      capturePhoto() {
        const cameraContext = uni.createCameraContext();
        cameraContext.takePhoto({
          quality: 'high',
          success: (res) => {
            this.closeCamera();
            this.processImage(res.tempImagePath);
          },
          fail: (err) => {
            this.closeCamera();
            uni.showToast({
              title: '拍照失败',
              icon: 'none'
            });
            console.error('拍照失败', err);
          }
        });
      },

      // 从相册选择图片
      chooseImageFromAlbum() {
        uni.chooseImage({
          count: 1,
          sourceType: ['album'],
          success: (res) => {
            this.processImage(res.tempFilePaths[0]);
          },
          fail: (err) => {
            uni.showToast({
              title: '图片选择失败',
              icon: 'none'
            });
            console.error('图片选择失败', err);
          }
        });
      },

      // 处理图片（添加水印）
      processImage(imagePath) {
        uni.showLoading({
          title: '处理图片...'
        });
        uni.getImageInfo({
          src: imagePath,
          success: (imageInfo) => {
            this.applyWatermark(imageInfo,imagePath, (watermarkedPath) => {
              this.formData.photo = watermarkedPath;
              uni.hideLoading();
            });
          },
          fail: (err) => {
            uni.hideLoading();
            uni.showToast({
              title: '图片处理失败',
              icon: 'none'
            });
            console.error('图片信息获取失败', err);
          }
        });
      },

      // 应用水印
      applyWatermark(imageInfo, imagePath, callback) {
        const { width, height } = imageInfo;
        const ctx = uni.createCanvasContext('watermarkCanvas');
        const startTime = new Date().getTime();
        this.canvasW = width;
        this.canvasH = height;

        // 设置Canvas尺寸
        const canvasWidth = width;
        const canvasHeight = height;

        // 绘制原图
        ctx.drawImage(imagePath, 0, 0, canvasWidth, canvasHeight);

        // 解构配置变量
        const {
          opacity,
          dashLineSize,
          dashPadding,
          marginLeft,
          paddingTop,
          showTime,
          baseOpacity
        } = this.watermarkConfig;

        // 绘制背景阴影
        // this.drawRoundRect(
        //   ctx,
        //   marginLeft + dashPadding,
        //   dashPadding + dashLineSize,
        //   canvasWidth - marginLeft - dashPadding * 2 - dashLineSize,
        //   height - dashPadding * 2 - dashLineSize,
        //   6,
        //   `rgba(135,135,135,${opacity * baseOpacity})`
        // );

        // 准备水印文本
        const {
          year,
          month,
          day,
          hour,
          min,
          weekDay
        } = this.getDateInfo();
        const watermarkTexts = [
          `车牌号：${this.formData.plateNumber || '未输入'}`,
          `位置：${this.formData.address || '未知位置'}`,
          `${year}-${month}-${day} ${hour}:${min} ${weekDay}`
        ];

        // 计算字体大小（自适应图片尺寸）
        const fontSize = Math.max(canvasWidth * 0.035, 28); // 最小28rpx
        ctx.setFontSize(fontSize);
        ctx.setTextAlign('left');
        ctx.setTextBaseline('top');

        // 水印位置（左下角）
        const textX = marginLeft + dashPadding + 10;
        const textY = canvasHeight - (fontSize * 1.6 * watermarkTexts.length + paddingTop);

        // 绘制水印背景（半透明黑色）
        // const textWidth = this.calculateTextWidth(watermarkTexts[0], fontSize);
        // const textHeight = fontSize * 1.6 * watermarkTexts.length;
        // ctx.setFillStyle('rgba(0, 0, 0, 0.4)');
        // ctx.fillRect(
        //   textX - 15,
        //   textY - 15,
        //   textWidth + 30,
        //   textHeight + 30
        // );

        // 绘制水印文字（白色+阴影）
        ctx.setFillStyle('#ffffff');
        ctx.setShadow(2, 2, 4, 'rgba(0, 0, 0, 0.5)');

        watermarkTexts.forEach((text, index) => {
          const yPos = textY + index * fontSize * 1.6;
          ctx.fillText(text, textX, yPos);
        });

        // 绘制虚线边框
        // ctx.setStrokeStyle('#ffffff');
        // ctx.setLineDash([5, 5], 10);
        // ctx.setLineWidth(dashLineSize);
        // ctx.strokeRect(marginLeft, dashLineSize, canvasWidth - marginLeft - 2, height - dashLineSize * 2);

        // 绘制完成后导出图片
        ctx.draw(false, () => {
          setTimeout(() => {
            uni.canvasToTempFilePath({
              canvasId: 'watermarkCanvas',
              width: canvasWidth,
              height: canvasHeight,
              destWidth: canvasWidth * 2, // 提高清晰度
              destHeight: canvasHeight * 2, // 提高清晰度
              success: (res) => {
                // 保存到相册
                this.saveImageToAlbum(res.tempFilePath);
                callback(res.tempFilePath);
              },
              fail: (err) => {
                uni.hideLoading();
                uni.showToast({
                  title: '水印添加失败',
                  icon: 'none'
                });
                console.error('Canvas转图片失败', err);
              }
            });
          }, 100); // 添加延时确保绘制完成

          // 打印绘制耗时
          console.log("绘制耗费时间：", new Date().getTime() - startTime);
        });
      },

      // 绘制圆角矩形
      drawRoundRect(ctx, x, y, width, height, radius, color) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.arcTo(x + width, y, x + width, y + radius, radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
        ctx.lineTo(x + radius, y + height);
        ctx.arcTo(x, y + height, x, y + height - radius, radius);
        ctx.lineTo(x, y + radius);
        ctx.arcTo(x, y, x + radius, y, radius);
        ctx.closePath();
        ctx.setFillStyle(color);
        ctx.fill();
      },

      // 计算文本宽度
      calculateTextWidth(text, fontSize) {
        const tempCtx = uni.createCanvasContext('tempCanvas');
        tempCtx.setFontSize(fontSize);
        return tempCtx.measureText(text).width;
      },

      // 保存图片到相册
      saveImageToAlbum(filePath) {
        uni.saveImageToPhotosAlbum({
          filePath,
          success: () => {
            // uni.showToast({ title: '已保存到相册', icon: 'success' });
          },
          fail: (err) => {
            if (err.errMsg.indexOf('auth deny') >= 0) {
              uni.showModal({
                title: '提示',
                content: '需要授权保存图片到相册',
                success: (res) => {
                  if (res.confirm) uni.openSetting();
                }
              });
            }
          }
        });
      },

      // 获取详细日期信息
      getDateInfo() {
        const date = new Date();
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hour = date.getHours().toString().padStart(2, '0');
        const min = date.getMinutes().toString().padStart(2, '0');
        const weekDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
        const weekDay = weekDays[date.getDay()];
        return {
          year,
          month,
          day,
          hour,
          min,
          weekDay
        };
      },

      // 获取位置信息
      fetchLocationInfo() {
        uni.getLocation({
          type: 'gcj02',
          success: async (res) => {
            this.formData.location = `${res.latitude},${res.longitude}`;
            try {
              const address = await this.fetchAddress(res.latitude, res.longitude);
              this.formData.address = address;
              this.isLocationReady = true;
            } catch (error) {
              this.formData.address = '位置获取失败';
            }
          },
          fail: () => {
            this.formData.address = '位置获取失败';
          }
        });
      },

      // 获取地址信息（需替换为实际地图API密钥）
      fetchAddress(latitude, longitude) {
        return new Promise((resolve) => {
          uni.request({
            url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=YOUR_MAP_KEY`,
            dataType: 'jsonp',
            success: (res) => {
              if (res.data.status === 0) {
                resolve(res.data.result.address || '未知位置');
              } else {
                resolve('地址解析失败');
              }
            },
            fail: () => {
              resolve('网络请求失败');
            }
          });
        });
      },

      // 切换相机前后置
      switchCamera() {
        this.cameraPosition = this.cameraPosition === 'back' ? 'front' : 'back';
      },

      // 关闭相机
      closeCamera() {
        this.showCamera = false;
      },

      // 处理相机错误
      handleCameraError(e) {
        uni.showToast({
          title: '相机启动失败',
          icon: 'none'
        });
        this.closeCamera();
        console.error('相机错误', e);
      },

      // 更新水印内容
      updateWatermark() {
        if (this.formData.photo) {
          this.processImage(this.formData.photo);
        }
      },

      // 预览照片
      previewPhoto() {
        uni.previewImage({
          current: this.formData.photo,
          urls: [this.formData.photo]
        });
      },

      // 移除照片
      removePhoto() {
        uni.showModal({
          title: '确认移除',
          content: '确定要移除这张照片吗？',
          success: (res) => {
            if (res.confirm) {
              this.formData.photo = '';
            }
          }
        });
      },

      // 提交表单
      submitForm() {
        if (!this.formData.photo || !this.formData.name || !this.formData.plateNumber || !this.formData.date) {
          uni.showToast({
            title: '请填写完整信息',
            icon: 'none'
          });
          return;
        }
        // 这里添加表单提交逻辑
        console.log('提交的表单数据：', this.formData);
        uni.showToast({
          title: '提交成功',
          icon: 'success'
        });
      }
    },
  }
</script>

<style>
  .container {
    padding: 30rpx;
    background-color: #f8f8f8;
  }

  .form-group {
    background-color: #fff;
    border-radius: 16rpx;
    padding: 30rpx;
    margin-bottom: 30rpx;
    box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.05);
  }

  .form-item {
    margin-bottom: 30rpx;
  }

  .label {
    display: block;
    margin-bottom: 16rpx;
    font-size: 28rpx;
    color: #333;
    font-weight: 500;
  }

  input {
    width: 100%;
    height: 88rpx;
    border: 1rpx solid #e5e5e5;
    border-radius: 8rpx;
    padding: 0 30rpx;
    box-sizing: border-box;
    font-size: 28rpx;
    background-color: #f9f9f9;
  }

  .picker {
    width: 100%;
    height: 88rpx;
    border: 1rpx solid #e5e5e5;
    border-radius: 8rpx;
    padding: 0 30rpx;
    box-sizing: border-box;
    line-height: 88rpx;
    background-color: #f9f9f9;
    font-size: 28rpx;
  }

  .photo-section {
    background-color: #fff;
    border-radius: 16rpx;
    padding: 30rpx;
    margin-bottom: 30rpx;
    box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.05);
  }

  .photo-container {
    position: relative;
  }

  .preview-wrapper {
    width: 100%;
    height: 1280rpx;
    border-radius: 12rpx;
    overflow: hidden;
    margin-bottom: 20rpx;
    background-color: #f5f5f5;
  }

  .preview-image {
    width: 100%;
    height: 100%;
  }

  .delete-btn {
    position: absolute;
    top: -20rpx;
    right: -20rpx;
    width: 60rpx;
    height: 60rpx;
    background-color: #ff4d4f;
    color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36rpx;
    z-index: 10;
  }

  .upload-placeholder {
    width: 100%;
    height: 500rpx;
    border: 2rpx dashed #ddd;
    border-radius: 12rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
  }

  .upload-text {
    font-size: 32rpx;
    color: #999;
    margin-bottom: 10rpx;
  }

  .upload-desc {
    font-size: 24rpx;
    color: #ccc;
  }

  /* 相机组件样式 */
  .camera-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #000;
    z-index: 999;
  }

  .camera {
    width: 100%;
    height: 100%;
  }

  .watermark-overlay {
    position: absolute;
    left: 30rpx;
    bottom: 200rpx;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 20rpx;
    border-radius: 10rpx;
  }

  .watermark-content {
    display: flex;
    flex-direction: column;
  }

  .watermark-line {
    color: #fff;
    font-size: 32rpx;
    margin-bottom: 10rpx;
    text-shadow: 0 0 4rpx rgba(0, 0, 0, 0.5);
  }

  .camera-actions {
    position: absolute;
    bottom: 80rpx;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 0 60rpx;
    box-sizing: border-box;
  }

  .action-btn {
    width: 100rpx;
    height: 100rpx;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-icon {
    width: 50rpx;
    height: 50rpx;
  }

  .take-photo {
    width: 160rpx;
    height: 160rpx;
    background-color: rgba(255, 255, 255, 0.3);
    border: 4rpx solid #fff;
  }

  .take-photo-dot {
    width: 140rpx;
    height: 140rpx;
    background-color: #fff;
    border-radius: 50%;
  }

  .cancel-btn,
  .switch-btn {
    background-color: rgba(0, 0, 0, 0.3);
  }

  /* Canvas样式（隐藏） */
  .watermark-canvas {
    position: fixed;
    left: -9999rpx;
    top: -9999rpx;
  }

  .submit-btn {
    margin-top: 40rpx;
    width: 100%;
    height: 90rpx;
    line-height: 90rpx;
    font-size: 32rpx;
  }
</style>
```

