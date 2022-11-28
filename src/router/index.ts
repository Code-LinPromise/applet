import {createRouter, createWebHashHistory} from 'vue-router'

const Welcome=()=>import("../pages/Welcome.vue")


const routes=[
    {path: '/', component: Welcome},

]


export default createRouter({
    history: createWebHashHistory(),
    routes, 
  })