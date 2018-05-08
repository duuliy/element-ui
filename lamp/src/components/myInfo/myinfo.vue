<template>
    <div class="myInfo">
      <ul class="my-btn">
          <router-link to="#" tag="li" class="b-title">个人中心</router-link>
          <router-link to="/myinfo/personal" tag="li" active-class="myli">我的资料</router-link>
          <router-link to="#" tag="li" class="b-title">订单中心</router-link>
          <router-link to="/myinfo/myorder" tag="li" active-class="myli">我的订单</router-link>
          <router-link to="/myinfo/myadress" tag="li" active-class="myli">收货地址</router-link>
          <router-link to="#" tag="li" class="b-title">售后服务</router-link>
          <router-link to="/myinfo/myhelp" tag="li" active-class="myli">服务记录</router-link>
          <router-link to="/myinfo/myapplication" tag="li" active-class="myli">申请售后</router-link>
      </ul>
      <div class="my-text">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
//  import  personal from '@/components/myInfo/personal.vue'
    export default {
        name: 'myinfo',
        data() {
            return {}
        },
      compontents:{
//        personal:personal
      },
//      created(){
//            console.log("demo")
//        this.$axios.get('api/usercheck.do').then(resp=>{
//            console.log('aa')
//        })
//      }

      methods:{
//        trigger (obj) {
//            var lilist=document.getElementsByClassName("myli");
//            for(var i=0;i<lilist.length;i++){
//                console.log(1111)
//                if(obj!=i){
//                    lilist[i].style.backgroundColor="white";
//                    lilist[i].style.color="#797979"
//                }else{
//                  lilist[i].style.backgroundColor="#FF7A54"
//                  lilist[i].style.color="white"
//                }
//            }
//        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../assets/less/myinfo.less";
  .myInfo{
    background-color: @back-color;
    overflow: hidden;
    .my-btn{
      float: left;
      width:150px;
      height: auto;
      margin-left: 6vw;
      margin-top: 30px;
      margin-bottom: 30px;
      background-color: white;
      border-radius: 2px;
      li{
        width: 100%;
        height: 50px;
        list-style-type: none;
        line-height: 50px;
        color: @font-black;
        text-align: center;
      }
      li:not(.b-title):hover{
        cursor: pointer;
      }
      .b-title{
        font-weight: bold;
      }
    }
    .my-text{
      width: 1000px;
      margin-left: 30px;
      float: left;
      margin-top: 30px;
      overflow: hidden;
    }
  }
  .myli{
    background-color: rgba(255, 122, 84, 0.21);
    color: white;
  }

</style>
