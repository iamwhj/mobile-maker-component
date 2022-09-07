<template>
  <div class="wrap">
    <div class="editor">
      <Editor />
    </div>
    <div class="preview">
      <Preview />
    </div>
  </div>
</template>

<script setup>
  import Editor from './editor/index.vue';
  import Preview from './preview/index.vue';
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  overflow: hidden;
  height: calc(100vh - 31px);
  div {
    height: 100%;
  }
  .editor {
    width: 40vw;
    border-right: 1px solid #ccc;
  }
  .preview {
    float: right;
    width: 60vw;
  }
}
</style>
