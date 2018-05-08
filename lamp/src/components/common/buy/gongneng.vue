<template>
  <div>
    <button :class="choseC" >{{chosetext}}</button>
  </div>
</template>

<script>
    export default {
      name: 'gongneng',
      data () {
        return {
        }
      },
      props: {
        chosetext: {
          type: String,
        },
        choseC: {}
      },
      methods: {

      }
    }

</script>

<style scoped lang="less">
  .chose(@cwidth,@cheight,@cbgcolor,@cbradius){
    width: @cwidth;
    height: @cheight;
    background-color: @cbgcolor;
    border-radius: @cbradius;
  }
  *{
    outline: none;
    font-size: 14px;
    color:#797979;
  }
  .style1{
    text-align: center;
    border: 1px solid #CCCCCC;
    .chose(68px,36px,white,3px);

  }
  .style2{
    border: 1px  solid #CCCCCC;
    .chose(90px,30px,white,3px);

  }
  .style3{
    border: 1px solid #CCCCCC;
    .chose(20px,20px,white,20px)
  }
  .style4{
    border: none;
    .chose(20px,20px, #feb19a,20px)
  }
  .style5{
    border: none;
    .chose(20px,20px, #a5d2d2,20px)
  }
  .style6{
    border: none;
    .chose(20px,20px, #cccccc,20px)
  }
  .style7{
    border: none;
    .chose(20px,20px, #666666,20px)
  }

  .style{
    border: 1px solid #feb19a;
  }
</style>
