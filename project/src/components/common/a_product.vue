<template>
  <div>
    <div class="title">
      <div class="left">
        <!--<img :src="'apj'+detaildata[0].pro_img1" alt="" @click="nowimg(1)" class="img1">-->
        <!--<img :src="'apj'+detaildata[0].pro_img2" alt="" @click="nowimg(2)" class="img2">-->
        <!--<img :src="'apj'+detaildata[0].pro_img3" alt="" @click="nowimg(3)" class="img3">-->
      </div>
      <div class="right">

      </div>
    </div>
    <h3>关于产品</h3>
    <div id="line"></div>
    <h5>知道更多关于我们</h5>
    <div class="bottom tomm">
  <product_specially class="list" v-for="item in productlist" :key="item.g_id" :productTitle="item.g_name" :productPrice="item.g_detail"
                     :imgsrc="item.g_img" whclass="b"
  ></product_specially>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  /*====商品特效=====*/
  import product_specially from "./product_specially.vue"
    export default{
      data () {
        return {
//          productArr: [
//            {id: 1, name: '产品1', img: 'gy_pro1.jpg', price: 30},
//            {id: 2, name: '产品2', img: 'gy_pro2.jpg', price: 50},
//            {id: 3, name: '产品3', img: 'gy_pro3.jpg', price: 20},
//            {id: 4, name: '产品4', img: 'gy_pro4.jpg', price: 60}
//          ]
        }
      },
      components: {
        product_specially:product_specially
      },
      computed:{
        ...mapGetters(['productlist'])
      },
      created () {
        this.$store.dispatch("getData",this)
      }
    }
</script>

<style scoped lang="less">
  .bottom{
    float: left;
    margin-top:25px;
    margin-left: 10%;
    margin-bottom: 45px;
  #line{
    width: 80px;
    border: 0.5px solid black;
    margin: 0 auto;
  }
  .list{
    float: left;
    margin-left: 23px;
    margin-top: 25px;
  }}
</style>
