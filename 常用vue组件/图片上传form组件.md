### 组件
```vue

<template>
  <div class="component-upload-image">
    <el-upload
      multiple
      :action="uploadImgUrl"
      list-type="picture-card"
      :on-success="handleUploadSuccess"
      :before-upload="handleBeforeUpload"
      :limit="limit"
      :on-error="handleUploadError"
      :on-exceed="handleExceed"
      ref="imageUpload"
      :on-remove="handleDelete"
      :on-change="handleOnChange"
      :show-file-list="true"
      :auto-upload="false"
      :headers="headers"
      accept="image/*,video/*"
      :file-list="fileList"
      :on-preview="handlePictureCardPreview"
      :class="{ hide: this.fileList.length >= this.limit }"
    >
      <i class="el-icon-plus"></i>
    </el-upload>

    <!-- 上传提示 -->
    <div class="el-upload__tip" slot="tip" v-if="showTip">
      请上传
      <template v-if="fileSize">
        大小不超过 <b style="color: #f56c6c">{{ fileSize }}MB</b>
      </template>
      <template v-if="fileType">
        格式为 <b style="color: #f56c6c">{{ fileType.join("/") }}</b>
      </template>
      的文件
    </div>

    <el-dialog
      :visible.sync="dialogVisible"
      title="预览"
      width="800"
      append-to-body
    >
      <img
        :src="dialogImageUrl"
        style="display: block; max-width: 100%; margin: 0 auto"
      />
    </el-dialog>
  </div>
</template>

<script>
import { getToken } from "@/utils/auth";

export default {
  props: {
    value: [String, Object, Array],
    // 图片数量限制
    limit: {
      type: Number,
      default: 1,
    },
    // 大小限制(MB)
    fileSize: {
      type: Number,
      default: 5,
    },
    // 文件类型, 例如['png', 'jpg', 'jpeg']
    fileType: {
      type: Array,
      default: () => ["png", "jpg", "jpeg"],
    },
    // 是否显示提示
    isShowTip: {
      type: Boolean,
      default: true,
    },
    formData: {
      type: String,
      default: "",
    },
    data: {
      typeof: Object,
      default: {},
    },
  },
  data() {
    return {
      number: 0,
      uploadList: [],
      dialogImageUrl: "",
      dialogVisible: false,
      addForm: { sliderImage: "" },
      hideUpload: false,
      baseUrl: process.env.VUE_APP_BASE_API,
      uploadImgUrl: process.env.VUE_APP_BASE_API + "/common/upload", // 上传的图片服务器地址
      headers: {
        Authorization: "Bearer " + getToken(),
      },
      fileList: [],
    };
  },
  watch: {
    value: {
      handler(val) {
        if (val) {
          // 首先将值转为数组
          const list = Array.isArray(val) ? val : this.value.split(",");
          // 然后将数组转为对象数组
          this.fileList = list((item) => {
            if (typeof item === "string") {
              if (item.indexOf(this.baseUrl) === -1) {
                item = { name: this.baseUrl + item, url: this.baseUrl + item };
              } else {
                item = { name: item, url: item };
              }
            }
            return item;
          });
        } else {
          this.fileList = [];
          return [];
        }
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    // 是否显示提示
    showTip() {
      return this.isShowTip && (this.fileType || this.fileSize);
    },
  },
  methods: {
    // 上传前loading加载
    handleBeforeUpload(file) {
      let isImg = false;
      if (this.fileType.length) {
        let fileExtension = "";
        if (file.name.lastIndexOf(".") > -1) {
          fileExtension = file.name.slice(file.name.lastIndexOf(".") + 1);
        }
        isImg = this.fileType.some((type) => {
          if (file.type.indexOf(type) > -1) return true;
          if (fileExtension && fileExtension.indexOf(type) > -1) return true;
          return false;
        });
      } else {
        isImg = file.type.indexOf("image") > -1;
      }

      if (!isImg) {
        this.$modal.msgError(
          `文件格式不正确, 请上传${this.fileType.join("/")}图片格式文件!`
        );
        return false;
      }
      if (this.fileSize) {
        const isLt = file.size / 1024 / 1024 < this.fileSize;
        if (!isLt) {
          this.$modal.msgError(`上传头像图片大小不能超过 ${this.fileSize} MB!`);
          return false;
        }
      }
      this.$modal.loading("正在上传图片，请稍候...");
      this.number++;
    },
    // 文件个数超出
    handleExceed() {
      this.$modal.msgError(`上传文件数量不能超过 ${this.limit} 个!`);
    },
    // 上传成功回调
    handleUploadSuccess(res, file) {
      if (res.code === 200) {
        this.uploadList.push({ name: res.fileName, url: res.fileName });
        this.uploadedSuccessfully();
      } else {
        this.number--;
        this.$modal.closeLoading();
        this.$modal.msgError(res.msg);
        this.$refs.imageUpload.handleRemove(file);
        this.uploadedSuccessfully();
      }
    },
    // 删除图片
    handleDelete(file) {
      const findex = this.fileList.map((f) => f.name).indexOf(file.name);
      if (findex > -1) {
        this.fileList.splice(findex, 1);
        this.$emit("input", this.listToString(this.fileList));
      }
    },
    handleOnChange(file, fileList) {
      this.data[this.formData] = file.raw;
      // this.addForm.sliderImage = URL.createObjectURL(file.raw);
      // var files = this.sliderImages;
      // files.push(this.addForm.sliderImage);
    },
    // 上传失败
    handleUploadError() {
      this.$modal.msgError("上传图片失败，请重试");
      this.$modal.closeLoading();
    },
    // 上传结束处理
    uploadedSuccessfully() {
      if (this.number > 0 && this.uploadList.length === this.number) {
        this.fileList = this.fileList.concat(this.uploadList);
        this.uploadList = [];
        this.number = 0;
        this.$emit("input", this.listToString(this.fileList));
        this.$modal.closeLoading();
      }
    },
    // 预览
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 对象转成指定字符串分隔
    listToString(list, separator) {
      let strs = "";
      separator = separator || ",";
      for (let i in list) {
        if (list[i].url) {
          strs += list[i].url.replace(this.baseUrl, "") + separator;
        }
      }
      return strs != "" ? strs.substr(0, strs.length - 1) : "";
    },
  },
};
</script>
<style scoped lang="scss">
// .el-upload--picture-card 控制加号部分
::v-deep.hide .el-upload--picture-card {
  display: none;
}

// 去掉动画效果
::v-deep .el-list-enter-active,
::v-deep .el-list-leave-active {
  transition: all 0s;
}

::v-deep .el-list-enter,
.el-list-leave-active {
  opacity: 0;
  transform: translateY(0);
}
</style>
```

