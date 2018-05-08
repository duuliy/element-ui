<template>
    <div id="app">
        <figure>
          <!-----------------------------------img-->
          <div id="bgDiv">
            <img :src="imgsrc" alt="">
          </div>
          <!-----------------------------------text-->
          <figcaption>
            <p>{{productTitle}}</p>
            <h5>{{productSubtitle}}</h5>
            <span>{{productPrice}}</span>
          </figcaption>
        </figure>
    </div>
</template>

<script>
    export default {
        name: 'app',
      data(){
            return{}
      },
      props:['imgsrc','productTitle','productSubtitle','productPrice']
    }
</script>

<style scoped>
  *{
    font-family: '微软雅黑';
  }
  #app{
    width:40%;
    float:left;
  }
  #bgDiv{
    position: relative;
    width: 478px;
    height: 429px;
    margin: 0 auto;
    background-color:rgb(242,242,242);
  }
  #bgDiv>img{
    position:absolute;
    width:387px;
    height:346px;
    margin: auto;
    top:0;left:0;right:0;bottom: 0;
  }
  figcaption{
    width:70%;
    margin-top:25px;
    margin: 0 auto;
  }
  figcaption>p{
    font-size: 22px;
    color: rgba(51, 51, 51, 0.9);
  }
  h5{
    font-size:14px;
    color: rgba(51, 51, 51, 0.9);
    font-weight: 300;
  }
  span{
    font-size:18px;
    color: rgb(252,119,81);
  }
</style>
