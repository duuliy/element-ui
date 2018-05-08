<template>
    <div id="fourDiv">
      <div id="icon">
        <img @click="toLeft" :src="$host+'uploads/icon1.png'" alt="">
        <img @click="toRight" :src="$host+'uploads/icon.png'" alt="">
      </div>

      <div id="centerDiv">
        <!--<router-link :to="{ path:'/buypages',query:{id:item.goods_id}}">-->
        <figure v-for="(item,index) in fourDivArr">
            <img  :src="$host+fourDIVimg[index]">
          <figcaption>
            <span id="span1">{{spanArr[index]}}</span>
            <span id="span2">￥{{item.price}}</span>
            <p>{{contentArr[index]}}</p>
          </figcaption>
        </figure>
        <!--</router-link>-->
      </div>

    </div>
</template>

<script>
    export default {
        name: 'fourDiv',
      data(){
            return {
              fourDivArr:[],
              fourDIVimg:[],
              spanArr:[],
              contentArr:[],
              num:0
            }
      },
    created(){
          this.$axios.post('/api/showFourDiv.do',{num:this.num})
        .then((resp)=>{
          this.fourDivArr=resp.data;
          this.aaa();
        });
    },
      methods:{
        aaa(){
            this.fourDIVimg=[];
            this.spanArr=[];
            this.contentArr=[];
          //------------------------------------------商品图片
          for(var i=0;i<this.fourDivArr.length;i++){
            this.fourDIVimg.push(this.fourDivArr[i].goods_img.split(",")[0]); //字符分割
          }
          //------------------------------------------商品描述
          for(var i=0;i<this.fourDivArr.length;i++) {
            this.spanArr.push(this.fourDivArr[i].goods_text.split(";")[0]);
            this.contentArr.push(this.fourDivArr[i].goods_text.split(";")[0]);
          }
        },
        toLeft(){
            if(this.num==0){
              this.num=24;
            }
              this.num = this.num - 4;
              this.$axios.post('/api/jianNum.do', {num: this.num})
                .then((resp) => {
                  this.fourDivArr=[];
                  this.fourDivArr=resp.data;
                  this.aaa();
                }
                )
        },
        toRight(){
            if(this.num==24){
              this.num=0;
            }
          this.num = this.num + 4;
          this.$axios.post('/api/addNum.do', {num: this.num})
            .then((resp) => {
              this.fourDivArr=[];
              this.fourDivArr=resp.data;
              this.aaa();
            })
        },
//        tiaozhuan(id){
//            console.log('goodsid',id)
//        }
      }
    }
</script>

<style scoped>
  #fourDiv{
    clear:left;
    width: 100%;
    position: relative;
  }
  /*箭头*/
  #icon{
    width: 100%;
    height:40px;
    position: absolute;
    z-index: 99;
    top:40%;
  }
  #icon>img{
    width:4%;
  }
  #icon>img:hover{
    cursor:pointer;
  }
  #icon img:nth-of-type(1){
    display:block;
    float:left;
    margin-left:1.5%;
  }
  #icon img:nth-of-type(2){
    display:block;
    float:right;
    margin-right:2%;
  }
  /*四张图片*/
  #centerDiv{
    clear:left;
    width: 89%;
    margin: 0 auto;
    display: -webkit-box;
  }
  figure{
    -webkit-box-flex:1;
    padding-top:4%;
  }
  figure>img{
    display: block;
    margin: 0 auto;
    width:250px;
    height: 230px;
  }
  span{
    font-size:14px;
    font-weight: bold;
  }
  #span1{
    color: rgba(51, 51, 51, 0.95);
  }
  #span2{
    color:#ff7a55;
    display: inline-block;
    float:right;
    padding-right: 13%;
  }
  figcaption{
    padding-top: 5%;
    padding-left: 10%;
    width:250px;
    display: block;
    margin: 0 auto;
  }
  figcaption>p{
    font-size:12px;
    line-height:40px;
    color: rgba(51, 51, 51, 0.8);
  }
</style>
