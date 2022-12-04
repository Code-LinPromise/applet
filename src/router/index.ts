import {createRouter, createWebHashHistory} from 'vue-router'

const Welcome=()=>import("../pages/Welcome/Welcome.vue")
const Welcome1=()=>import("../pages/Welcome/Welcome1.vue")
const Welcome2=()=>import("../pages/Welcome/Welcome2.vue")
const Welcome3=()=>import("../pages/Welcome/Welcome3.vue")
const Start=()=>import("../pages/Start.vue")
const AddShoping=()=>import("../pages/AddShoping.vue")
const ReleaseFinish=()=>import("../pages/ReleaseFinish.vue")

const routes=[
    {path: '/', redirect:"/welcome"},
    {
        path:"/welcome",
        component:Welcome,
        children:[
            {
                path:"",
                redirect:"/welcome/1"
            },
            {
                path:"1",
                component:Welcome1
            },
            {
                path:"2",
                component:Welcome2
            },
            {
                path:"3",
                component:Welcome3
            },
        ]
    },
    {
        path:"/start",
        component:Start
    },
    {
        path:"/addshoping",
        component:AddShoping
    },
    {
        path:"/finish",
        component:ReleaseFinish
    }
]


export default createRouter({
    history: createWebHashHistory(),
    routes, 
  })