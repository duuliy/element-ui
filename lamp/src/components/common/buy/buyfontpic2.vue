<template>
  <figure>
    <img :src="imgsrc" alt="">
    <figcaption>
      <h1>{{title}}</h1>
      <p>{{mycont}}</p>
    </figcaption>
  </figure>
</template>

<script>
    export default {
      name: 'buyfontpic2',
      data () {
            return {}
      },
      props: ['imgsrc','title','mycont']
    }

</script>

<style scoped>
  figure{
    position: relative;
    font-size: 0;
  }
  img{
    width: 100%;
    height: 520px;
  }
  figcaption{
    width:32%;
    height: 150px;
    text-align: center;
    position: absolute;
    top: 32%;
    right: 10%;
  }
  h1{
    color: white;
    font-size: 30px;
  }
  p{
    color: white;
    font-size: 15px;
    margin-top: 20px;
  }
</style>
