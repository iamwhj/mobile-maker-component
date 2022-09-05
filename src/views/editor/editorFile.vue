<template>
  <div class="edit-file-box">
    <template v-for="item in fileList" :key="item.id">
      <div 
        :class="{ selectd: selectFileId === item.id}"
        @click="changEditFile(item)"
      >
        <FileItem :fileItem="item" />
      </div>
    </template>
  </div>
</template>

<script setup>
import FileItem from '@/components/fileItem/index.vue';
import { ref } from 'vue'

const fileList = [
  { id: 1, name: 'config.vue' },
  { id: 2, name: 'render.vue' },
];

// 切换正在编辑文件
const selectFileId = ref(1);
const changEditFile = fileItem => {
    selectFileId.value = fileItem.id;

    // 更换monaco里的内容
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
