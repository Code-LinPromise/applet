<template>
  <div class="topNav">
    <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-eyu"></use>
    </svg>
    <span class="font">易物鱼</span>
  </div>
</template>
<script setup lang='ts'>
 
</script>
<style scope lang='scss'>
    .topNav{
        display: flex;
        flex-flow: column;
        width: 100%;
        align-items: center;
        padding-top: 60px;
        flex-shrink: 0;
        .font{
            color: white;
            font-size: 32px;
            font-weight: 700;
        }
        
    }
</style>
