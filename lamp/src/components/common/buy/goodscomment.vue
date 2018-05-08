<template>
  <div id="comment">
    <!--头像-->
    <div>
      <img :src="imgsrc" alt="">
      <ul>
        <li>{{username}}</li>
        <li>{{userdate}}</li>
        <li>{{usertext}}</li>
      </ul>
    </div>
    <!--点赞-->
    <!--<div class="comcount">-->
      <!--<div>-->
        <!--<img src="../../../../static/images/love.png" alt="" @click="add">-->
        <!--<span>{{count}}</span>-->
      <!--</div>-->
    <!--</div>-->

  </div>
</template>

<script>
    export default {
        name: 'goodscomment',
      data () {
            return {
//                count: 0
            }
      },
      props:['imgsrc','username','userdate','usertext'],
//      methods: {
//            add () {
//                this.count+=1;
//                this.$emit('add')
//            }
//      }
    }

</script>

<style scoped>
  *{
    font-size: 14px;
    color:#797979 ;
  }
  #comment{
    width: 1049px;
    height: 170px;
    border-bottom: 1px solid #E9EBEE;
    margin: auto;
  }
  #comment>div:first-child{
    width: 100%;
    height: 145px;
  }
  #comment>div:first-child>img{
    width: 75px;
    height: 75px;
    margin: 47px 35px;
    float: left;
  }
  ul{
    float: left;
    width: 80%;
    height: 100px;
    margin-top: 41px;
  }
  li{
    list-style: none;
  }
  li:nth-child(1){
    color: #ff6700;
  }
  li:nth-child(2){
    margin-top: 5px;
  }
  li:last-child{
    margin-top: 15px;
  }
  .comcount{
    float: right;
    width: 20%;
    height: 25px;
    position: relative;
  }
  .comcount>div{
    width: 30%;
    height: 25px;
    position: absolute;
    top: 0;
    left:120px;
  }
  .comcount>div>img{
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .comcount>div>span{
    position: absolute;
    top: 3px;
    left: 50%;
    color: #ff6700;
  }


</style>
