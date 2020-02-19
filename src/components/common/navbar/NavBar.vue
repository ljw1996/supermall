// 左右固定宽度  中间占剩余全部的 顶部导航栏组件 h44px

<template>
  <!-- 顶部nav导航栏的封装 -->
  <div class="nav-bar">
    <!-- 左边部分 -->
    <div class="left">
      <slot name="left"></slot>
    </div>
    <!-- 中间部分 -->
    <div class="center">
      <slot name="center"></slot>
    </div>
    <!-- 右边部分 -->
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(125, 125, 125, 0.3);
}

.left,
.right {
  width: 60px;
}

.center {
  flex: 1;
}
</style>