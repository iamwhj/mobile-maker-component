<template>
  <div class="file-info">
    <img src="@/assets/vue.png" />
    <span>{{ fileItem.name }}</span>
  </div>
</template>

<script setup>
  const props = defineProps({
    fileItem: { type: Object, required: true }
  })
</script>

<style lang="scss" scoped>
.file-info {
  width: 120px;
  height: 100%;
  line-height: 30px;
  border-right: 1px solid #ccc;
  text-align: center;
  cursor: pointer;
  user-select: none;
  img {
    width: 15px;
    height: 15px;
    vertical-align: middle;
    margin-right: 5px;
  }
}
</style>
