
import Vue from"vue";
import VueRouter from"vue-router";
import VueResource from"vue-resource";

Vue.use(VueRouter);
Vue.use(VueResource);

//导入自己的模块
import router from './router'//路由实例

//导入自己的组件

import AppCom from '../component/App.vue';//跟组件

new Vue({
    el:"#app",
    render:function(c){
        return c(AppCom)
    },
    router
})