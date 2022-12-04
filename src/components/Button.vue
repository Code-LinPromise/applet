<template>
  <div class="button" @click="onClick">
    <button class="buttonItem">{{title}}</button>
  </div>
</template>
<script setup lang='ts'>
 defineProps({
    title:String,
    onClick:null
 })
</script>
<style scope lang='scss'>
 .button{
    display: flex;
    margin: 10vw 30px;
    width: 80vw;
    .buttonItem{
        background-color: #6cdcd3;
        text-align: center;
        color: white;
        font-size: 20px;
        line-height: 20px;
        font-weight: 700;
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 18px;
        
    }
 }
</style>
