<template>
  <!--模态框-->
  <div class="dialog-wrap" id="dialog">
    <div class="dialog-cover" >
      <p class="dialog-close" @click="comfirmNo">x</p>
      <slot name="myslot">

      </slot>
    </div>
  </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
  export default {
    name: 'motaikuang',
    data () {
      return {}
    },
    components: {
      VDistpicker: VDistpicker
    },
    methods: {
      comfirmNo () {
//        console.log(44);
//        document.getElementById("mtk").style.display="none";
        this.$emit("comfirmNo")
      }
    }
  }

</script>

<style scoped>
  /*===============================弹框样式=================*/

  .dialog-wrap {
    position: fixed;
    width: 100%;
    /*height: 100%;*/
    top:0;
    left: 0;
    /*display: none;*/
    height: 0;
  }
  .dialog-cover {
    background: rgba(0, 0, 0, 0.31);
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    /*height: 100%;*/
    height: 0;
  }
  .dialog-content {
    width: 40%;
    /*opacity: .9;*/
    position: fixed;
    overflow: hidden;
    background: #fff;
    top: 20%;
    left: 55%;
    margin-left: -25%;
    z-index: 10;
    border: 1px solid #969696;
    border-radius: 5px;
    line-height: 1.6;
    opacity: 0;
    height: 0px;
  }
  .dialog-close {
    position: absolute;
    right:20%;
    top: 10%;
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: pointer;
    color: white;
    font-size: 28px;
    opacity: 0;
  }
  .dialog-content p{
    width: 80%;
    margin-left: 5%;
    margin-top: 5%;
  }
  #btns{
    width: 100%;
    cursor: pointer;
    margin: 5% auto;
    height: 40px;
  }
  #btns button{
    width: 140px;
    height: 100%;
    border:none;
    outline: none;
    font-size: 16px;
    color: white;
    border-radius: 5px;
  }
  #btns button:first-child{
    background-color: #FF7A54;
    margin-left: 5%;
  }
  #btns button:last-child{
    margin-left: 30%;
  }

  .dialog-content>input{
    height:40px;
    outline: none;
    display: block;
    margin-top: 20px;
    border-radius: 5px;
    border: 1px solid #d7d7d7;
    margin-left: 27px;
  }
  .dialog-content>div{
    margin-top: 20px;
    margin-left: 27px;
  }
  .lastipt{
    width: 407px;
  }
</style>
