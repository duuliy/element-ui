<template>
  <div>
    <h3>全屋套装方案</h3>
    <div id="line"></div>
    <h5>Full house suit</h5>
    <div class="top">
      <product_speciallytwo class="img"   v-for="item in productArr3" :key="item.id" :productTitle="item.name" :imgsrc="item.img"
                            whclass="a"
      ></product_speciallytwo>
      <div class="warp">
        <div class="content one">
        <b>商品详细的介绍</b>

        <p>
          &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;现在的电视越来越有趣了。您可以用它来玩游戏、看网络电影、浏览因特网……但您是否感觉屋子似乎已被各种电线、卫星盒子、DVD和遥控器占领？值得庆幸的是，我们的电视架和电视柜会帮您收拾乱局，让家里变得井井有条。它们能装下各种物品，包括可收纳各类电线的电线整理装置、不阻隔遥控的玻璃门等。这样您就可以舒舒服服地观看电视，即便不打开电视，只看这些家具都是一种享受。
        </p>
        </div>
      </div>
    </div>
    <div class="medu">
      <div class="warp">
        <div class="content">
        <b>商品详细的介绍</b>
        <p>
          &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;从舒适的床上醒来能让您拥有最佳状态，迎接美好的一天。一张足够大能让您完全伸展，又足够舒适能让您安然入眠的床。还有储物空间可放下您需要的所有物品，因而窝在床上后就无需再起来了。此外，它还可使用数年，当然它的款式也会让您一直爱不释手。
更多卧室系列，尽在Alnuss。
        </p>
        </div>
      </div>
      <!--<img src="../../../static/images/fabulous-design-ideas-of-convertible-furniture-for-small-spaces-with-brown-w.jpg" alt="">-->
      <product_speciallytwo class="img"  v-for="item in productArr2" :key="item.id" :productTitle="item.name" :imgsrc="item.img"
      ></product_speciallytwo>
    </div>
    <div class="bottom">
      <product_speciallytwo class="list" v-for="item in roomlist" :key="item.id" :productTitle="item.c_name" :imgsrc="item.c_img"
      ></product_speciallytwo>

      <!--<div class="list">-->
        <!--<img src="../../../static/images/fabulous-design-ideas-of-convertible-furniture-for-small-spaces-with-brown-w.jpg" alt="">-->
        <!--<p>-->
          <!--此项目位于高新区，成都市高新，为用户带来便利-->
        <!--</p>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  /*====商品特效2=====*/
  import product_speciallytwo from "../common/product_speciallytwo.vue"
    export default{
      data () {
        return {
//          productArr: [
//            {id: 1, name: '定制1', img: 'wj_007.jpg', price: 30},
//            {id: 2, name: '定制2', img: 'wj_08.jpg', price: 50},
//            {id: 3, name: '定制3', img: 'wj_10.jpg', price: 20}
//          ],
          productArr2: [
            {id: 4, name: '觉色梦幻', img: 'wj_15.jpg', price: 30}
          ],
          productArr3: [
            {id: 5, name: '极简极色', img: 'wj_16.jpg', price: 30}
          ]
        }},
      computed:{
        ...mapGetters(['roomlist'])
      },
      components: {
        product_speciallytwo
      },
      created () {
        this.$store.dispatch("getroomData",this)
      }
    }
</script>

<style scoped lang="less">
  .warp>p{
    margin-top: 55px;
  }
  div{
    font-family: 微软雅黑;
    overflow: hidden;
  }
  #line{
    width: 80px;
    border: 0.5px solid black;
    margin: 0 auto;
  }
  .top{
    float: right;
  }
  .medu{
    float: left;
  }
  .img{
    width: 500px;
    height: 260px;
    display: inline-block;
  }
  .warp{
    width: 673px;
    height: 260px;
    background-color: #f7f7f7;
    display: inline-block;
    right: 0;
  }
  .content{
    width: 500px;
    height: 260px;
    float:right;
  }
  .one{
    float:left;
  }
  .bottom{

    float: left;
    margin-top: 25px;
    margin-left: 142px;
    .list{
      /*border:1px solid #c3c3c3;*/
      float: left;
      margin-left: 26px;
      /*width: 318px;*/
      /*height: 272px;*/
      img{
        /*width: 318px;*/
        /*height: 199px;*/
      }
    }
  }
</style>
