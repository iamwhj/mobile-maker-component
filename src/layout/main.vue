<template>
  <div class="wrap">
    <div class="editor">
        <Monaco />
    </div>
    <div class="preview"></div>
  </div>
</template>

<script setup>
import Monaco from '../components/monaco/index.vue';
</script>

<style lang="scss" scoped>
    .wrap {
        display: flex;
        overflow: hidden;
        height: calc(100vh - 31px);
        div {
            height:100%;
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
