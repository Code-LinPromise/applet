<template>
  <div class="welcome">
    <TopNav/>
    <div class="info">
      <RouterView/>
    </div>
    <div class="navBar">
      <span style="opacity: 0; ">跳过</span>
      <span>下一页</span>
      <span class="skip" >跳过</span>
    </div>
  </div>
</template>
<script setup lang='ts'>
import TopNav from "../../components/TopNav.vue"
import { RouterView } from "vue-router";
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
    align-items: center;
    display: flex;
    flex-grow: 1;
    background-color: white;
    border-radius: 16px;
    margin-top: 32px;
  }
  .navBar{
    margin-top: 30px;
    padding-bottom: 20px;
    flex-shrink: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
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
