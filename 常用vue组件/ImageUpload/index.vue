<template>
  <div class="component-upload-image">
    <el-upload multiple :http-request="handleUploadForm" :action="uploadImgUrl" list-type="picture-card"
      :on-success="handleUploadSuccess" :before-upload="handleBeforeUpload" :limit="limit" :on-error="handleUploadError"
      :on-exceed="handleExceed" ref="imageUpload" :before-remove="handleDelete" :show-file-list="true"
      :headers="headers" :file-list="fileList" :on-preview="handlePictureCardPreview"
      :class="{ hide: fileList.length >= limit }">
      <el-icon class="avatar-uploader-icon">
        <plus />
      </el-icon>
      <template #file="{ file }">
        <div class="upload-item">
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
          <span class="el-upload-list__item-actions">
            <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
              <el-icon><zoom-in /></el-icon>
            </span>
            <span class="el-upload-list__item-edit" @click="handleEditFile(file)">
              <el-icon>
                <edit />
              </el-icon>
            </span>
            <span class="el-upload-list__item-delete" @click="handleDelete(file)">
              <el-icon>
                <delete />
              </el-icon>
            </span>
          </span>
        </div>
      </template>
    </el-upload>

    <!-- 修改按钮 -->
    <!-- <div v-if="fileList.length > 0" class="edit-buttons">
      <el-button type="primary" size="small" @click="handleEdit">修改图片</el-button>
    </div> -->

    <!-- 上传提示 -->
    <div class="el-upload__tip" v-if="showTip">
      请上传
      <template v-if="fileSize">
        大小不超过 <b style="color: #f56c6c">{{ fileSize }}MB</b>
      </template>
      <template v-if="fileType">
        格式为 <b style="color: #f56c6c">{{ fileType.join("/") }}</b>
      </template>
      的文件
    </div>

    <el-dialog v-model="dialogVisible" title="预览" width="800px" append-to-body>
      <img :src="dialogImageUrl" style="display: block; max-width: 100%; margin: 0 auto" />
    </el-dialog>
  </div>
</template>

<script setup>
import { getToken } from "@/utils/auth";
import { isExternal } from "@/utils/validate";
import { uploadImages } from "@/api/control";
import { Edit, ZoomIn, Delete } from '@element-plus/icons-vue'

const props = defineProps({
  modelValue: [String, Object, Array],
  // 图片数量限制
  limit: {
    type: Number,
    default: 5,
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
    default: true
  },
});

const { proxy } = getCurrentInstance();
const emit = defineEmits();
const number = ref(0);
const uploadList = ref([]);
const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const baseUrl = import.meta.env.VITE_APP_BASE_API;
const uploadImgUrl = ref(import.meta.env.VITE_APP_BASE_API + "/api/product/uploadImages"); // 上传的图片服务器地址
const headers = ref({ Authorization: "Bearer " + getToken() });
const fileList = ref([]);
const showTip = computed(
  () => props.isShowTip && (props.fileType || props.fileSize)
);

watch(() => props.modelValue, (val) => {
  if (val) {
    if (Array.isArray(val)) {
      fileList.value = val
        .filter(item => item && item !== '') // 过滤掉空字符串和null
        .map(item => {
          if (typeof item === 'string') {
            return {
              name: item.substring(item.lastIndexOf('/') + 1),
              url: item
            }
          }
          return item;
        });
    } else if (typeof val === 'object') {
      fileList.value = transformObjectToArray(val);
    }
  } else {
    fileList.value = [];
  }
}, { deep: true, immediate: true });

function transformObjectToArray(obj) {
  return Object.values(obj)
    .filter((url) => url !== null && url !== '') // 过滤掉 null 和空字符串
    .map((url) => ({ name: url, url }));
}

const clearFormData = () => {
  formData.delete("images"); // 清空 formData 中的图片数据
};

