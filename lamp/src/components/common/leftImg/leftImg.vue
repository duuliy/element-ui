<template>
    <div id="leftImg">
      <div id="left">
        <img  :src="$host+'uploads/gdfgdfg.png'" alt="">
      </div>
      <div id="right">
        <h1>案例灯饰</h1>
        <h4>智能创意，简而不凡</h4>
        <p>融入创意和智能的灯具，一抹光亮伴您渡过漫漫长夜，温馨舒适读过每一刻时光，尝试将小幸福充满您的生活。</p>
        <!----------------引用button---------------->
        <router-link to="/GoodsList" tag="div">
        <btn btnC="btn1a" btntext="查看更多案例"></btn>
          </router-link>
      </div>
      <div id="bgDiv">

      </div>
    </div>
</template>

<script>
  import btn from '../btn/btndemo.vue'
    export default {
        name: 'leftImg',
      components:{
        btn:btn
      }
    }
</script>

<style scoped>
  #leftImg{
    position: relative;
    width: 100%;
    margin-top:3%;
  }
  #left{
    float:left;
    width:65%;
  }
  #left>img{
    width:100%;
  }
  #right{
    float:left;
    width:27%;
    margin-left:7%;
  }
  #right>h1{
    font-size:28px;
    font-weight:200;
    color: rgba(51, 51, 51, 0.8);
    margin-top:15%;
  }
  #right>h4{
    margin-top:5%;
    font-size:16px;
    font-weight:200;
    color: rgba(51, 51, 51, 0.75);
  }
  #right>p{
    margin-top:5%;
    font-size:14px;
    font-weight:200;
    line-height:24px;
    width:75%;
    color: rgba(51, 51, 51, 0.7);
    margin-bottom:12%;
  }
  #bgDiv{
    width: 100%;
    height:470px;
    background-color: rgba(215, 215, 215, 0.5);
    clear: left;
    position: absolute;
    top:400px;
    z-index: -1;
  }
</style>
