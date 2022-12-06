<template>
  <div class="allItem">
    <div class="commodityInfo">
        <div class="commodityName">
            <span class="nameColor"></span>
            <span class="nameFont">{{name}}</span>
            <span class="backGround">&lt;{{distance}}km</span>
        </div>
        <div class="commodityDetails">
            <span class="detailsColor"></span>
            <span class="detailsFont">{{details}}</span>
        </div>
        <div class="commodityLocation">
            <span class="locationColor"></span>
            <span class="locationFont">{{location}}</span>
        </div>
    </div>
    <div class="commodityImg">
        <img :src="image" alt="">
    </div>
    <div>
        <svg class="icon iconRight" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
        </svg>
    </div>
  </div>
</template>
<script setup lang='ts'>

 defineProps({
    name:String,
    distance:Number,
    details:String,
    location:String,
    image:String
 })


</script>
<style scope lang='scss'>
 .allItem{
    display: flex;
    align-items: center;
    background-color: white;
    padding: 20px 5px;
    .commodityInfo{
        display: flex;
        flex-flow: column;
        width: 60vw;
        .commodityName{
            display: flex;
            align-items: center;
            .nameColor{
                flex-shrink: 0;
                display: block;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #ff6f77;
            }
            .nameFont{
                margin-left:15px ;
                font-weight: 700;
                font-size: 20px;
            }
            .backGround{
                font-size: 14px;
                font-weight: 700;
                margin-left: 10px;
                background-color: #63dcd3;
                color: white;
                padding: 2px 5px;
            }
        }
        .commodityDetails{
            display: flex;
            align-items: center;
            margin-top: 5px;
            .detailsColor{
                flex-shrink: 0;
                display: block;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #63dcd3;
               
            }
            .detailsFont{
                margin-left: 15px;
                font-size: 14px;
                font-weight: 600;
                color: #999999;
            }
        }
        .commodityLocation{
            display: flex;
            margin-top:5px ;
            align-items: center;
            .locationColor{
                flex-shrink: 0;
                display: block;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #FFDD3E;
                margin-right: 15px;
            }
            .locationFont{
                font-size: 14px;
                font-weight: 600;
                color: #999999;
            }
        }
    }
    .commodityImg{
        flex-shrink: 0;
        margin: 0 5px;
        width: 20vw;
        img{
            width: 20vw;
            height: 10vh;
        }
    }
    .iconRight{
        width: 30px;
        height: 30px;
        color: #999999;

    }
 }
</style>
