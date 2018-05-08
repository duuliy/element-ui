<template>
<div id="toubu">
  <div class="toubuleft">
    <img src="static/images/logo.png">
    <span>|</span>
  </div>
  <div class="nav">
    <ul>
      <router-link to="/" tag="li">主页</router-link>
      <router-link to="/GoodsList" tag="li">Tomroow商城</router-link>
      <router-link to="/funRecommend" tag="li">功能介绍</router-link>
      <router-link to="/divshow" tag="li">DIY展示</router-link>
      <router-link to="/heightDiy" tag="li">高端定制</router-link>
      <router-link to="/AppDownload" tag="li">app下载</router-link>
    </ul>
  </div>
  <div class="touburight">
    <!--<div>-->
      <img src="static/images/login.png" @click="denglu" v-show="islogin==undefined||islogin==''">
    <span v-show="islogin!=undefined&&islogin!=''"><span class="yonghu" @click="info">欢迎您：{{islogin}}</span> <span class="tuichu" @click="tuichu">[退出]</span></span>
    <!--</div>-->
    <span class="touwuche" v-if="islogin!=undefined&&islogin!=''">
      <img src="static/images/gouwuche.png">
      <span @click="submit">我的购物车</span>
      <!--<router-link :to="{path:'/cart',query:{id:1}}">我的购物车</router-link>-->
    </span>
  </div>
</div>
</template>

<script>
    export default {
        name:"header",
      data(){
            return{
                islogin:sessionStorage.username||'',
            }
      },
      methods:{
        denglu(){
            if(sessionStorage.username==undefined||sessionStorage.username==''){
              this.$router.push('/login/userlogin')
            }else{
              this.$router.push('/myinfo/personal')
            }
        },
        submit(){
          if(sessionStorage.username==undefined){
            let url=location.href.split("http://localhost:8080/#")[1]
            console.log("购物车路径",url)
            this.$router.push({
              path: '/login/userlogin',
              query: {redirect: url}
            })
          }else{
            this.$router.push('/cart')
          }
        },
        tuichu(){
            console.log("tuichu")
            sessionStorage.username=""
            sessionStorage.userId=""
          this.islogin=sessionStorage.username
          this.$router.push("/login")
        },
        info(){
          this.$router.push("/myinfo/personal")
        }
      },
      created(){
      },
      watch:{
          "$route":function () {
              console.log('变化地址',sessionStorage.username)
              this.islogin=sessionStorage.username;
          }
      },

    }
</script>

<style scoped lang="less">
  /*@import '../../assets/less/common.less';*/

  .yonghu{
    color:@font-color ;
    cursor: pointer;
  }
  .yonghu:hover{
    color: #FF7A54;
  }
  .tuichu{
    color:@font-color;
    cursor: pointer;
  }
  @font-color:#868686;
  *{
    padding: 0px;
    margin: 0px;
  }
  #toubu{
    width: 100%;
    height: 80px;
    >div{
      float: left;
      line-height: 80px;
    }
  }

   .toubuleft{
    padding-left: 50px;
     img{
       width: 118px;
     }
     span{
       padding-left: 26px;
       color: @font-color;
     }
  }

  .touburight img{
    border: none;
    width: 23px;
    vertical-align: middle;
  }
  #toubu .touburight{
    float: right;
    padding-right: 50px;
  }
  .nav ul li{
    float: left;
    list-style: none;
    margin-left: 65px;
    color: @font-color;
    cursor: pointer;
    font-size: 14px;
    &:hover{
      color: #FF6135;
    }
  }
  /*.nav ul li:hover{*/
    /*color: #FF6135;*/
  /*}*/
  .touwuche{
    cursor: pointer;
    /*border: 1px solid #adadad;*/
    font-size: 13px;
    height: 24px;
    padding: 4px;
    border-radius: 3px;
    color: @font-color;
    line-height: 70px;
    margin-left: 10px;
    img{
      width: 18px;
      vertical-align: middle;
    }
  }

</style>
