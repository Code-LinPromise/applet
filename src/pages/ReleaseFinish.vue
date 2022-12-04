<template>
  <div class="finishPage">
    <TopColor :iconEvent="goBack" title="发布成功" svg="#icon-zuojiantou"/>
    <div class="center">
        <p class="tip">恭喜，纸飞机发布成功！</p>
        <img src="../assets/发布.png" alt="" class="image">
        <Button title="立即分享"/>
    </div>
  </div>
</template>
<script setup lang='ts'>
  import {useRouter} from "vue-router"
  import Button from "../components/Button.vue";
  const router=useRouter()
  const goBack=()=>{
    router.back()
 }
</script>
<style scope lang='scss'>
 .finishPage{
    display: flex;
    flex-flow: column;
    
    .center{
        display: flex;
        flex-flow: column;
        margin-top: 100px;
        align-items: center;
        .tip{
            font-size: 24px;
            font-weight: 700;
        }
        .image{
            width: 50vw;
            margin-top: 30px;
        }
    }
 }
</style>
