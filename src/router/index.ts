import {createRouter, createWebHashHistory} from 'vue-router'

const Welcome=()=>import("../pages/Welcome.vue")


const routes=[
    {path: '/', redirect:"/welcome1"},
    {
        path:"/welcome1",
        component:Welcome,
        children:[
            
        ]
    }
]


export default createRouter({
    history: createWebHashHistory(),
    routes, 
  })