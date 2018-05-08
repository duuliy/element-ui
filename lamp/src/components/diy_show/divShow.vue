<template>
  <div id="divshow">
    <div class="divshow_top">
      <div>
        <div>
          <h2>DIV 定制展示</h2>
          <h3>来 自 最 完 美 的 团 队</h3>
        </div>
      </div>
      <img src="static/images/down.png" alt="">
    </div>
    <div class="divshow_middle">
      <h1>经典案列</h1>
      <h3>每一个灯具都是我们设计师经过精心的设计，在与顾客的沟通中了解到用户最想要的设计风格和样式</h3>
      <div class="imgshow ">
        <ul>
          <li >
            <div class="grid">
            <figure class="effect-marley">
            <img :src="$host+dIVimg[0]">
              <figcaption>
                <h2>{{spanArr[0]}}</h2>
                <p>{{contentArr[0]}}</p>
              </figcaption>
            </figure>
            </div>
          </li>
          <li>
            <div class="grid">
              <figure class="effect-marley">
                <img :src="$host+dIVimg[1]">
                <figcaption>
                  <h2>{{spanArr[1]}}</h2>
                  <p>{{contentArr[1]}}</p>
                </figcaption>
              </figure>
            </div>
          </li>
          <li>
            <div class="grid">
              <figure class="effect-marley">
                <img :src="$host+dIVimg[2]">
                <figcaption>
                  <h2>{{spanArr[2]}}</h2>
                  <p>{{contentArr[2]}}</p>
                </figcaption>
              </figure>
            </div>
          </li>
          <li>
            <div class="grid">
              <figure class="effect-marley">
                <img :src="$host+dIVimg[3]">
                <figcaption>
                  <h2>{{spanArr[3]}}</h2>
                  <p>{{contentArr[3]}}</p>
                </figcaption>
              </figure>
            </div>
          </li>
          <li>
            <div class="grid">
              <figure class="effect-marley">
                <img :src="$host+dIVimg[4]">
                <figcaption>
                  <h2>{{spanArr[4]}}</h2>
                  <p>{{contentArr[4]}}</p>
                </figcaption>
              </figure>
            </div>
          </li>
          <li>
            <div class="grid">
              <figure class="effect-marley">
                <img :src="$host+dIVimg[5]">
                <figcaption>
                  <h2>{{spanArr[5]}}</h2>
                  <p>{{contentArr[5]}}</p>
                </figcaption>
              </figure>
            </div>
          </li>
        </ul>
        <div  id="secondDiv">
          <ul id="secondUl">
          <li>
            <div class="grid">
              <figure class="effect-marley">
                <img :src="$host+dIVimg2[0]">
                <figcaption>
                  <h2>{{spanArr[0]}}</h2>
                  <p>{{contentArr[0]}}</p>
                </figcaption>
              </figure>
            </div>
            </li>
          <li>
            <div class="grid">
              <figure class="effect-marley">
                <img :src="$host+dIVimg2[1]">
                <figcaption>
                  <h2>{{spanArr[1]}}</h2>
                  <p>{{contentArr[1]}}</p>
                </figcaption>
              </figure>
            </div>
          </li>
          <li>
            <div class="grid">
              <figure class="effect-marley">
                <img :src="$host+dIVimg2[2]">
                <figcaption>
                  <h2>{{spanArr[2]}}</h2>
                  <p>{{contentArr[2]}}</p>
                </figcaption>
              </figure>
            </div>
          </li>
          <li>
            <div class="grid">
              <figure class="effect-marley">
                <img :src="$host+dIVimg2[3]">
                <figcaption>
                  <h2>{{spanArr[3]}}</h2>
                  <p>{{contentArr[3]}}</p>
                </figcaption>
              </figure>
            </div>
          </li>
          <li>
            <div class="grid">
              <figure class="effect-marley">
                <img :src="$host+dIVimg2[4]">
                <figcaption>
                  <h2>{{spanArr[4]}}</h2>
                  <p>{{contentArr[4]}}</p>
                </figcaption>
              </figure>
            </div>
          </li>
          <li>
            <div class="grid">
              <figure class="effect-marley">
                <img :src="$host+dIVimg2[5]">
                <figcaption>
                  <h2>{{spanArr[5]}}</h2>
                  <p>{{contentArr[5]}}</p>
                </figcaption>
              </figure>
            </div>
          </li>
        </ul>

        </div>
      </div>
      <div id="button" @click="getAll">
        <btn btnC="btn1a" btntext='加载更多'></btn>

      </div>
      <div id="button2">
        <btn btnC="btn1a" btntext='前往定制' @submit="dingzhi"></btn>

      </div>

    </div>
    <div class="divshow_bottom">
      <h1>设计师团队</h1>
      <shejishi v-for="item in shejishi" :key="item.id" :imgsrc="item.imgsrc" :title="item.title" :neirong="item.neirong"></shejishi>
    </div>
  </div>
