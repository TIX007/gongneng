<template>
  <div class="component-upload-image">
    <el-upload ref="imageUploadRef" multiple :action="uploadImgUrl" list-type="picture-card"
      :on-success="handleUploadSuccess" :before-upload="handleBeforeUpload" :limit="limit" :accept="fileAccept"
      :on-error="handleUploadError" :on-exceed="handleExceed" :before-remove="handleDelete" :show-file-list="true"
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
            <span class="el-upload-list__item-edit" v-if="props.compressSupport" @click="handleEditFile(file)">
              <el-icon>
                <edit />
              </el-icon>
            </span>
            <span class="el-upload-list__item-delete" v-if="props.compressSupport" @click="handleDelete(file)">
              <el-icon>
                <delete />
              </el-icon>
            </span>
          </span>
        </div>
      </template>
    </el-upload>
    <!-- 上传提示 -->
    <div v-if="showTip" class="el-upload__tip">
      请上传
      <template v-if="fileSize">
        大小不超过 <b style="color: #f56c6c">{{ fileSize }}MB</b>
      </template>
      <template v-if="fileType">
        格式为 <b style="color: #f56c6c">{{ fileType.join('/') }}</b>
      </template>
      的文件
    </div>

    <el-dialog v-model="dialogVisible" title="预览" width="800px" append-to-body>
      <img :src="dialogImageUrl" style="display: block; max-width: 100%; margin: 0 auto" />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { listByIds, delOss } from '@/api/system/oss';
import { OssVO } from '@/api/system/oss/types';
import { propTypes } from '@/utils/propTypes';
import { globalHeaders } from '@/utils/request';
import { compressAccurately } from 'image-conversion';

const props = defineProps({
  modelValue: {
    type: [String, Object, Array],
    default: () => []
  },
  // 图片数量限制
  limit: propTypes.number.def(5),
  // 大小限制(MB)
  fileSize: propTypes.number.def(5),
  // 文件类型, 例如['png', 'jpg', 'jpeg']
  fileType: propTypes.array.def(['png', 'jpg', 'jpeg']),
  // 是否显示提示
  isShowTip: {
    type: Boolean,
    default: true
  },
  // 是否支持压缩，默认否
  compressSupport: {
    type: Boolean,
    default: false
  },
  // 压缩目标大小，单位KB。默认300KB以上文件才压缩，并压缩至300KB以内
  compressTargetSize: propTypes.number.def(300)
});

const { proxy } = getCurrentInstance() as ComponentInternalInstance;
const emit = defineEmits(['update:modelValue']);
const number = ref(0);
const uploadList = ref<any[]>([]);
const dialogImageUrl = ref('');
const dialogVisible = ref(false);

const baseUrl = import.meta.env.VITE_APP_BASE_API;
const uploadImgUrl = ref(baseUrl + '/resource/oss/upload'); // 上传的图片服务器地址
const headers = ref(globalHeaders());

const fileList = ref<any[]>([]);
const showTip = computed(() => props.isShowTip && (props.fileType || props.fileSize));

const imageUploadRef = ref<ElUploadInstance>();

// 监听 fileType 变化，更新 fileAccept
const fileAccept = computed(() => props.fileType.map((type) => `.${type}`).join(','));

const pendingDeletions = ref<string[]>([]); // 用于存储待删除的文件

watch(
  () => props.modelValue,
  async (val: string) => {
    if (val) {
      // 首先将值转为数组
      let list: OssVO[] = [];
      if (Array.isArray(val)) {
        list = val as OssVO[];
      } else {
        const res = await listByIds(val);
        list = res.data;
      }
      // 然后将数组转为对象数组
      fileList.value = list.map((item) => {
        // 字符串回显处理 如果此处存的是url可直接回显 如果存的是id需要调用接口查出来
        let itemData;
        if (typeof item === 'string') {
          itemData = { name: item, url: item };
        } else {
          // 此处name使用ossId 防止删除出现重名
          itemData = { name: item.ossId, url: item.url, ossId: item.ossId };
        }
        return itemData;
      });
    } else {
      fileList.value = [];
      return [];
    }
  },
  { deep: true, immediate: true }
);

/** 上传前loading加载 */
const handleBeforeUpload = (file: any) => {
  let isImg = false;
  if (props.fileType.length) {
    let fileExtension = '';
    if (file.name.lastIndexOf('.') > -1) {
      fileExtension = file.name.slice(file.name.lastIndexOf('.') + 1);
    }
    isImg = props.fileType.some((type: any) => {
      if (file.type.indexOf(type) > -1) return true;
      if (fileExtension && fileExtension.indexOf(type) > -1) return true;
      return false;
    });
  } else {
    isImg = file.type.indexOf('image') > -1;
  }
  if (!isImg) {
    proxy?.$modal.msgError(`文件格式不正确, 请上传${props.fileType.join('/')}图片格式文件!`);
    return false;
  }
  if (file.name.includes(',')) {
    proxy?.$modal.msgError('文件名不正确，不能包含英文逗号!');
    return false;
  }
  if (props.fileSize) {
    const isLt = file.size / 1024 / 1024 < props.fileSize;
    if (!isLt) {
      proxy?.$modal.msgError(`上传头像图片大小不能超过 ${props.fileSize} MB!`);
      return false;
    }
  }

  //压缩图片，开启压缩并且大于指定的压缩大小时才压缩
  if (props.compressSupport && file.size / 1024 > props.compressTargetSize) {
    proxy?.$modal.loading('正在上传图片，请稍候...');
    number.value++;
    return compressAccurately(file, props.compressTargetSize);
  } else {
    proxy?.$modal.loading('正在上传图片，请稍候...');
    number.value++;
  }
};

