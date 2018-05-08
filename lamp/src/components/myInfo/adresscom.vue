<template>
  <div class="sh-adress sh-one">
    <div>
      <i>{{adsname}}</i><img src="static/buyimg/banshou.png" alt=""/><span class="moren">默认</span>
    </div>
    <div>
      <p><span>收货人：</span><i>{{adsname}}</i></p>
      <p><span>所在地区：</span><i>{{ads}}</i></p>
      <p class="addid">{{addid}}</p>
    </div>
    <div>
      <p><span>手机：</span><i>{{adsphone}}</i></p>
      <p><span>地址：</span><i>{{adsarea}}</i></p>
    </div>
    <div>
      <button @click="deladr(addid)" id="del">[删除]</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'adresscom',
        data () {
            return {}
        },
      props: ['adsname','ads','adsphone','adsarea','addid'],
      methods: {

        deladr (index) {
          this.$emit('clicked');
        }
      }
    }

</script>

<style scoped lang="less">
  @import "../../assets/less/myinfo";
  *{
    color: #797979;
  }
  .sh-adress{
    border: 1px solid @back-color;
    height: 170px;
    margin-bottom: 20px;
  div{
    height: 40px;
    line-height: 40px;
  }
  p{
    width: 50%;
    float: left;
  }
  span,i{
    margin-left: 10px;
    font-style: normal;
  }
  button{
    float: right;
    margin-right: 20px;
    margin-top: 20px;
    border: none;
    background-color: transparent;
    color: #2272c8;
  }
  .moren{
    padding: 1px 5px;
    background-color:@font-red;
    color: white;
    border-radius: 2px;
  }
  }
  .sh-one{
    margin-top: 20px;
  }
  img{
    width: 15px;
    height: 15px;
    margin-left: 8px;
  }
  button{
    outline: none;
    cursor: pointer;
  }
  .addid{
    display: none;
  }
</style>
