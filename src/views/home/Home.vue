<template>
  <div id="home">
    <!-- home-nav是本页导航栏的私有样式 -->
    <nav-bar class="home-nav">
      <!-- 使用导航栏组件的中间模块的插槽 -->
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
// 导入导航栏组件
import NavBar from "../../components/common/navbar/NavBar";

import { getHomeAlldata } from "../../network/home";
export default {
  name: "Home",
  components: {
    // 注册导航栏组件
    NavBar
  },
  data() {
    return {
      // 轮播图数据存储数组
      banners: [],
      recommends: []
    };
  },
  created() {
    // 获取主页所有数据
    getHomeAlldata().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  }
};
</script>

<style scoped>
/* 首页导航栏的颜色相关样式 */
.home-nav {
  background-color: rgb(252, 136, 155);
  color: #fff;
}
</style>