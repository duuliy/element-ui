<template>
  <button :class="btnC" @click="submit">{{btntext}}</button>
</template>

<script>
    export default {
      name: 'btndemo',
      props: {
          btntext: {
            type: String,
            default: '按钮默认值',
          },
          btnC: {}
      },
      methods:{
        submit(){
            this.$emit('submit')
        }
      }
    }

</script>

<style scoped lang="less">
  @import '../../../assets/less/btnless';

  *{
    font-size: 14px;
    outline: none;
    cursor: pointer;
  }

  /* 大 */
  /*红底白字*/
  .btn1a{
     border: none;
    .demo1(#ff7a55,white,140px,40px,5px)
  }
  /*白底红边红字*/
  .btn1b{
    border: 1px solid #FF7A55;
    .demo1(white,#FF7A55,140px,40px,5px)
  }




  /* 中 */
  /*红底白字*/
  .btn2a{
      border:none;
      .demo1(#ff7a55,white,90px,35px,2px)
  }
  /*灰底黑字*/
  .btn2b{
    border: none;
    .demo1(#F1F1F1,#333,90px,35px,2px)
  }
  /*灰边白底灰色*/
  .btn2c{
    border: 1px solid #CCCCCC;
    .demo1(white,#666,90px,35px,2px)
  }

  /*小*/
  /*红底白字*/
  .btn3a{
    border: none;
    .demo1(#ff7a55,white,70px,30px,2px)
  }
  /*灰底黑字*/
  .btn3b{
    border: none;
    .demo1(#F1F1F1,#333,70px,30px,2px)
  }
  /*灰边白底灰色*/
  .btn3c{
    border: 1px solid #CCCCCC;
    .demo1(white,#666,70px,30px,2px)
  }

  /*链接式按钮*/
  .btn4{
    border:none;
    .demo1(white,#000099,40px,26px,0)
  }




</style>