// 上传前loading加载
function handleBeforeUpload(file) {
  let isImg = false;
  if (props.fileType.length) {
    let fileExtension = "";
    if (file.name.lastIndexOf(".") > -1) {
      fileExtension = file.name.slice(file.name.lastIndexOf(".") + 1);
    }
    isImg = props.fileType.some(type => {
      if (file.type.indexOf(type) > -1) return true;
      if (fileExtension && fileExtension.indexOf(type) > -1) return true;
      return false;
    });
  } else {
    isImg = file.type.indexOf("image") > -1;
  }
  if (!isImg) {
    proxy.$modal.msgError(`文件格式不正确，请上传${props.fileType.join("/")}图片格式文件!`);
    return false;
  }
  if (file.name.includes(',')) {
    proxy.$modal.msgError('文件名不正确，不能包含英文逗号!');
    return false;
  }
  if (props.fileSize) {
    const isLt = file.size / 1024 / 1024 < props.fileSize;
    if (!isLt) {
      proxy.$modal.msgError(`上传头像图片大小不能超过 ${props.fileSize} MB!`);
      return false;
    }
  }
  proxy.$modal.loading("正在上传图片，请稍候...");
  number.value++;
}

// 文件个数超出
function handleExceed() {
  proxy.$modal.msgError(`上传文件数量不能超过 ${props.limit} 个!`);
}
let callCount = 0;
// const formData = new FormData();
const handleUploadForm = (param) => {
  console.log(props.modelValue, 'props.modelValue');

  console.log(uploadList.value, 'uploadList***');


  // 初始化上传列表
  if (uploadList.value.length == 0) {
    uploadList.value = [];
    // 如果已有图片，先添加到上传列表
    if (props.modelValue && Array.isArray(props.modelValue)) {
      props.modelValue.forEach(url => {
        if (url && url !== '') {
          uploadList.value.push({
            isExisting: true, // 标记为已存在的图片
            url: url
          });
        }
      });
    }
  }

  // 添加新上传的文件
  uploadList.value.push({
    isExisting: false,
    file: param.file
  });

  callCount++;
  // 只在所有文件都收集完后执行一次上传
  if (callCount === number.value) {
    const formData = new FormData();
    const imageKeys = ['mainImage', 'otherImage1', 'otherImage2', 'otherImage3', 'otherImage4'];

    // 按顺序处理文件列表
    uploadList.value.forEach((item, index) => {
      if (index < imageKeys.length) {
        if (!item.isExisting) {
          // 新上传的文件
          formData.append(imageKeys[index], item.file);
        }
      }
    });

    // 保存现有图片的URL
    const existingUrls = uploadList.value
      .filter(item => item.isExisting)
      .map(item => item.url);

    // 清空临时文件列表，准备接收上传后的URL
    uploadList.value = [];

    console.log(existingUrls, '****existingUrls');


    // 上传新文件并合并结果
    return uploadImage(formData, existingUrls);
  }
};

// 图片上传函数
const uploadImage = (formData, existingUrls = []) => {
  uploadImages(formData).then((res) => {
    let imageList = res.data;
    // 将对象转换为数组，过滤掉空值
    let newImageUrls = Object.entries(imageList)
      .filter(([_, value]) => value !== null)
      .map(([_, value]) => value);

    // 合并现有图片和新上传的图片URL
    const combinedUrls = [...existingUrls];
    newImageUrls.forEach(url => {
      if (combinedUrls.length < props.limit) {
        combinedUrls.push(url);
      }
    });

    // 更新上传列表
    uploadList.value = combinedUrls.map(url => ({
      name: url,
      url: url
    }));

    uploadedSuccessfully();
  }).catch((error) => {
    console.log(error, '图片上传失败');
    proxy.$modal.closeLoading();
  });
};

// 上传成功回调
function handleUploadSuccess(res, file) {
  if (res.code === 200) {
    uploadList.value.push({ name: res.fileName, url: res.fileName });
    uploadedSuccessfully();
  } else {
    number.value--;
    proxy.$modal.closeLoading();
    proxy.$modal.msgError(res.msg);
    proxy.$refs.imageUpload.handleRemove(file);
    uploadedSuccessfully();
  }
}

