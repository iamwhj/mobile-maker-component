<template>
  <div id="monaco"></div>
</template>

<script setup>
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import 'monaco-editor/esm/vs/editor/editor.all.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp.js';
import { onMounted } from 'vue';

onMounted(() => {
  monaco.editor.create(document.getElementById('monaco'), {
    value: 'console.log(111)', // 编辑器初始显示文字
    language: 'javascript', // 语言支持自行查阅demo
    automaticLayout: false, // 自适应布局
    theme: 'vs', // 官方自带三种主题vs, hc-black, or vs-dark
    foldingStrategy: 'indentation',
    renderLineHighlight: 'all', // 行亮
    selectOnLineNumbers: true, // 显示行号
    minimap: {
      enabled: false,
    },
    readOnly: false, // 只读
    fontSize: 16, // 字体大小
    scrollBeyondLastLine: false, // 取消代码后面一大段空白
    overviewRulerBorder: false, // 不要滚动条的边框
  });
});
</script>

<style lang="scss" scoped>
#monaco {
  width: 100%;
  height: 100%;
}
</style>
