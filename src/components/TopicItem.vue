<template>
  <div class="topicItem">
    <span class="code">#</span>
    <span class="title">{{title}}</span>
  </div>
</template>
<script setup lang='ts'>
 defineProps({
    title:String
 })
</script>
<style scope lang='scss'>
 .topicItem{
    .code{
        color: #6cdcd3;
        margin-right: 5px;
        font-size: 18px;
        font-weight: 600;
    }
    .title{
        font-size: 18px;
        font-weight: 600;
    }
 }
</style>
