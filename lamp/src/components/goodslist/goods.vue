<template>
  <!--<router-link :to="{ path:'/AppDownload',query:{id:goods_id}}">-->
    <div class="goods">
        <div class="goods_one">
          <img :src="$host+goods_src" alt="">
            <div class="all">
              <router-link :to="{ path:'/buypages',query:{id:goods_id}}">
              <div class="look"><span>查看详情</span></div>
              </router-link>
              <div class="addCart"><span @click="addCart">加入购物车</span></div>
            </div>
        </div>
       <div class="miaoshu">
         <h2 class="biaoti">{{goods_name}}</h2>
         <p>{{goods_present}}</p>
         <span>￥{{goods_price}}</span>
       </div>

    </div>
  <!--</router-link>-->
</template>

<script>
  export default {
      name: 'goods',
      props: ["goods_id",'goods_src','goods_name','goods_present','goods_price'],
      methods:{
        addCart(){
            this.$emit('addCart')
        }
      }

  }
</script>

<style scoped>
  .goods_one:hover >img{
    transform: scale(1.1);
  }
  .goods_one:hover >div{
    bottom:0;
    opacity: 1;
  }
   .goods{
    width:45%;
    float:left;
    margin-left:5%;
    /*padding-left:2%;*/
  }
  a{
    /*text-decoraction: none;*/
    text-decoration:none;
  }
  .biaoti{
    color:#2e2e2e;
    text-decoration:none;
    margin-top:6%;
    padding-left:8%;
    padding-right:8%;
    text-align: center;
    font-size: 22px;
  }
  .miaoshu{
    text-align: center;
    /*margin-bottom: 30px;*/
  }
  .miaoshu h2{
    margin-top: 10px;
    margin-bottom: 10px;
    color: #222222;
  }
  .miaoshu span{
    display: inline-block;
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: bold;
    margin-top: 10px;
    color: #ff6751;
  }
  .miaoshu p{
    width: 300px;
    overflow: hidden;
    margin: 0px auto;
    color: #989898;
    line-height: 30px;
  }
  .goods p:nth-child(3){
    margin-top:6%;
    padding-left:8%;
    padding-right:8%;
    font-size: 13px;
    text-align: center;
    color:gray;
  }
  .goods p:nth-child(4){
    margin-top:6%;
    margin-bottom:6%;
    font-size: 22px;
    color:#ff7a55;
    text-align: center;
  }
.goods_one{
  width: 552px;
  position: relative;
  overflow: hidden;
  height:430px;
  background-color: #f0f0f0;
  text-align: center;
  display: table-cell;
  vertical-align: middle;

}
  .goods_one img{

    width:50%;
    height: 50%;
    transition:all linear .2s ;
  }
  img{
    width:100%;
    height:100%;
  }
  .look{
    width:50%;
    z-index: 99;
    position: absolute;
    bottom:0;
    left:0;
    text-align: center;
    height:100%;
    line-height: 50px;
    color:white;
    background-color:rgba(255,103,81,.8);
  }
  .look:before{
    content: "";
    width:100%;
    height:96%;
    position: absolute;
    left:0;
    opacity: 0;
    z-index: -2!important;
    transition: all linear .2s;
    transform: scale(0);
    background-color: white;
    border: 1px solid rgba(255,103,81,1);
  }
  .look:hover::before{
    transform: scale(1);
    opacity: 1;
  }
  .look:hover >span{
    color:#ff6751;
  }
  .addCart{
    width:50%;
    z-index: 99;
    position: absolute;
    bottom:0;
    right:0;
    text-align: center;
    line-height: 50px;
    height:100%;
    color:white;
    background-color:rgba(255,103,81,1);
  }
  .addCart:before{
    content: "";
    width:100%;
    height:96%;
    position: absolute;
    left:0;
    opacity: 0;
    z-index: -2!important;
    transition: all linear .2s;
    transform: scale(0);
    background-color: white;
    border: 1px solid rgba(255,103,81,1);
  }
  .addCart:hover::before{
    transform: scale(1);
    opacity: 1;
  }
  .addCart:hover >span{
    color:#ff6751;
  }
  .all{
    height:50px;
    position: absolute;
    bottom:-50px;
    width:100%;
    transition: all linear .2s;
    opacity: 0;
  }
</style>
