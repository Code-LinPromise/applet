<template>
  <div class="floatButton">
    <svg class="icon floatIcon" aria-hidden="true">
        <use xlink:href="#icon-tianjia"></use>
    </svg>
  </div>
</template>
<script setup lang='ts'>
 
</script>
<style scope lang='scss'>
 .floatButton{
    position: fixed;
    bottom: 5px;
    left: 50%;
    transform: translate(-50%,-50%);
    background-image: linear-gradient(45deg,#fa5962,#ff6f77);
    border-radius: 50%;
    .floatIcon{
    width: 50px;
    height: 50px;
    color: white;
 }
 }
 
</style>
