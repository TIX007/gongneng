<template>
  <div class="upload-file">
    <el-upload
      multiple
      :action="uploadFileUrl"
      :before-upload="handleBeforeUpload"
      :file-list="fileList"
      :limit="limit"
      :on-preview="handlePreview"
      :on-error="handleUploadError"
      :on-exceed="handleExceed"
      :on-success="handleUploadSuccess"
      :show-file-list="true"
      :headers="headers"
      :on-remove="handleRemove"
      class="upload-file-uploader"
      ref="upload"
    >
      <!-- 上传按钮 -->
      <el-button size="mini" type="primary">选取文件</el-button>
      <!-- 上传提示 -->
      <div class="el-upload__tip" slot="tip" v-if="showTip">
        请上传
        <template v-if="fileSize"> 大小不超过 <b style="color: #f56c6c">{{ fileSize }}MB</b> </template>
        <template v-if="fileType"> 格式为 <b style="color: #f56c6c">{{ fileType.join("/") }}</b> </template>
        的文件
      </div>
    </el-upload>

    <!-- 文件列表 -->
    
  </div>
</template>

<script>
import { getToken } from "@/utils/auth";
import { deleteFile,queryDocInfoByBizId } from "@/api/rtems/basic/sysdoc";

export default {
  name: "FileUpload",
  props: {
    // 值
    value: [String, Object, Array],
    // 数量限制
    limit: {
      type: Number,
      default: 5,
    },
    // 大小限制(MB)
    fileSize: {
      type: Number,
      default:100,
    },
    // 文件类型, 影像格式总计例如[jpg,png,mp3,avi,zip,rar,pdf,word,excel,txt 等]
    fileType: {
      type: Array,
      default: () => ["jpg", "png", "zip", "rar", "pdf","word","xls","xlsx","txt","ppt","pptx"],
    },
    //父级ID
    parentId:{
      type:String,
      default:undefined
    },
    // 是否显示提示
    isShowTip: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      number: 0,
      uploadList: [],
      uploadFileUrl: process.env.VUE_APP_BASE_FILE + "/RTS0215101", // 上传的图片服务器地址
      headers: {
        Authorization: "Bearer " + getToken(),
      },
      fileList: [],
    };
  },
  watch: {
    value: {
      async handler(val) {
        if (val) {
          let temp = 1;
          // 首先将值转为数组
          let list;
          if (Array.isArray(val)) {
            list = val;
          } else {
            await listByIds(val).then(res => {
              list = res.data.map(oss => {
                oss = { name: oss.originalName, url: oss.url, ossId: oss.ossId };
                return oss;
              });
            })
          }
          // 然后将数组转为对象数组
          this.fileList = list.map(item => {
            item = { name: item.name, url: item.url, ossId: item.ossId };
            item.uid = item.uid || new Date().getTime() + temp++;
            return item;
          });
        } else {
          this.fileList = [];
          return [];
        }
      },
      deep: true,
      immediate: true
    },
    parentId(newVal,oldVal){
      // console.log("11111111111111111111 newVal", newVal);
      this.queryFile()
    }
  },
  computed: {
    // 是否显示提示
    showTip() {
      return this.isShowTip && (this.fileType || this.fileSize);
    },
  },
  created(){
    // console.log("222222222222222222222222222"+this.parentId);
    if(this.parentId){
      this.queryFile()
    }
   
  },
  mounted(){
    
  },
  methods: {
    queryFile(){
      this.fileList = [];
      queryDocInfoByBizId(this.parentId).then(res => {
        console.log(res);
        if(res.length > 0){
          for(let i = 0;i < res.length; i++){
            this.fileList.push({ name: res[i].fileName, url: res[i].imageUrl, ossId: res[i].id });
          }
        }
      });
    },
    // 上传前校检格式和大小
    handleBeforeUpload(file) {
      // 校检文件类型
      if (this.fileType) {
        let fileExtension = "";
        if (file.name.lastIndexOf(".") > -1) {
          fileExtension = file.name.slice(file.name.lastIndexOf(".") + 1);
        }
        const isTypeOk = this.fileType.some((type) => {
          if (file.type.indexOf(type) > -1) return true;
          if (fileExtension && fileExtension.indexOf(type) > -1) return true;
          return false;
        });
        if (!isTypeOk) {
          this.$modal.msgError(`文件格式不正确, 请上传${this.fileType.join("/")}格式文件!`);
          return false;
        }
      }
      // 校检文件大小
      if (this.fileSize) {
        const isLt = file.size / 1024 / 1024 < this.fileSize;
        if (!isLt) {
          this.$modal.msgError(`上传文件大小不能超过 ${this.fileSize} MB!`);
          return false;
        }
      }
      this.$modal.loading("正在上传文件，请稍候...");
      this.number++;
      return true;
    },
    // 文件个数超出
    handleExceed() {
      this.$modal.msgError(`上传文件数量不能超过 ${this.limit} 个!`);
    },
    // 上传失败
    handleUploadError(err) {
      this.$modal.msgError("上传文件失败，请重试");
      this.$modal.closeLoading()
    },
    // 上传成功回调
    handleUploadSuccess(res) {
      if (res.code === 200) {
        this.uploadList.push({ name: res.data.fileName, url: res.data.imageUrl, ossId: res.data.id });
        if (this.uploadList.length === this.number) {
          this.fileList = this.fileList.concat(this.uploadList);
          this.uploadList = [];
          this.number = 0;
          this.$emit("input", this.listToString(this.fileList));
          this.$modal.closeLoading();
        }
      } else {
        this.$modal.msgError(res.msg);
        this.$modal.closeLoading();
      }
    },
    // 删除文件
    handleRemove(file, fileList) {
      let t = this.uploadList;
      deleteFile(file.ossId).then(res => {
        //console.log(res);
        console.log(file, fileList);
        this.$modal.msgSuccess(res.msg);
        this.fileList = fileList;
        // this.fileList.splice(this.fileList.indexOf(file),1)
      });
    },
    // 点击文件
    handlePreview(file) {
      const link = document.createElement("a");
      // console.log(file,'下载按钮操作');
      link.href = file.url;
      link.download = file.name;
      link.click();
    },
    // 获取文件名称
    getFileName(name) {
      if (name.lastIndexOf("/") > -1) {
        return name.slice(name.lastIndexOf("/") + 1);
      } else {
        return name;
      }
    },
    // 对象转成指定字符串分隔
    listToString(list, separator) {
      let strs = "";
      separator = separator || ",";
      for (let i in list) {
        strs += list[i].ossId + separator;
      }
      return strs != "" ? strs.substr(0, strs.length - 1) : "";
    },
    deleFile(){
      this.fileList = []
    }
  }
};
</script>

<style scoped lang="scss">
.upload-file-uploader {
  margin-bottom: 5px;
}
.upload-file-list .el-upload-list__item {
  border: 1px solid #e4e7ed;
  line-height: 2;
  margin-bottom: 10px;
  position: relative;
}
.upload-file-list .ele-upload-list__item-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: inherit;
}
.ele-upload-list__item-content-action .el-link {
  margin-right: 10px;
}
</style>
