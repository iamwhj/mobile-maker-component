<template>
  <div class="edit-file-box">
    <template v-for="item in fileList" :key="item.id">
      <div
        :class="{ selectd: selectFileId === item.id }"
        @click="changEditFile(item)"
      >
        <FileItem :fileItem="item" />
      </div>
    </template>
  </div>
</template>

<script setup>
import FileItem from '@/components/fileItem/index.vue';
import { getCodeTemplate } from '@/api/codeTemplateApi.js';
import { useStore } from '@/store';
import { computed, ref } from 'vue';

// 编辑文件列表
const fileList = [
  { id: 1, name: 'config.vue' },
  { id: 2, name: 'render.vue' },
];

const store = useStore();
const monaco = computed(() => store.monaco);

// 用于还原代码模板
let sourceCodoTemplate = null;
// 存储编辑后的代码模板
let editCodeTemplate = null;
// 获取代码模板
const getCodeTemp = () => {
  getCodeTemplate().then((res) => {
    sourceCodoTemplate = res.data;
    editCodeTemplate = { ...sourceCodoTemplate };

    // monaco 初始化代码模板
    monaco.value.setValue(editCodeTemplate[fileList[0].name]);
  });
};
getCodeTemp();

// 切换正在编辑文件
const selectFileId = ref(fileList[0].id);
const changEditFile = (fileItem) => {
  //保存编辑的内容
  const prevEditFile = fileList.find(item => item.id === selectFileId.value);
  const prevName = prevEditFile?.name;
  editCodeTemplate[prevName] = monaco.value.getValue();

  // 更新选中的编辑文件id
  selectFileId.value = fileItem.id;
  // 更换monaco里的内容
  monaco.value.setValue(editCodeTemplate[fileItem.name]);
};
</script>

<style lang="scss" scoped>
.edit-file-box {
  display: flex;
  height: 30px;
  border-bottom: 1px solid #ccc;
  background: rgb(246, 243, 244);
  .selectd {
    background: #fff;
  }
}
</style>
