// 安装vue-router
// npm install vue-router --save

// 配置路由相关信息
import VueRouter from 'vue-router';
import Vue from 'vue';

// 1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter);

// 2.创建VUeRouter对象
const routers = [
  // 单独抽离出映射关系的配置
  {
    path: '/home',
    component: null,
  },
  {
    path: '/about',
    component: null,
  }
]

const router = new VueRouter({
  // 配置路由映射关系
  routers,
})

// 3.将router传入到Vue实例
// 3.1导出router对象
export default router;

// 在项目入口的man.js文件中：挂载路由系统
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})


// 使用vue-router
// 1.创建路由映射
// 2.配置路由映射
// 3.使用路由：通过<router-link> 和 <router-view>
