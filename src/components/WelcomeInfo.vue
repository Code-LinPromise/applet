<template>
    <div class="wrraper">
    <svg class="icon logoWelcome1" aria-hidden="true">
        <use :xlink:href=svg></use>
    </svg>
    <span class="font">{{title}}</span>
    </div>
</template>
<script setup lang='ts'>
 defineProps({
    svg:String,
    title:String
 })
</script>
<style scope lang='scss'>
 .wrraper{
    display: flex;
    flex-flow: column;
    width: 100%;
    align-items: center;
    .font{
        text-align: center;
        color: black;
        font-size: 32px;
        font-weight: 700;
        margin-top: 30px;
        }
    .logoWelcome1{
        margin-top: 100px;
    }
 }
 
</style>
