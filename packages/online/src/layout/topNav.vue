<template>
  <div class="nav">
    <div>
      <span>iamwhj admin</span>
    </div>
    <div class="logoBox">
      <img src="@/assets/onePrice.png">
      <img src="@/assets/vueLogo.png">
      <span>VUE 3.X</span>
    </div>
    <div>
        <el-link type="primary" target="_blank" href="https://element.eleme.io">store</el-link>
        <span> / mobile-maker-component</span>
    </div>
    <div>
        <el-button size="small">保存</el-button>
        <el-button size="small" type="danger">发布</el-button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #ccc;
  div {
    padding: 0 5px;
  }
  .logoBox {
    font-size: 16px;
    img {
      margin-right: 6px;
      width: 24px;
      vertical-align: middle;
    }
  }
}
</style>
