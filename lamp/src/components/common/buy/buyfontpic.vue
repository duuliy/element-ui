<template>
  <figure>
    <img :src="imgsrc" alt="">
    <figcaption>
      <h1>{{mytitle}}</h1>
      <p>{{myp}}</p>
    </figcaption>
  </figure>
</template>

<script>
    export default {
      name: 'buypic',
      data () {
            return {}
      },
      props: ['imgsrc','mytitle','myp']
    }

</script>

<style scoped lang="less">
  figure{
    position: relative;
  }
  img{
    width: 100%;
    height: 520px;
  }
  figcaption{
    position: absolute;
    top: 32%;
    left: 12%;
    width: 400px;
    height: 150px;
    h1{
      color: white;
      font-size: 30px;
    }
    p{
      color: white;
      font-size: 15px;
      margin-top: 20px;
    }
  }
</style>
