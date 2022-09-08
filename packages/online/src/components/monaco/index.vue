<template>
  <div id="monaco"></div>
</template>

<script setup>
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import 'monaco-editor/esm/vs/editor/editor.all.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp.js';
import { onMounted } from 'vue';
import { useStore } from '@/store/index.js';

const store = useStore()

onMounted(() => {
  const monacoInstance = monaco.editor.create(document.getElementById('monaco'), {
    value: '', // 编辑器初始显示文字
    language: 'javascript', // 语言支持自行查阅demo
    automaticLayout: true, // 自适应布局
    theme: 'vs', // 官方自带三种主题vs, hc-black, or vs-dark
    foldingStrategy: 'indentation', // 代码可分小段折叠
    renderLineHighlight: 'all', // 行亮
    selectOnLineNumbers: true, // 显示行号
    minimap: {  // 关闭小地图
      enabled: false,
    },
    readOnly: false, // 只读
    fontSize: 14, // 字体大小
    tabSize: 2, // tab缩进长度
    cursorStyle: 'line', // 光标样式
    colorDecorators: true,
    scrollBeyondLastLine: false, // 取消代码后面一大段空白
    overviewRulerBorder: false, // 不要滚动条的边框
    scrollbar: { // 滚动条设置
      verticalScrollbarSize: 4, // 竖滚动条
      horizontalScrollbarSize: 6, // 横滚动条
    },
  });
  // 保存 monaco 实例
  store.setMonacoEditor(monacoInstance)
});


</script>

<style lang="scss" scoped>
#monaco {
  width: 100%;
  height: 100%;
}
</style>