</template>

<script>
  import btn from '../common/btn/btndemo.vue'
  import shejishi from './shejishi.vue'
    export default {
        name:'divshow',
      data(){
            return{
                shejishi2:[],
              dIVimg:[],
              dIVimg2:[],
              shejishiArr:[],
              num:0,
              spanArr:[],
              contentArr:[],
              shejishi:[
                {id:0,imgsrc:'static/images/shejishi1.png',title:'Tristique',neirong:'Meet the maker of our oranges – Tristique. It’s his juicy oranges from Mildura, Victoria that you’ll find in your fresh fruit delivery at Organici Store.'},
                {id:1,imgsrc:'static/images/shejishi2.png',title:'Tristique',neirong:'Meet the maker of our bread – our fabulous baker boy, Alberto Trombin. He creates superb bread in their Melbourne-based bread-quarters.'},
                {id:2,imgsrc:'static/images/shejishi3.png',title:'Tristique',neirong:'Meet the maker of our bread – our fabulous baker boy, Alberto Trombin. He creates superb bread in their Melbourne-based bread-quarters.'},

              ]
            }
      },
      components:{
        shejishi:shejishi,
        btn:btn
      },
      created(){
          //------------------成品展示
        this.$axios.post('/api/getAllGoods.do',{num:this.num})
          .then((resp)=>{
            this.shejishiArr=resp.data;
            console.log(resp.data);
            //------------------------------------------商品图片
            for(var i=0;i<this.shejishiArr.length;i++){
              this.dIVimg.push(this.shejishiArr[i].goods_img.split(",")[2]); //字符分割
            }
            //------------------------------------------商品描述
            for(var j=0;j<this.shejishiArr.length;j++) {
              this.spanArr.push(this.shejishiArr[j].goods_text.split(";")[0]);
              this.contentArr.push(this.shejishiArr[j].goods_text.split(";")[1]);
            }
          });
      },
      methods:{
        getAll(){
            document.getElementById("secondDiv").style.opacity="1";
            document.getElementById("button").style.display="none";
            document.getElementById("button2").style.display="block";
            document.getElementById("secondDiv").style.height="730px";
          this.num=6;
          this.$axios.post('/api/getAllGoods2.do',{num:this.num}).then(resp=>{
            this.shejishi2=resp.data;
            //------------------------------------------商品图片
            for(var i=0;i<this.shejishi2.length;i++){
              this.dIVimg2.push(this.shejishi2[i].goods_img.split(",")[2]); //字符分割
            }
          });
        },
        dingzhi(){
            this.$router.push('/startDiy')
        }
      }

    }
</script>

