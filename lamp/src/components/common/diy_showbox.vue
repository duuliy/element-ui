<template>
  <div class="grid">
    <!--<img :src="imgsrc" alt="">-->
    <figure class="effect-ruby">
      <img :src="imgsrc" alt="">
      <!--<img src="../../../static/diy_goodsimg/show3.jpg" alt=""/>-->
      <figcaption>
        <h2>{{secenname}}</h2>
        <!--<span>智能功能</span>-->
        <p>{{funcname}}</p>
      </figcaption>
    </figure>
  </div>
</template>

<script>
    export default {
        name:'diy_shobox',
      data(){
            return{}
      },
      props:['imgsrc','secenname','funcname']
    }
</script>

<style scoped>
  *, *:after, *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .grid {
    width: 375px;
    height: 330px;
    /*float: left;*/
    /*margin-right: 3%;*/
    /*padding-bottom: 1.8%;*/
    overflow: hidden;
    text-align: center;
  }

  /* Common style */
  .grid figure {
    position: relative;
    z-index: 1;
    display: inline-block;
    overflow: hidden;
    /*margin: -0.135em;*/
    width: 100%;
    height: 100%;
    background: rgba(61, 61, 61, 0.5);
    text-align: center;
    cursor: pointer;
  }

  .grid figure img {
    position: relative;
    display: block;
    min-height: 100%;
    /*opacity: 0.8;*/
  }

  .grid figure figcaption {
    padding: 2em;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.25em;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
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

  .grid figure h2 {
    word-spacing: -0.15em;
    font-weight: 300;
    visibility: hidden;
  }

  .grid figure h2,
  .grid figure p {
    margin: 0;
  }

  .grid figure p {
    letter-spacing: 1px;
    font-size: 75%;
    /*color: rgb(255, 122, 85);*/
  }
  /*.grid figure span{*/
    /*letter-spacing: 1px;*/
    /*font-size: 18px;*/
    /*text-align: center;*/
    /*display: block;*/
    /*width: 100%;*/
    /*visibility: hidden;*/
    /*!*outline: 1px solid red;*!*/
  /*}*/
  /*---------------*/
  /***** Ruby *****/
  /*---------------*/

  figure.effect-ruby {
    background-color: rgb(52, 52, 52);
  }

  figure.effect-ruby img {
    /*opacity: 0.7;*/
    width: 100%;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: scale(1.15);
    transform: scale(1.15);
  }

  figure.effect-ruby:hover img {
    opacity: 0.5;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  figure.effect-ruby h2{
    margin-top: 5%;
    -webkit-transition: -webkit-transform 0.35s;
    transition: transform 0.35s;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  figure.effect-ruby p {
    margin: 1em 0 0;
    padding: 3em;
    border: 1px solid #fff;
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: translate3d(0, 20px, 0) scale(1.1);
    transform: translate3d(0, 20px, 0) scale(1.1);
  }

  figure.effect-ruby:hover h2{
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  figure.effect-ruby:hover p {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0) scale(1);
    transform: translate3d(0, 0, 0) scale(1);
  }
</style>
