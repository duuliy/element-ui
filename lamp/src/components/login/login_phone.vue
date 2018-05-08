<template>
  <div class="userlog">
    <div class="phoneborder">
      <span>&#xe601;</span>
      <div :class="{'bore-red' : isR,'bore-gray' : !isR}">
        <input type="text" placeholder="请输入手机号" v-on:input="checkPhone" v-model="phone"/>
      </div>
      <i id="phoneOk" :class="{'isOk' : okno, 'isNo' : !okno}">ok</i>
    </div>
    <div class="pwdborder">
      <span>&#xe661</span>
      <div :class="{'borep-red' : isP,'borep-gray' : !isP}">
        <input type="text" :placeholder='yanzhengma' @blur="checkPwd" v-model="pwd"/>
        <button :class="{'btnBlock' : btnC,'btnNone' : !btnC}" type="button" @click="sendCode">发送校验码</button>
      </div>
      <i :class="{'isOKp' : oknop, 'isNop' : !oknop}">ok</i>
    </div>
    <mybuttom @submitBtn="submitBtn"></mybuttom>

  </div>
</template>

<script>
  import mybuttom from './loginButton.vue'
    export default{
      name:'phonelogin',
      data(){
        return {
          phone:'',
          pwd:'',
          okno: false,
          isR: false,
          oknop: false,
          isP: false,
          btnC: false,
          yanzhengma:"验证码",
        }
      },
      components:{
        mybuttom:mybuttom
      },
      methods: {
        checkPhone(){
            console.log("进来")
          if(!(/^1[34578]\d{9}$/.test(this.phone))){
            this.okno = false;
            this.isR=true;
            this.btnC=false;
          }else{
            this.okno=true;
            this.isR=false;
            this.btnC=true;
          }
        },
        checkPwd(){
          if(this.pwd!="4567"){
            this.oknop = false;
            this.isP=true;
          }else{
            this.oknop = true;
            this.isP=false;
          }
        },
        //短信发送
        sendCode(){
            console.log("短信进来");

          this.$axios.post('/api/sendCode.do',{phone:this.phone}).then(function (response) {
//            console.log(response);
          })
        },
        //登录
        submitBtn(){
          let that=this;
          this.$axios.post('/api/yanzheng.do',{phone:this.phone,code:this.pwd}).then(function (response) {
            console.log('登录层',response.data);
            if(response.data instanceof Array){
              sessionStorage.username=response.data[0].u_name;
              sessionStorage.userId=response.data[0].user_id
            }else{
              sessionStorage.userId=response.data.insertId;
              sessionStorage.username="aaa";

            }
            that.$router.push(that.$route.query.redirect || '/')
          })
        }
      }
    }
</script>

<style scoped lang="less">
  @font-face{
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
    }
    .isOk,.isOKp{
      display: inline-block;
      color: #44AA00;
    }
    .isNo,isNop{
      display: none;
      /*color: red;*/
    }
    .pwdinput{
      position: relative;
      button{
        width: 80px;
        height: 30px;
        position: absolute;
        top: 5px;
        right: 5px;
        border-radius: 3px;
        border: none;
        color: #5E5E5E;
      }
      .btnBlock{
        background-color: #ff7A55;
        display: block;
        color: white;

      }
      .btnNone{
        display: none;
      }
    }
    .bore-red,.borep-red{
      border: 1px solid #ff7A55;
      .pwdinput;
    }
    .bore-gray,.borep-gray{
      border: 1px solid #f0f0f0;
      .pwdinput;
    }

  }

</style>
