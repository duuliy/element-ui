<template>
  <figure>
    <figcaption>
      <p>订单编号: <span>{{orderbh}}</span></p>
      <p>下单时间: <span>{{ordertime}}</span></p>
    </figcaption>
    <img :src="imgsrc" alt="">
    <slot name="shenqin">

    </slot>

  </figure>

</template>

<script>
    export default {
        name: 'apporders',
        data () {
            return {}
        },
      props: ['orderbh','ordertime','imgsrc']
    }

</script>

<style scoped lang="less">
  *{
    font-size: 14px;
    color: #656565;
  }
  figure {
    width: 210px;
    height: 170px;
     figcaption{
      width: 205px;
      height: auto;
      margin: auto;
       >p{
         margin-top:10px;
       }
    }
    img{
      width: 180px;
      height: 85px;
      margin: 10px 6px;
    }
    button{
      background-color:transparent;
      border: 1px solid #FF7A55;
      color:#FF7A55 ;
      width: 68px;
      height: 28px;
      border-radius: 2px;
      margin: 10px 6px;
      cursor: pointer;
      outline:none;
    }
  }
</style>
