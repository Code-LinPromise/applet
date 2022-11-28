<template>
    <div class="info">
    <svg class="icon" aria-hidden="true">
        <use xlink:href={svg}></use>
    </svg>
    <span>{{title}}</span>
    </div>
</template>
<script setup lang='ts'>
 defineProps({
    svg:String,
    title:String
 })
</script>
<style scope lang='scss'>
 .info{
    display: flex;
    flex-flow: column;
 }
</style>
