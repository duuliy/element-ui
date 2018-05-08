<template>
  <div id="threeImg">
   <div id="title">
     <h1>智能配件</h1>
     <h3>小小配件，随意搭配，让智能改善你的生活</h3>
   </div>
    <div id="img">
      <figure v-for="(item,index) in threeArr">
        <!--<img :src="item.img" alt="">-->
        <img  :src="$host+threeimg[index]" alt="">

        <figcaption>
          <p>{{spanArr[index]}}</p>
          <p>{{contentArr[index]}}</p>

          <div v-if="index==0">
            <router-link to="/funRecommend" tag="div">
              <!----------------引用button---------------->
              <btn btnC="btn1a" :btntext="threeImgArr[index].text"></btn>
            </router-link>
          </div>
          <div v-if="index==1">
            <router-link to="/GoodsList" tag="div">
              <!----------------引用button---------------->
              <btn btnC="btn1a" :btntext="threeImgArr[index].text"></btn>
            </router-link>
          </div>
          <div v-if="index==2">
            <router-link to="/divshow" tag="div">
              <!----------------引用button---------------->
              <btn btnC="btn1a" :btntext="threeImgArr[index].text"></btn>
            </router-link>
          </div>

        </figcaption>
      </figure>
  </div></div>
</template>

<script>
  import btn from '../btn/btndemo.vue'
  export default {
    name: 'threeImg',
    components:{
      btn:btn
    },
    data(){
      return {
        threeImgArr:[{id:1,img:'static/indeximages/p3.png',span1:'智能控温',pContent:'根据不同的季节调节最适合的温度',text:'更多功能'}
          ,{id:2,img:'static/indeximages/p1.png',span1:'安全检测',pContent:'可以智能检测空气中的各种有害物质',text:'更多配件'}
          ,{id:3,img:'static/indeximages/p2.png',span1:'助眠功能',pContent:'根据时间不同调节不同的亮度帮助睡眠',text:'DIY商城'}
        ],
        gongGArr:[],
        threeArr:[],
        threeimg:[],
        spanArr:[],
        contentArr:[]
      }
    },
    created(){
      this.$axios.post('/api/threeDiv.do')
        .then((resp)=>{
          this.threeArr=resp.data;
//         console.log( this.threeArr);
          //------------------------------------------商品图片
          for(var i=0;i<this.threeArr.length;i++){
            this.threeimg.push(this.threeArr[i].goods_img.split(",")[0]); //字符分割
            console.log(this.threeArr[i].goods_img);

          }
        });


      this.$axios.post('/api/threeDiv2.do').then((resp)=>{
        this.gongGArr=resp.data;
//        console.log( this.gongGArr);
        //------------------------------------------商品描述
        for(var i=0;i<this.gongGArr.length;i++) {
          this.spanArr.push(this.gongGArr[i].act_name);
          this.contentArr.push(this.gongGArr[i].info);
        }
      });

    },
  }
</script>

<style scoped>
  #threeImg{
    width: 100%;
    position: relative;
    height: 600px;
  }
  #img{
    margin: 0 auto;
    width:90%;
    display: -webkit-flex;

  }
  #title{
    width: 100%;
    text-align: center;
  }
  h1{
      margin-top:4%;
      font-size: 30px;
      color: rgba(51, 51, 51, 0.8);
      font-weight: 300;
  }
  h3{
      margin-top:2%;
      font-size: 16px;
      color: rgba(51, 51, 51, 0.6);
      font-weight: 600;
  }
  /*3张图片*/
  figure{
    display: flex;
    margin: 0 auto;
    margin-top:4%;
  }
  figure>img{
    display: block;
    width:250px;
    height: 230px;
  }
  /*文字*/
  figcaption{
    position: absolute;
    text-align: center;
    top:65%;
  }
  figcaption>p{
    line-height:40px;
  }
  figcaption p:nth-of-type(1){
    font-size: 18px;
    color: rgba(51, 51, 51, 0.8);
    font-weight:600;
  }
  figcaption p:nth-of-type(2){
    font-size: 16px;
    font-weight: 600;
    margin-bottom:10%;
    color: rgba(51, 51, 51, 0.6);
  }

</style>
