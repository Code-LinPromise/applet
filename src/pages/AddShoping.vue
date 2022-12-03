<template>
  <div class="addShoping">
    <TopColor :iconEvent="goBack" title="发布纸飞机" svg="#icon-zuojiantou"/>
    <div class="wishAndTopic">
       <p class="wish">心愿话题</p>
       <ul class="allTopic">
          <li v-for="item in topicArray" class="A-topic"><TopicItem :title="item"/></li>
       </ul>
       <p class="wish">自定义话题</p>
       <div>
        <input type="text" placeholder="请输入你的话题" v-model="refValue" class="customize">
        <button class="addTopic" @click="AddTopic">添加</button>
       </div>
    </div>
    <div class="topicDetails">
      <p class="title">纸飞机里写出你的心愿，等着别人来发现</p>
      <textarea name="" id="textarea" cols="30" rows="10" placeholder="请填写详细信息"></textarea>
      <van-uploader v-model="fileList" multiple />
    </div>
    <div class="headlineButton">
      <van-cell center title="匿名" class="headline">
        <template #right-icon>
          <van-switch v-model="checked" class="switch"/>
        </template>
      </van-cell>
    </div>
    <Button title="叠好了，奋力扔出去" />
  </div>
</template>
<script setup lang='ts'>
 import TopColor from '../components/TopColor.vue';
 import TopicItem from '../components/TopicItem.vue';
 import Button from '../components/Button.vue';
 import {useRouter} from "vue-router"
import { ref ,reactive,onUpdated} from 'vue';
 const topicArray=reactive(
  ["找房子","寻找丢失","shoping"]
 )
 const checked=ref(false)
 const router=useRouter()
 const refValue=ref("")
 
 const fileList = ref([
      { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' },
      
      { url: 'https://cloud-image', isImage: true },
    ])

 const goBack=()=>{
    router.back()
 }
 const AddTopic=()=>{
  topicArray.push(refValue.value)
  refValue.value=""
 }
</script>
<style scope lang='scss'>
 .addShoping{
    display: flex;
    flex-flow: column;
    .wishAndTopic{
      box-shadow: 0 0  2px #9d9d9d;
      display: flex;
      flex-flow: column;
      background-color: white;
      margin: 30px 30px 0;
      padding: 15px 5px;
      .wish{
      margin-left: 10px;
      font-size: 22px;
      font-weight: 700;
    }
      .allTopic{
        margin-left: 15px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .A-topic{
          margin-right: 15px;
          margin-bottom: 15px;
        }
    }
    .customize{
      width: 50vw;
      height: 3vh;
      margin-left: 15px;
      border: 2px solid #6cdcd3;
      border-radius: 5px;
      font-weight: 700;
    }
    .customize::placeholder{
      padding-left: 5px;
    }
    .addTopic{
      margin-left: 30px;
      padding: 5px 15px;
      background-color:#6cdcd3 ;
      border: none;
      color: white;
      border-radius: 5px;
    }


    }
    .topicDetails{
      box-shadow: 0 0  2px #9d9d9d;
      display: flex;
      flex-flow: column;
      background-color: white;
      margin: 0 30px;
      padding: 15px 5px;
      .title{
        margin-left: 10px;
        font-size: 16px;
        font-weight: 700;
      }
      #textarea{
        border: none;
        padding-left: 5px;
        font-weight: 600px;
       
        border-radius: 5px;
        margin-bottom: 10px;
      }
      #textarea::placeholder{
        color: #999999;
      }
      
      }
      
    }
    .headlineButton{
      box-shadow: 0 0  2px #9d9d9d;
      display: flex;
      flex-flow: column;
      background-color: white;
      margin: 20px 30px;
      padding: 5px 5px;
      .headline{
        font-size: 22px;
        .switch{
        --van-switch-on-background:#6cdcd3
      }
    }
    
   
 }
</style>
