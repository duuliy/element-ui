<template>
  <div>
    <div class="banner">
      <div class="login">
        <div class="login-top">
          <router-link to="/login/phonelogin" class="login-phone" tag="div" active-class="active">手机号快捷登录</router-link>
          <router-link to="/login/userlogin" class="login-user" tag="div" active-class="active">用户名密码登录</router-link>
        </div>
          <div class="login-move">
          <router-view></router-view>
        </div>
          <!--<div class="login-checkbox">-->
            <!--<input type="checkbox"/>三个月之内免登录-->
          <!--</div>-->
          <!--<button @click="submitBtn" type="">登录</button>-->
          <!--<p>还不是会员？<span>手机登录</span></p>-->
      </div>
    </div>
  </div>
</template>

<script>
    export default{
      name:'login',
      data(){
        return {
          valuesC:'',
        }
      },
      components:{

      },
      methods : {

      },
    }
</script>

<style scoped>

.banner{
  width: 100%;
  height: 600px;
  background-image: url("../../../static/images/login-banner.jpg");
  background-size: cover;
  overflow: hidden;
}
  .login{
    width: 380px;
    height: 385px;
    background-color: white;
    margin-top: 5%;
    margin-left: 56%;
    font-family: 微软雅黑;
    color: #5E5E5E;
    border-radius: 2px;
  }
  .login-phone,.login-user{
    float: left;
    width: 190px;
    height: 60px;
    /*border-bottom: 2px solid #FF6135;*/
    border-bottom: 1px solid #D7D7D7;
    text-align: center;
    line-height: 60px;
    font-size: 14px;
  }
  .login-move{
    clear: both;
    width: 380px;
    height: 160px;
    /*background-color: grey;*/
  }

.active{
  border-bottom: 2px solid rgb(255,122,84);
}
</style>