// 删除图片
function handleDelete(file) {
  console.log(file, 'file');
  const findex = fileList.value.map(f => f.name).indexOf(file.name);
  if (findex > -1 && uploadList.value.length === number.value) {
    fileList.value.splice(findex, 1);
    console.log(fileList.value, 'fileList.value');
    let currentList = fileList.value.map(item => item.url);
    emit("update:modelValue", currentList);
    return false;
  }
}

// 上传结束处理
function uploadedSuccessfully() {
  if (number.value > 0 && uploadList.value.length > 0) {
    const currentList = uploadList.value.map(item => item.url);

    emit("update:modelValue", currentList);
    uploadList.value = [];
    number.value = 0;
    callCount = 0;
    proxy.$modal.closeLoading();
  }
}

// 上传失败
function handleUploadError() {
  proxy.$modal.msgError("上传图片失败");
  proxy.$modal.closeLoading();
}

// 预览
function handlePictureCardPreview(file) {
  dialogImageUrl.value = file.url;
  dialogVisible.value = true;
}

// 对象转成指定字符串分隔
function listToString(list, separator) {
  let strs = "";
  separator = separator || ",";
  for (let i in list) {
    if (undefined !== list[i].url && list[i].url.indexOf("blob:") !== 0) {
      strs += list[i].url.replace(baseUrl, "") + separator;
    }
  }
  return strs != "" ? strs.substr(0, strs.length - 1) : "";
}

// 添加修改功能
const handleEdit = () => {
  proxy.$refs.imageUpload.$el.querySelector('input[type="file"]').click();
};

// 添加单个文件修改功能
const handleEditFile = (file) => {
  console.log(file, ';****file');
  console.log(fileList.value, ';****fileList.value');
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = props.fileType.map(type => `.${type}`).join(',');

  input.onchange = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      // 获取当前文件的索引
      const fileIndex = fileList.value.findIndex(f => f.name === file.name);
      if (fileIndex !== -1) {
        // 重置计数器
        callCount = 0;
        number.value = 1;

        const formData = new FormData();
        const imageKeys = ['mainImage', 'otherImage1', 'otherImage2', 'otherImage3', 'otherImage4'];
        formData.append(imageKeys[fileIndex], newFile);

        uploadImages(formData).then((res) => {
          let imageList = res.data;
          // 将对象转换为数组，过滤掉空值
          let imageUrls = Object.entries(imageList)
            .filter(([_, value]) => value !== null)
            .map(([_, value]) => value);

          console.log(imageUrls, 'imageUrls');

          console.log(props.modelValue, 'props.modelValue');


          // 更新当前位置的图片URL
          const updatedList = [...props.modelValue];
          if (imageUrls.length > 0) {
            updatedList[fileIndex] = imageUrls[0]; // 只取第一个URL，因为是单个文件修改
          }

          emit("update:modelValue", updatedList);
          // proxy.$modal.closeLoading();
        }).catch((error) => {
          console.log(error, '图片上传失败');
          proxy.$modal.closeLoading();
        });
      }
    }
  };
  input.click();
};

defineExpose({
  clearFormData,
});
</script>

<style scoped lang="scss">
// .el-upload--picture-card 控制加号部分
:deep(.hide .el-upload--picture-card) {
  display: none;
}

.edit-buttons {
  margin-top: 10px;
  text-align: center;
}

:deep(.el-upload--picture-card) {
  width: 100px;
  height: 100px;
  line-height: 100px;
}

:deep(.el-upload-list--picture-card .el-upload-list__item) {
  width: 100px;
  height: 100px;
}

.upload-item {
  position: relative;
  width: 100%;
  height: 100%;

  .el-upload-list__item-actions {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s;

    &:hover {
      opacity: 1;
    }

    .el-icon {
      color: #fff;
      font-size: 20px;
      cursor: pointer;

      &:hover {
        color: #409EFF;
      }
    }
  }
}

:deep(.el-upload-list__item) {
  .el-upload-list__item-thumbnail {
    object-fit: cover;
  }
}
</style>