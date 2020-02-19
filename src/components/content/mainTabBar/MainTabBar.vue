<template>
  <tab-bar>
    <tab-bar-item link="/home">
      <img slot="item-icon" src="../../../assets/img/tabbarimg/home.jpg" alt />
      <img slot="item-icon-active" src="../../../assets/img/tabbarimg/home02.jpg" alt />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/sort">
      <img slot="item-icon" src="../../../assets/img/tabbarimg/sort.jpg" alt />
      <img slot="item-icon-active" src="../../../assets/img/tabbarimg/sort02.jpg" alt />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/shopcar">
      <img slot="item-icon" src="../../../assets/img/tabbarimg/shopcar.jpg" alt />
      <img slot="item-icon-active" src="../../../assets/img/tabbarimg/shopcar02.jpg" alt />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/my">
      <img slot="item-icon" src="../../../assets/img/tabbarimg/my.jpg" alt />
      <img slot="item-icon-active" src="../../../assets/img/tabbarimg/my02.jpg" alt />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped>
</style>