<style scoped lang="less">
  .shijishi{
    float: left;
    margin-left: 27px;
  }
  .shijishi:nth-of-type(1){
    margin-left: 0px;
  }

  #divshow{
    h1{
      color: rgba(51, 51, 51, 0.8);
      padding-top: 50px;
      padding-bottom:15px;
      font-size: 30px;
      font-weight: 300;
    }
    h3{
      font-size: 16px;
      padding-bottom:25px;
      color: rgba(51, 51, 51, 0.6);
      font-weight: 600;
    }
    margin-bottom: 60px;
      .divshow_top{
        height: 650px;
        width: 100%;
        background-image: url("../../../static/images/diylunbo.png");
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        >img{
          margin-top: 20px;
          margin-left: 350px;
          cursor: pointer;
        }
        >div{
          margin-top: 220px;
          margin-left: 240px;
          width: 255px;
          height: 185px;
          border: 1px solid #999999;
          background-color: white;
          >div{
            width: 235px;
            height: 165px;
            background-color: #999999;
            margin-left: 10px;
            margin-top: 10px;
            color: white;
            text-align: center;
            overflow: hidden;
            h2{
              margin-top: 40px;
              margin-bottom: 20px;
            }
          }
        }
      }
    .divshow_middle{
      text-align: center;

      .imgshow{
        width: 962px;
        margin: 0px auto;
        /*height: 660px;*/
        overflow: hidden;
        /*border: 1px solid black;*/

        ul>li{
          float: left;
          width: 300px;
          height: 410px;
          /*border: 1px solid orange;*/
          list-style: none;
          margin-right: 27px;
          margin-bottom: 27px;
          &:nth-child(3n){
            margin-right: 0px;
          }
          &:nth-of-type(2),&:nth-of-type(5){
            height: 355px;
          }
          &:nth-of-type(4),&:nth-of-type(6){
            height: 300px;
          }
          &:nth-of-type(5){
            margin-top: -55px;
          }
        }

        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .divshow_bottom{
      width: 962px;
      margin: 0px auto;
      height: 660px;
      /*border: 1px solid black;*/
      text-align: center;
    }
  }
  #secondDiv{
    clear:left;
    overflow: hidden;
    height: 30px;
    opacity: 0;
    transition: all .6s linear;
  }
  #button2{
    padding-top:5%;
    display: none;
  }
  //----------------------------------------css

  .grid {
    overflow: hidden;
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;
    text-align: center;
    float: left;
  }

  /* Common style */
  .grid figure {
    position: relative;
    z-index: 1;
    display: inline-block;
    overflow: hidden;
    margin: -0.135em;
    /*width: 33.333%;*/
    width: 100%;
    height: 400px;
    background: #3085a3;
    text-align: center;
    cursor: pointer;
  }

  .grid figure img {
    position: relative;
    display: block;
    min-height: 100%;
    opacity: 0.8;
  }

  .grid figure figcaption {
    padding: 2em;
    color: white;
    text-transform: uppercase;
    font-size: 1em;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  figcaption>h2{
    font-size: 18px;
  }

  .grid figure figcaption::before,
  .grid figure figcaption::after {
    pointer-events: none;
  }

  .grid figure figcaption,
  .grid figure a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .grid figure a {
    z-index: 1000;
    text-indent: 200%;
    white-space: nowrap;
    font-size: 0;
    opacity: 0;
  }

  .grid figure h2 {
    word-spacing: -0.15em;

    font-weight: 300;
  }

  .grid figure h2 span {
    font-weight: 800;
  }

  .grid figure h2,
  .grid figure p {
    margin: 0;
  }

  .grid figure p {
    letter-spacing: 1px;
    font-size: 68.5%;
  }
  /*---------------*/
  /***** Marley *****/
  /*---------------*/

  figure.effect-marley figcaption {
    text-align: right;
  }

  figure.effect-marley h2,
  figure.effect-marley p {
    position: absolute;
    right: 100px;
    left:10px;
    padding: 10px 0;
  }

  figure.effect-marley p {
    bottom:200px;
    line-height: 1.5;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  figure.effect-marley h2 {
    top: 30px;
    -webkit-transition: -webkit-transform 0.35s;
    transition: transform 0.35s;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  figure.effect-marley:hover h2 {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  figure.effect-marley h2::after {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 2px;
    background: #fff;
    content: '';
    -webkit-transform: translate3d(0, 40px, 0);
    transform: translate3d(0, 40px, 0);
  }

  figure.effect-marley h2::after,
  figure.effect-marley p {
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
  }

  figure.effect-marley:hover h2::after,
  figure.effect-marley:hover p {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  figcaption>p{
    color:white;
    font-size: 22px;
    font-weight: 500;
  }
li{
  overflow: hidden;
}
</style>
