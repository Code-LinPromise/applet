<template>
  <div>
    <TopColor :iconEvent="goBack" title="搜索结果" svg="#icon-zuojiantou"/>
    <div class="commodityAll">
        <div class="iconAndFont">
            <svg class="icon topSvg" aria-hidden="true" >
                <use xlink:href="#icon-jilu"></use>
            </svg>
            <span class="font">探寻记录</span>
        </div>
        <ul class="list">
              <li v-for="item in array">
                <CommodityItem :name="item.name" :details="item.details" :distance="item.distance"
                :location="item.location" :image="item.image"
                />
              </li>
        </ul>
    </div>
  </div>
</template>
<script setup lang='ts'>
 import {useRouter} from "vue-router"
 import TopColor from '../components/TopColor.vue';
 import {faker} from "@faker-js/faker"
 import CommodityItem from "../components/CommodityItem.vue";
 import {useAddData}  from "../store/useAddData"

 const store=useAddData()
 const router=useRouter()
  const goBack=()=>{
    router.back()
 }
 const getImage=()=>{
    return faker.image.cats()
 }
 const getName=()=>{
  return "铲屎官"
 }
 const getDistance=(max=100)=>{
  return faker.datatype.number({min:0,max:max})
 }
 const getLocation=()=>{
  return "成都理工大学"
 }
 const getDetails=()=>{
  return "找到十二个结果，共耗时0.2h"
 }
 const array=[
  {name:getName(),distance:getDistance(store.max),details:getDetails(),location:getLocation(),image:getImage()},
  {name:getName(),distance:getDistance(store.max),details:getDetails(),location:getLocation(),image:getImage()},
  {name:getName(),distance:getDistance(store.max),details:getDetails(),location:getLocation(),image:getImage()},
  {name:getName(),distance:getDistance(store.max),details:getDetails(),location:getLocation(),image:getImage()},
  {name:getName(),distance:getDistance(store.max),details:getDetails(),location:getLocation(),image:getImage()},
  {name:getName(),distance:getDistance(store.max),details:getDetails(),location:getLocation(),image:getImage()}
 ]
</script>
<style scope lang='scss'>
 .commodityAll{
    background-color: #63dcd3;
    .iconAndFont{
        display: flex;
        align-items: center;
        
        .topSvg{
        margin-left: 16px;
        color: white;
        width: 24px;
        margin-right: 15px;
        }
        .font{
            font-weight: 600;
            font-size: 18px;
            color: white;
        }
    }
    .list{
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      li{
        margin-bottom: 15px;
      }
    }
 }
</style>
