<template>
  <div>
    <img :src="imgsrc" alt="">
    <h3>{{title}}</h3>
    <p class="acc">{{account}}</p>
    <p>￥{{price}}</p>
  </div>
</template>

<script>
    export default {
        name: 'buymaybe',
        data () {
            return {}
        },
      props:['imgsrc','title','account','price']
    }

</script>

<style scoped lang="less">
  div{
    width: 300px;
    height: 250px;
    box-shadow:0 2px 4px #cccccc;
    float: left;
    text-align: center;
    margin-left: 10px;
  }
  img{
    width: 185px;
    height: 135px;
  }
  h3,p{
    margin-top: 5px;
    color: #797979;
  }
  .acc{
    font-size: 14px;
    width: 250px;
    margin: 5px auto;
  }
  p:last-child{
    color: #ff6700;
    font-size: 18px;
  }
</style>
