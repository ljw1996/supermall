import Vue from 'vue'
// 导入路由模块
import VueRouter from 'vue-router'

// 路由懒加载
const Home = () =>
    import ('../views/home/Home.vue')
const My = () =>
    import ('../views/my/My')
const ShopCar = () =>
    import ('../views/shopcar/ShopCar')
const Sort = () =>
    import ('../views/sort/Sort')

// 路径配置
const routes = [
    { path: '', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/sort', component: Sort },
    { path: '/shopcar', component: ShopCar },
    { path: '/my', component: My }
]
Vue.use(VueRouter)
const router = new VueRouter({
    routes,
    // 使用历史模式路由 跳转页面中可以前进后退
    mode: 'history'
})

export default router