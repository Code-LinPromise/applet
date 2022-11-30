<template>
  <div class="start">
    <TopColor title="附近有闲" svg="#icon-zuojiantou" :iconEvent="goBack"/>
  <div class="top">
    <span class="value">{{refValue}}km</span>
    <van-slider v-model="refValue" @change="onChange" max="50" bar-height="5px"
    active-color="#ff6f77"
     />
    
  </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { showToast } from "vant";
import {useRouter} from "vue-router"
import TopColor from "../components/TopColor.vue";
const router=useRouter()
const goBack=()=>{
    router.replace("./welcome")
}
const refValue = ref(5);
    const onChange = (refValue:string) => showToast('选择当前范围：' + refValue+"km");
</script>
<style scope lang="scss">
.start{
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  .top{
    .value{
      margin-bottom: 15px;
      display: block;
      font-size: 20px;
      color: #ff6f77;
    }
    width: 80vw;
    margin-top: 50px;
}
}

</style>
