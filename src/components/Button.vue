<template>
  <div class="button">
    <button class="buttonItem">{{title}}</button>
  </div>
</template>
<script setup lang='ts'>
 defineProps({
    title:String
 })
</script>
<style scope lang='scss'>
 .button{
    display: flex;
    margin: 15px 30px;
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
