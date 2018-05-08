<template>
  <div>
    <figure class="effect-ruby">
      <img src="../../../static/diy_goodsimg/show3.jpg" alt=""/>
      <figcaption>
        <h2>客厅</h2>
        <p>Lily likes to play with crayons and pencils</p>
      </figcaption>
    </figure>
  </div>
</template>

<script>
    export default {
        name:'diygoodsshow',
      props:['imgsrc','secenname','funcname']
    }
</script>

<style scoped>
  /*---------------*/
  /***** Ruby *****/
  /*---------------*/

  figure.effect-ruby {
    background-color: #17819c;
  }

  figure.effect-ruby img {
    opacity: 0.7;
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

  figure.effect-ruby h2 {
    margin-top: 20%;
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

  figure.effect-ruby:hover h2 {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  figure.effect-ruby:hover p {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0) scale(1);
    transform: translate3d(0, 0, 0) scale(1);
  }
</style>
