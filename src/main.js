import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router/index'
// 引入element-ui
import './plugins/element'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')