// 文件个数超出
const handleExceed = () => {
  proxy?.$modal.msgError(`上传文件数量不能超过 ${props.limit} 个!`);
};

// 上传成功回调
const handleUploadSuccess = (res: any, file: UploadFile) => {
  if (res.code === 200) {
    uploadList.value.push({ name: res.data.fileName, url: res.data.url, ossId: res.data.ossId });
    uploadedSuccessfully();
  } else {
    number.value--;
    proxy?.$modal.closeLoading();
    proxy?.$modal.msgError(res.msg);
    imageUploadRef.value?.handleRemove(file);
    uploadedSuccessfully();
  }
};

// 修改更换图片
const handleEditFile = async (file: UploadFile) => {
  const findex = fileList.value.findIndex(f => f.name === file.name);

  if (findex > -1) {
    // 打开文件选择对话框
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = fileAccept.value;

    input.onchange = async (e: Event) => {
      const files = (e.target as HTMLInputElement).files;
      if (files && files.length > 0) {
        const newFile = files[0];

        // 保存当前图片索引和ID
        const currentIndex = findex;
        const currentOssId = fileList.value[findex].ossId;

        // 执行上传前验证
        // const isValid = await handleBeforeUpload(newFile);
        // if (!isValid) return;

        // 准备表单数据
        const formData = new FormData();
        formData.append('file', newFile);

        try {
          // 先删除旧图片
          // await delOss(currentOssId);
          if (currentOssId) {
            pendingDeletions.value.push(currentOssId);
            const storedDeletions = JSON.parse(localStorage.getItem('pendingDeletions') || '[]');
            storedDeletions.push(currentOssId);
            localStorage.setItem('pendingDeletions', JSON.stringify(storedDeletions));
          }
          console.log(fileList, '***fileList');

          // fileList.value.splice(findex, 1);

          // 上传新图片
          const res = await fetch(uploadImgUrl.value, {
            method: 'POST',
            headers: headers.value,
            body: formData
          });

          const data = await res.json();
          if (data.code === 200) {
            // 更新文件列表中的图片
            fileList.value.splice(currentIndex, 1, {
              name: data.data.fileName,
              url: data.data.url,
              ossId: data.data.ossId
            });

            // 通知父组件更新
            emit('update:modelValue', listToString(fileList.value));

            proxy?.$modal.msgSuccess('图片更新成功');
          } else {
            proxy?.$modal.msgError(data.msg || '图片上传失败');
          }
        } catch (error) {
          console.error('图片更新失败', error);
          proxy?.$modal.msgError('图片更新失败，请重试');
        } finally {
          proxy?.$modal.closeLoading();
        }
      }
    };

    input.click();
  }
};



// 删除图片
const handleDelete = (file: UploadFile): boolean => {
  const findex = fileList.value.map((f) => f.name).indexOf(file.name);
  if (findex > -1 && uploadList.value.length === number.value) {
    const ossId = fileList.value[findex].ossId;
    // delOss(ossId);
    if (ossId) {
      pendingDeletions.value.push(ossId);
      // 将删除的ossId存储到本地存储中
      const storedDeletions = JSON.parse(localStorage.getItem('pendingDeletions') || '[]');
      storedDeletions.push(ossId);
      localStorage.setItem('pendingDeletions', JSON.stringify(storedDeletions));
    }
    fileList.value.splice(findex, 1);
    emit('update:modelValue', listToString(fileList.value));
    return false;
  }
  return true;
};

// 上传结束处理
const uploadedSuccessfully = () => {
  if (number.value > 0 && uploadList.value.length === number.value) {
    fileList.value = fileList.value.filter((f) => f.url !== undefined).concat(uploadList.value);
    uploadList.value = [];
    number.value = 0;
    emit('update:modelValue', listToString(fileList.value));
    proxy?.$modal.closeLoading();
  }
};

// 上传失败
const handleUploadError = () => {
  proxy?.$modal.msgError('上传图片失败');
  proxy?.$modal.closeLoading();
};

// 预览
const handlePictureCardPreview = (file: any) => {
  dialogImageUrl.value = file.url;
  dialogVisible.value = true;
};

// 对象转成指定字符串分隔
const listToString = (list: any[], separator?: string) => {
  let strs = '';
  separator = separator || ',';
  for (const i in list) {
    if (undefined !== list[i].ossId && list[i].url.indexOf('blob:') !== 0) {
      strs += list[i].ossId + separator;
    }
  }
  return strs != '' ? strs.substring(0, strs.length - 1) : null;
};

// 存储待删除的ossId

const executePendingDeletions = async () => {
  // debugger
  // 获取本地存储的待删除ossId列表
  const storedDeletions = JSON.parse(localStorage.getItem('pendingDeletions') || '[]');
  if (storedDeletions.length === 0) {
    return true;
  }

  try {
    proxy?.$modal.loading('正在删除图片，请稍候...');

    // 逐个删除
    for (const ossId of storedDeletions) {
      await delOss(ossId);
    }

    // 清空待删除列表
    pendingDeletions.value = [];
    localStorage.removeItem('pendingDeletions');
    // proxy?.$modal.msgSuccess('图片删除成功');
    return true;
  } catch (error) {
    console.error('执行批量删除失败', error);
    // proxy?.$modal.msgError('图片删除失败，请重试');
    return false;
  } finally {
    proxy?.$modal.closeLoading();
  }
};

defineExpose({
  executePendingDeletions
});
</script>

<style lang="scss" scoped>
// .el-upload--picture-card 控制加号部分
:deep(.hide .el-upload--picture-card) {
  display: none;
}
</style>