### 使用
```vue

<template>
  <div class="addBuyer">
    <el-form :model="form" ref="form" :rules="rules" label-width="140px" :inline="false" size="normal"
      label-position="top">
      <el-form-item label="买方证件类型" prop="gmfzjlx">
        <el-radio-group v-model="form.gmfzjlx">
          <el-radio-button label="sfz">身份证</el-radio-button>
          <el-radio-button label="yyzz">营业执照</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="买方证件照片" prop="gmfzp">
        <ImageUploadForm ref="gmfzpUpload" :data="form" :formData="'gmfzp'" />
      </el-form-item>

      <el-form-item label="卖方证件类型" prop="xsfzjlx">
        <el-radio-group v-model="form.xsfzjlx">
          <el-radio-button label="sfz">身份证</el-radio-button>
          <el-radio-button label="yyzz">营业执照</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="卖方证件照片" prop="xsfzp">
        <ImageUploadForm ref="xsfzpUpload" :data="form" :formData="'xsfzp'" />
      </el-form-item>

      <el-form-item label="行驶证照片" prop="xsz">
        <ImageUploadForm ref="xszzpUpload" :data="form" :formData="'xsz'" />
      </el-form-item>

      <el-form-item label="登记证号" prop="djzh" class="picture" v-if="!dialogUsedcar">
        <el-input v-model="form.djzh" placeholder="请输入或扫描拍照" style="width: 80%;"></el-input>
        <div class="flex l-center a-left">
          <div class="qr-item mr5 ml5">
            <img src="#" width="10" height="10" alt="">
            <i class="el-icon-camera" style="font-size: 24px;"><span style="font-size: 14px;">拍照</span></i>
            <input v-if="isUploadBarCode" class="qr-item-input" @change="toQR" type="file" accept="image/*"
              capture="camera">
          </div>
        </div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">确认</el-button>
        <!-- <el-button >取消</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import ImageUploadForm from "@/components/ImageUploadForm";
import { getToken } from "@/utils/auth";
import { uploadUsedCar } from "@/api/system/car";
import Quagga from 'quagga'

export default {
  name: "addUsedcar",
  props: {
    dialogUsedcar: {
      type: Boolean,
      default: false
    },
    userId: {
      type: String,
      default: ''
    },
    companyId: {
      type: String,
      default: ''
    },
  },
  data() {
    var validateAtLeastOneRequired = (rule, value, callback) => {
      const field = "买方证件、卖方证件、行驶证照片";
      if (
        this.form.gmfzp ||
        this.form.xsfzp ||
        this.form.xsz
      ) {
        callback();
      } else {
        callback(new Error(`${field}至少上传一个`));
      }
    };
    return {
      form: {
        gmfzjlx: "sfz",
        xsfzjlx: "sfz",
        djzh: ''
      },
      addForm: {},
      sliderImages: [],
      isUploadBarCode: true, // 控制销毁
      viewDataUpload: {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + getToken(),
        },
      },
      rules: {
        gmfzjlx: [
          {
            required: true,
            message: "买方证件类型不能为空",
            trigger: "blur",
          },
        ],
        gmfzp: [
          { validator: validateAtLeastOneRequired, trigger: 'blur' }
        ],
        xsfzjlx: [
          {
            required: true,
            message: "卖方证件类型不能为空",
            trigger: "blur",
          },
        ],
        xsfzp: [
          { validator: validateAtLeastOneRequired, trigger: 'blur' }
        ],
        xsz: [
          { validator: validateAtLeastOneRequired, trigger: 'blur' }
        ],
      },
    };
  },
  computed: {},
  watch: {},
  created() { },
  mounted() {
    console.log(this.$refs.gmfzpUpload);
  },
  methods: {
    viewHandleExceed(files, fileList) {
      this.$message.error("只能长传一个文件!");
    },
    viewHandleRemove(file, fileList) {
      this.$message.error("删除成功!");
    },
    // 图片上传失败时
    viewUploadError() {
      this.$message.error("图片上传失败!");
    },
    //上传之前
    viewHandleBeforeUpload(file) { },
    changeFile(file, fileList) {
      this.form.xsz = fileList[0].raw;
    },
    handleOnChange(file, fileList) {
      console.log(file, "***file");
      this.addForm.sliderImage = URL.createObjectURL(file.raw);
      var files = this.sliderImages;
      files.push(this.addForm.sliderImage);
      console.log(files, "***----files");
    },
    beforeupload(file) {
      return true;
    },
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$modal.loading("正在上传中，请稍候...");
          let forms = new FormData();
          //该数据类型默认参数Content-Type:multipart/form-data

          if (this.form.gmfzp) {
            forms.append("gmfzp", this.form.gmfzp);
          }
          if (this.form.xsfzp) {
            forms.append("xsfzp", this.form.xsfzp);
          }
          if (this.form.xsz) {
            forms.append("xsz", this.form.xsz);
          }
          forms.append("gmfzjlx", this.form.gmfzjlx);
          forms.append("xsfzjlx", this.form.xsfzjlx);
          if (this.dialogUsedcar) {
            forms.append("userId", this.userId);
            forms.append("companyId", this.companyId);
          } else {
            forms.append("userId", this.$route.query.userId);
            forms.append("companyId", this.$route.query.companyId);
            forms.append("djzh", this.form.djzh);
          }
          if (this.$route.query.serialNum) {
            forms.append("serialNum", this.$route.query.serialNum);
          }
          console.log(forms.getAll("gmfzp"));
          uploadUsedCar(forms).then((result) => {
            console.log(result);
            this.$modal.closeLoading();
            // this.$modal.msgSuccess("上传成功");
            if (this.dialogUsedcar) {
              this.$modal.msgSuccess("上传成功");
              this.$refs.gmfzpUpload.$children[0].clearFiles();
              this.$refs.xsfzpUpload.$children[0].clearFiles();
              this.$refs.xszzpUpload.$children[0].clearFiles();
              // this.$refs.imageUpload.clearFiles();
              this.$emit('cancelPCInBackfill')
            } else {
              this.$alert('上传成功', '消息', {
                confirmButtonText: '确认',
                center: true,
                type: 'success',
                callback: action => {
                  location.reload();
                }
              });
            }
          }).catch((err) => {
            this.$modal.closeLoading();
          });
          // forms.append("type", this.form.type);
          // forms.append("viewName", this.form.viewName);
          // forms.append("viewVal", this.form.viewVal);
          console.log(forms.getAll("gmfzp"));
          console.log(forms.getAll("xsz"));
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
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
          that.form.djzh = result.codeResult.code
          // 执行 页面请求刷新
        } else {
          that.form.djzh = ''
          // console.warn('识别失败，请手动输入')
          this.$message.error("识别失败，请重新拍照或手动输入！");
        }
        this.isUploadBarCode = true
      })
    },
  },
  components: { ImageUploadForm },
};
</script>

<style lang="scss" scoped>
.addBuyer {
  padding: 16px 16px 16px 40px;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

// --
.picture :deep(.el-form-item__content) {
  display: flex;
}

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

