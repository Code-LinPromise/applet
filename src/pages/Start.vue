<template>
  <div class="start">
    <TopColor title="附近有闲" svg="#icon-zuojiantou" :iconEvent="goBack" />
    <div class="alltop">
      <ul class="iconArray">
        <li v-for="item in iconArray" class="liIcon" @click="unFinish">
          <svg class="icon arrayli" aria-hidden="true">
            <use :xlink:href=item.icon></use>
          </svg>
          <span class="iconTitle">{{item.title}}</span>
        </li>
      </ul>
      <div class="top">
        <span class="value">{{ refValue }}km</span>
        <van-slider v-model="refValue" @change="onChange" max="50" bar-height="5px" active-color="#ff6f77" button-size="" />
      </div>
      <div class="iconRight">
        <svg class="icon userIcon" aria-hidden="true">
            <use xlink:href="#icon-yonghu"></use>
          </svg>
      </div>
    </div>
    <Button class="searchButton" :loading=refIsLoding v-on:click="searchClick" loading-text="正在搜索">探探附近</Button>
    <div class="searchNone">
      <img  src="../assets/SearchNone.png" alt="" class="searchNoneImg">
      <p class="searchNoneFont">暂无发现</p>
    </div>
    
    <FloatButton :onClick="goAddShoping"/>
  </div>
  
</template>
<script setup lang="ts">
import {useAddData} from "../store/useAddData"
import { ref,onUpdated } from "vue";
import { showToast ,Button,showDialog } from "vant";
import {useRouter} from "vue-router"
import TopColor from "../components/TopColor.vue";
import FloatButton from "../components/FloatButton.vue";
const iconArray = [{ icon: "#icon-goumaipianhao", title: "偏好" },
{ icon: "#icon-liuyan", title: "留言" },
{ icon: "#icon-zhifeiji", title: "纸飞机" }]
const router=useRouter()
const store = useAddData()

onUpdated(()=>{
  store.max=refValue.value
  console.log(store.max)
})
const goAddShoping=()=>{
  router.push("/addshoping")
}
const goBack=()=>{
    router.replace("/welcome")
}
const searchClick=()=>{
  refIsLoding.value=true
  setTimeout(()=>{
    router.push("./commodity")
  },1000)
}
const refValue = ref(5);
const refIsLoding=ref(false)
const onChange = (refValue:string) => showToast('选择当前范围：' + refValue+"km");

const unFinish=()=>{
  showDialog({
  title: '提示',
  message: '暂未开发',
  theme: 'round-button',
  confirmButtonColor:"#63dcd3"
}).then(() => {
  // on close
});
}
</script>
<style scope lang="scss">
.start{
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  .alltop {
  display: flex;
  align-items: center;
  margin-top: 30px;
  .top {
    .value {
      margin-bottom: 15px;
      display: block;
      font-size: 20px;
      color: #ff6f77;
    }
    margin-left: 30px;
    width: 60vw;
    margin-right: 30px;
  }
  .iconRight{
    border-radius: 50%;
    padding: 10px;
    background-color: white;
    position: relative;
    top: 15px;
    margin-right: 10px;
    .userIcon{
    width: 25px;
    height: 25px;
  }
  }
  .iconArray {
    flex-shrink: 0;
    display: flex;
    flex-flow: column;
    .liIcon{
      display: flex;
      flex-flow: column;
      margin: 5px 0;
      align-items: center;
      background-color: white;
      padding: 5px;
      .iconTitle{
        font-size: 14px;
      }
    }
    .arrayli {
      width: 25px;
      height: 25px;
    }
  }
}
.searchButton{
  margin-top: 30px;
  --van-button-small-padding: 10px 30px;
  border-radius: 25px;
  font-size: 20px;
  font-weight: 700;
  color: #63dcd3;
  border: 3px solid #63dcd3;
}
.searchNone{
  margin-top: 30px;
  text-align: center;
  .searchNoneImg{
  width: 60vw;
}
.searchNoneFont{
   font-size: 24px;
}
}

}

</style>
