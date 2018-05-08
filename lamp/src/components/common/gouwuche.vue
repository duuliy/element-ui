<template>
  <ul>
    <li class="lifrist">
      <div>
        <img :src="imgsrc" alt="" >
        <div>
          <p>{{title}}</p>
          <p>颜色:{{color}}</p>
          <p>功能支持:{{opera}}</p>
          <p>规格:{{guige}}</p>
        </div>
      </div>
    </li>
    <li class="lisec">
      <div>
        <span @click="jianfa">-</span>
        <span>{{shuliang}}</span>
        <span @click="addjia">+</span>
      </div>
    </li>

    <li class="liprice">
      <p>￥{{UnitPrice}}</p>
    </li>

    <li class="liopera">
      <p @click="delcart">删除</p>
    </li>
  </ul>
</template>

<script>
    export default {
      name: 'gouwuche',
      data () {
            return {
//              count: 1,
            }
      },
      methods: {
          addjia () {
            this.$emit('addjia')
          },
          jianfa () {
            this.$emit('jianfa')
          },
          delcart () {
            this.$emit('delcart')
          }
      },
      props: ['title','UnitPrice','color','opera','guige','imgsrc','shuliang']

    }

</script>

<style scoped>
  ul,ul>li,.lifrist>div{
    height: 110px;
  }
  .lisec>div,.liprice>p,.liopera>p{
    line-height: 110px;
  }
  .lifrist>div>div>p, .lisec>div>span,.liopera>p{
    color: #797979;
  }
  .lifrist>div>div>p, .lisec>div>span,.liopera>p{
    font-size: 14px
  }

  ul{
    width: 100%;
    outline: 1px solid #ededed;
  }
  ul>li{
    list-style: none;
    float: left;
  }
  ul>li:nth-child(1){
    width:55.75% ;
  }
  ul>li:nth-child(2),ul>li:nth-child(3),ul>li:nth-child(4){
    width: 14.7%;
  }
  .lifrist>div>div>p{
    margin-top:7px;
  }
  img{
    width: 60px;
    height: 60px;
    float: left;
    margin-top: 25px;
  }
  .lifrist>div{
    width: 70%;
    margin: auto;
  }
  .lifrist>div>div{
    margin-left: 67px;
    float: left;
  }
  /* 数量 */
  .lisec>div{
    width: 60%;
    text-align: center;
    margin: auto;
  }
  .lisec>div>span{
    cursor: pointer;
  }
  .lisec>div>span:first-child{
    font-size: 20px;
    float: left;
  }
  .lisec>div>span:last-child{
    font-size: 20px;
    float: right;
    margin-top: 2px;
  }
  /* 小计 */
  .liprice>p{
    width: 40%;
    font-size: 14px;
    color: #ff6700;
    margin: auto;
  }

  /* 操作 */
  .liopera>p{
    width: 25%;
    margin: auto;
    cursor: pointer;
  }

</style>
