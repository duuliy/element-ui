<template>
  <div>
    <div class="login-checkbox">
      <input type="checkbox"/>三个月之内免登录
    </div>
    <button @click="submitBtn" type="">登录</button>
    <p>还不是会员？<span>手机登录</span></p>
  </div>
</template>

<script>
    export default {
        name:'loginButton',
        methods:{
          submitBtn () {
            this.$emit('submitBtn')
          },
        }
    }
</script>

<style scoped>
  .login-checkbox{
    margin-top: 10px;
    font-size: 12px;
    margin-left: 30px;
    height: 20px;
    width: 150px;
    line-height: 20px;
  }
  .login-checkbox input{
    display: inline-block;
    margin-top: 4px;
  }
  button{
    width: 300px;
    height: 45px;
    background-color:#FF6135;
    text-align: center;
    border: none;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    margin-left: 30px;
    margin-top: 20px;
    color: white;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 7px;
  }
  p{
    color: #999999;
    margin-left: 200px;
    font-size: 13px;
    margin-top: 30px;
  }
  p span{
    text-decoration: underline;
    cursor: pointer;
  }
</style>
