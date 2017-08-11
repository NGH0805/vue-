import VueRouter from"vue-router";


export default new VueRouter({
    routes:[
        {path:"/",redirect:"/index"},
        {path:"/index",component:{template:"<p>首页内容</p>"}}
    ]
})