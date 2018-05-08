<template>
<div class="userlog">
  <div class="phoneborder">
    <span>&#xe601;</span>
    <div :class="{'bore-red' : isR,'bore-gray' : !isR}">
      <input type="text" placeholder="请输入手机号" v-on:input="checkPhone" v-model="phone"/>
    </div>
    <i :class="{'isOk': okno, 'isNo' : !okno}">ok</i>
  </div>
  <div class="pwdborder">
    <span>&#xe6b2;</span>
    <div :class="{'borep-red' : isP,'borep-gray' : !isP}">
      <input type="password" :placeholder='mima' @blur="checkPwd" v-model="pwd"/>
    </div>
    <i :class="{'isOKp' : oknop, 'isNop' : !oknop}">ok</i>
  </div>
  <mybuttom @submitBtn="submitBtn"></mybuttom>
</div>
</template>

<script>
  import mybuttom from './loginButton.vue'
    export default{
      name:'userlogin',
      data() {
        return {
          phone:'',
          pwd:'',
          okno: false,
          isR: false,
          oknop:false,
          isP:false,
          mima:"请输入密码"
        }
      },
      components:{
        mybuttom:mybuttom
      },
      methods: {
        checkPhone(){
          if(!(/^1[34578]\d{9}$/.test(this.phone))){
            this.okno = false;
            this.isR=true;
          }else{
            this.okno=true;
            this.isR=false;
          }
        },
        checkPwd(){
          if(this.pwd!=123){
            this.oknop = false;
            this.isP=true;
          }else{
            this.oknop = true;
            this.isP=false;
          }
        },
        submitBtn(){
            console.log(this)
          let bianliang=this;
          this.$axios.post('/api/login.do',{username:this.phone,pwd:this.pwd,}).then(function (response) {
              if(response.data.length==1){
                sessionStorage.username=response.data[0].u_name;
                sessionStorage.userId=response.data[0].user_id;
                bianliang.$router.push(bianliang.$route.query.redirect || '/')
              }else{
                  console.log("aaa",bianliang);
                  bianliang.pwd=''
                  bianliang.mima="帐号或者密码错误"
              }
          })
        }
      },
    }
</script>

<style scoped lang="less">
  @font-face {
    font-family: "iconfont";
    src: url("../../assets/login_font_icon/iconfont.woff");
    /*src: url("../../assets/diy_font_icon/iconfont.ttf");*/
    /*src: url("../../assets/diy_font_icon/iconfont.eot");*/
  }
  .userlog{
    position: relative;
    overflow: hidden;
    width: 360px;
    margin: 0 auto;
    /*border: 1px solid red;*/
  }
  .phoneborder,.pwdborder{
    height: 50px;
    margin-top: 20px;
    span,div{
      height: 40px;
      line-height: 40px;
      text-align: center;
      margin: 5px 0;
    }
    span{
      font-family:iconfont;
      display: inline-block;
      float: left;
      width: 30px;
      font-size: 16px;
    }
    div{
      border-radius: 2px;
      border: 1px solid #f0f0f0;
      float: left;
      width: 298px;
      input{
        width: 96%;
        height: 30px;
        border: none;
        outline: none;
      }
    }
    i{
      height: 50px;
      width: 20px;
      display: none;
      text-align: center;
      font-size: 14px;
      line-height: 50px;
      font-weight: bold;
      /*display: none;*/
    }
    .isOk,.isOKp{
      display: inline-block;
      color: #44AA00;
    }
    .isNo,isNop{
      display: none;
      /*color: red;*/
    }
    .bore-red,.borep-red{
      border: 1px solid #ff7A55;
    }
    .bore-gray,.borep-gray{
      border: 1px solid #f0f0f0;
    }
  }

</style>
