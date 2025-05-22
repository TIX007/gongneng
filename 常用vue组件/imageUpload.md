```vue
<el-form-item label="行驶证正本" prop="licenseFrontPath">
          <image-upload :ref="(el) => setImageUploadRef(el, 2)" v-model="form.licenseFrontPath" :limit="1"
            @update:modelValue="updateImageForm" />
        </el-form-item>
        <el-form-item label="行驶证副本" prop="licenseBackPath">
          <image-upload :ref="(el) => setImageUploadRef(el, 3)" v-model="form.licenseBackPath" :limit="1"  @update:modelValue="updateImageForm"/>
        </el-form-item>
        <el-form-item label="年检检测报告" prop="inspectionReportImages">
          <image-upload :ref="(el) => setImageUploadRef(el, 4)" v-model="form.inspectionReportImages"  @update:modelValue="updateImageForm" />
        </el-form-item>

<script setup name="Info" lang="ts">
// 监听年检报告图片变化
watch(
  () => form.value.inspectionReportImages,
  (newVal) => {
    if (newVal && newVal.length > 0) {
      const inspectionImages = newVal.split(",");
      // 将图片数组分配到不同的inspection字段中
      for (let i = 0; i < Math.min(inspectionImages.length, 5); i++) {
        form.value[`inspectionReportImage${i + 1}`] = inspectionImages[i];
      }
      // 清空多余的inspection字段
      for (let i = inspectionImages.length; i < 5; i++) {
        form.value[`inspectionReportImage${i + 1}`] = null;
      }

    }
  },
  { deep: true } // 深度监听数组变化
);

/** 修改按钮操作 */
const handleUpdate = async (row?: InfoVO) => {
  // const storedDeletions = JSON.parse(localStorage.getItem('pendingDeletions') || '[]');
  localStorage.removeItem('pendingDeletions');
  reset();
  const _id = row?.id || ids.value[0]
  const res = await getInfo(_id);
  Object.assign(form.value, res.data);
  // 将inspectionReportImage1、inspectionReportImage2、inspectionReportImage3、inspectionReportImage4、inspectionReportImage5字段合并到inspectionReportImages字段中
  const inspectionImages = [];
  for (let i = 1; i <= 5; i++) {
    const inspectionImage = form.value[`inspectionReportImage${i}`];
    if (inspectionImage) {
      inspectionImages.push(inspectionImage);
    }
  }
  form.value.inspectionReportImages = inspectionImages.join(",");
  dialog.visible = true;
  dialog.title = "修改车辆信息";
}

const imageUploadRefs = ref([]);

// 收集子组件实例的函数
const setImageUploadRef = (el, index) => {
  if (el) {
    // 动态分配数组位置
    imageUploadRefs.value[index] = el;
  }
};

// 组件更新前清空数组
onBeforeUpdate(() => {
  imageUploadRefs.value = [];
});
/** 提交按钮 */
const submitForm = () => {
  infoFormRef.value?.validate(async (valid: boolean) => {
    // transportCertificateImage
    if (valid) {
      buttonLoading.value = true;
      if (form.value.id) {
        await updateInfo(form.value).finally(() => buttonLoading.value = false);
      } else {
        await addInfo(form.value).finally(() => buttonLoading.value = false);
      }
      proxy?.$modal.msgSuccess("操作成功");
      console.log(imageUploadRefs);
      imageUploadRefs.value[0].executePendingDeletions();
      dialog.visible = false;
      await getList();
    }
  });
}

const updateImageForm = (index: number, file: any) => {
  form.value[index] = file
}
</script>
```
