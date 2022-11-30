<template>
  <div class="welcome">
    <TopNav/>
    <div class="info">
      <RouterView v-slot="{ Component, route }">
          <Transition enterFromClass="slide_fade_enter_from" enterActiveClass="slide_fade_enter_active"
            leaveToClass="slide_fade_leave_to" leaveActiveClass="slide_fade_leave_active">
            <component :is="Component" />
          </Transition>
          
      </RouterView>
    </div>
    <div class="navBar">
      <span style="opacity: 0; ">跳过</span>
      <RouterLink :to=mapRouter[refPath] class="router-link">
        <span>下一页</span>
      </RouterLink> 
      <RouterLink to="/start" class="router-link">
        <span class="skip" >跳过</span>
      </RouterLink> 
    </div>
  </div>
</template>
<script setup lang='ts'>
import {onUpdated,ref } from "vue";
import TopNav from "../../components/TopNav.vue"
import { RouterView ,useRouter} from "vue-router";
const mapRouter:Record<string,string>={
  "/welcome/1":"/welcome/2",
  "/welcome/2":"/welcome/3",
  "/welcome/3":"/start",
}
const refPath=ref("/welcome/1")
onUpdated(()=>{
  const path=router.currentRoute.value.path
  refPath.value=path
})
const router=useRouter()

</script>
<style scope lang='scss'>
.welcome{
  display: flex;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(to bottom,#2dc7bb,#63dcd3);
  flex-flow: column;
  align-items: center;
  .info{
    width: 90%;
    flex-grow: 1;
    background-color: white;
    border-radius: 16px;
    margin-top: 32px;
    position: relative;
    .slide_fade_enter_active,
    .slide_fade_leave_active {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transition: all 0.5s ease-out;
    }

    .slide_fade_enter_from {
       transform: translateX(100vw);
    }
    .slide_fade_leave_to {
      transform: translateX(-100vw);
    }
  }
  .navBar{
    margin-top: 30px;
    padding-bottom: 20px;
    flex-shrink: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    .router-link{
      text-decoration: none;
    }
    span{
      color: #ffffff;
      font-size: 32px;
      font-weight: 700;
    }
    .skip{
      margin-right: 16px;
    }
  }
}
</style>
