import {createRouter, createWebHashHistory} from 'vue-router'

const Welcome=()=>import("../pages/Welcome/Welcome.vue")
const Welcome1=()=>import("../pages/Welcome/Wlecome1.vue")
const Welcome2=()=>import("../pages/Welcome/Wlecome2.vue")
const Welcome3=()=>import("../pages/Welcome/Wlecome3.vue")

const routes=[
    {path: '/', redirect:"/welcome1"},
    {
        path:"/welcome",
        component:Welcome,
        children:[
            {
                path:"",
                redireact:"/1"
            },
            {
                path:"/1",
                component:Welcome1
            },
            {
                path:"/2",
                component:Welcome2
            },
            {
                path:"/3",
                component:Welcome3
            }
        ]
    }
]


export default createRouter({
    history: createWebHashHistory(),
    routes, 
  })