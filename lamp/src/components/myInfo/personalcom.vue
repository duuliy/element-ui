<template>
  <div>
    <img :src="imgsrc" alt="">
    <p><span>{{pertext}}</span><i>{{pernub}}</i></p>
  </div>
</template>

<script>
    export default {
        name: 'personalcom',
      data () {
            return {}
      },
      props: ['imgsrc','pertext','pernub']
    }

</script>

<style scoped>

  img{
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 0 0 0 15px;
    background-color:#FF7A54 ;
  }
  p{
    font-family: 微软雅黑;
    font-size: 14px;
    margin-top: 5px;
    text-align: center;
    color: #797979;
  }
  i{
    font-style: normal;
    padding: 5px;
    color: #FF7A54;
    font-weight: bold;
  }
</style>
