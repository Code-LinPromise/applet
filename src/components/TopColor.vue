<template>
  <div class="topColor">
    <svg class="icon topSvg" aria-hidden="true" @click="iconEvent">
        <use :xlink:href=svg></use>
    </svg>
    <span class="title">
        {{title}}
    </span>
    <span style="opacity:0">
        <svg class="icon topSvg" aria-hidden="true">
        <use :xlink:href=svg></use>
    </svg>
    </span>
  </div>
</template>
<script setup lang='ts'>

 defineProps({
    title:String,
    svg:String,
    iconEvent:{
        type:Function,
        defalut(){
            return 0
        }
    }
 })

</script>
<style scope lang='scss'>
 .topColor{
    background-color: #2dc7bb;
    width: 100vw;  
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .topSvg{
        margin-left: 16px;
        color: white;
        width: 24px;
    }
    .title{
        color: white;
        font-size: 24px;
        font-weight: 700;
    }
 }
</style>

