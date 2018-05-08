<template>
  <div class="personal">
    <div class="me-info">
      <div class="left">
          <span>
            <input type="file" id="img_change" style="display:none" v-on:change="myImgChange">
             <img :src="$host+person[0].head_img" alt="" @click="changeImg">
          </span>
        <div>
          <p><i>用户名:</i> <i>{{person[0].u_name}}</i></p>
          <p>
            <i>手机:</i> <i>{{person[0].phone}}</i>
          </p>
        </div>
      </div>
      <div class="right">
        <div v-for="item in per" :key="item.id" class="myR">
          <personalcom :imgsrc="'static/'+item.img" :pertext="item.text" :pernub="item.nub"></personalcom>
        </div>
      </div>
    </div>
    <div class="my-order">
      <div class="title">
        <p>
          我的订单
        </p>
        <p>
          查看全部订单
        </p>
      </div>
      <div class="text"></div>
    </div>
  </div>
</template>

<script>
  import personalcom from './personalcom.vue'
  export default {
    name: 'personal',
    data() {
      return {
        person:[],
//                imgsrc:'static/myinfo-img/hexianmin.jpg',
//                name:'Mr.何里红花郎',
//                phone:'17808324047',
        per: [{
          img: 'myinfo-img/daifukuan.png',
          text: '待付款',
          nub: '0'
        },
          {
            img: 'myinfo-img/daishouhuo.png',
            text: '待收货',
            nub: '1'
          },
          {
            img: 'myinfo-img/daipingjian.png',
            text: '待评价',
            nub: '3'
          }
        ]
      }
    },
    components: {
      personalcom: personalcom
    },
    methods:{
      changeImg(){
        document.getElementById("img_change").click();
      },
      myImgChange(){
//        alert("头像发生更改")
      }
    },
    created () {
//      sessionStorage.userid=2;
      this.$axios.get("/api/personal.do",{params:{userid:sessionStorage.userId}}).then(resp=>{
        console.log(resp.data);
        this.person = resp.data;
        console.log(this.person)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .textDiv{
    width: 100%;
    background-color:white ;
    border-radius:2px ;
  }
  .textText{
    margin-top: 30px;
    margin-bottom: 50px;
  }
  .personal{
    height: auto;
    div{
      .textDiv;
    }
    .me-info{
      height: 200px;
      .left{
        float: left;
        width: 550px;
        height: 100%;
        span{
          display: block;
          width: 100px;
          height: 100px;
          float: left;
          margin: 50px 0 0 40px;
          img{
            width: 100px;
            height: 100px;
            border-radius:50px;
            float: left;
            cursor: pointer;
          }
        }
        div{
          float: left;
          width: 200px;
          height: 100px;
          margin: 50px 0 0 15px;
          .u-name{
            height: 30px;
            line-height: 30px;
            border: none;
          }
          p{
            height: 50px;
            line-height: 50px;
            font-size: 14px;
            cursor: pointer;
            i{
              font-family: 微软雅黑;
              font-style: normal;
              color: #666666;
            }
          }
        }
        border-radius: 0;
        border-right: 1px dashed #f0f0f0;
      }
      .right{
        width: 340px;
        height: 100%;
        float: left;
        .myR{
          width: 80px;
          height: 80px;
          float: left;
          margin:55px 0 0 30px;
        }
      }
    }
    .my-order{
      height: 320px;
      .textText;
      .title{
        width: 100%;
        height: 50px;
        p{
          width:100px ;
          height: 100%;
          line-height: 50px;
          font-family: 微软雅黑;
          font-size: 14px;
        }
        p:first-child{
          float: left;
          margin-left: 40px;
          font-weight: bold;
          color: #5E5E5E;
        }
        p:last-child{
          float: right;
          margin-right: 40px;
          color: #797979;
        }
      }
    }
  }

</style>
