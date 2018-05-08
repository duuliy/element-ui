<template>
  <div>
    <div class="lay-div">
      <div class="lay-center lay-title">
        申请售后
        <span>订单编号: {{data}}</span>
        <span>下单时间: {{time}}</span>
        <router-link to="/" tag="button">售后政策</router-link>
    </div>
    </div>

    <div class="lay-div aftersale">
      <div class="lay-center ">
        <div class="help-list centinfo">
          <table class="table-list">
            <thead>
            <tr>
              <th class="aftershop">商品名称</th>
              <th>送货清单</th>
              <th>赠送清单</th>
              <th>购买数量</th>

            </tr>
            </thead>
            <tbody>
            <tr class="table-cont">
              <td class="aftershop">
                <div>
                  <img :src="imgsrc" alt="">
                  <p>智能时尚夜灯</p>
                </div>
              </td>
              <td>标准安装配件</td>
              <td>-</td>
              <td>1</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div class="information">
          <div class="myIfmt">
            <ul class="myli1">
              <li><span>*</span> 服务类型 :</li>
              <li ><button class="mybtn" @click="mybtn(0)">维修</button></li>
              <li><button class="mybtn"  @click="mybtn(1)">其他服务</button></li>
            </ul>

            <div>
              <p><span>*</span> 问题描述 :</p>
              <textarea name="" id="" cols="80" rows="10"></textarea>
            </div>

            <ul class="myli2">

              <li @click="" id="filepic"><span>*</span> 图片信息 : 例 :</li>

              <li class="lilist">

                <img src="static/buyimg/d1.jpg" alt="">
                <img src="static/buyimg/d2.jpg" alt="">
                <!--<img src="static/buyimg/d2.jpg" alt="">-->
                <!--<img src="static/buyimg/d2.jpg" alt="">-->
              </li>
              <li>
                <input type="file">
              </li>
            </ul>
            <p class="hint">为了帮助您更好的解决问题，请上传图片；最多可上传5张，每张图片不超过5M，支持jpg，png，jpeg，bmp</p>

          </div>
        </div>

        <div class="sureInfo">
          <p>确认信息</p>
          <div>
            <div>
              <p>申请凭据: 有发票</p>
              <p>维修时间: 2017-12-06 13:00-15:00</p>
              <p>顾客姓名: 何先敏</p>
              <p>手机号码: 17808324047</p>
              <p>注: 提交服务单后，售后专员可能与您电话沟通，请保持手机畅通</p>
            </div>
          </div>
        </div>

        <router-link to="/" tag="button" class="btn">确认提交</router-link>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
      name: 'aftersale',
      data () {
            return {
               saledata : {},
              data:'1234567891644',
              time: '2017-12-08',
              imgsrc:'static/buyimg/yedeng2.jpg'
            }
      },
      methods: {
        mybtn (obj) {
            var btn=document.getElementsByClassName("mybtn");
            for(var i=0;i<btn.length;i++){
              if(obj!=i){
                btn[i].style. borderColor="#cccccc";
              }else{
                btn[i].style. borderColor="#FF7A54";
              }
          }
        }

      },
      created () {
          console.log(this.$route.query.id);
//          this.$axios.get("/api/product",{params:{id:this.$route.query.id}})
//            .then(resp=>{
//                this.saledata = resp.data
//            })
      }
    }

</script>

<style scoped >
  @import "../../assets/less/myinfo.less";
  *{
    color: #797979;
  }
  button{
    outline: none;
    cursor: pointer;
  }
  .aftersale{
    height: 970px;
  }
  .centinfo,.sureInfo,.btn{
    margin-top: 30px;
  }
  .lay-title span{
    font-size: 14px;
    color: #797979;
    margin-left: 20px;
  }
  .lay-title button{
    float: right;
    width: 100px;
    height: 30px;
    background-color: #ff7a55;
    color: white;
    border: none;
    border-radius: 2px;
    margin-top: 21px;
  }
  td div{
    width: 80%;
    height: 100px;
    margin: auto;
    position: relative;
  }
  td img{
    width: 100px;
    height: 60px;
    position: absolute;
    top: 20px;
    left: 0;
  }
  td p{
     position: absolute;
    top: 40px;
    left: 140px;

    }
  .information{
    border:1px solid #e7e7e7;
    height: 410px;
    overflow: hidden;
  }
  .sureInfo{
    border:1px solid #e7e7e7;
    height: 230px;
  }
  .myIfmt>ul{
    width: 84%;
    height: 50px;
    margin-top: 30px;
  }
  .myli1{
    margin-bottom: 30px;
  }
  ul>li{
    float: left;
    list-style: none;
    line-height: 50px;
    text-align: center;
  }
  .myli1>li,.myli2>li:first-child{
    width: 100px;
    height: 50px;
  }
  .mybtn{
    width: 80px;
    height: 30px;
    border: 1px solid #cccccc;
    color: #797979;
    background-color: transparent;
  }
  li>span{
    color: red;
  }
  .myIfmt>div{
    width: 100%;
    height: 192px;
  }
  .myIfmt>div p{
    float: left;
    margin-left: 15px;
  }
  .myIfmt>div p span{
    color: red;
  }
  textarea{
    margin-left: 20px;
    outline: none;
    resize: none;
  }
  img{
    width: 30px;
    height: 30px;
  }
  .lilist{
    height: 30px;
    margin-top:10px;
    margin-left:10px;
  }
  .hint{
    color: #ff7a54;
    margin-left: 20px;
  }
  .sureInfo>p{
    width: 50%;
    margin-top: 15px;
    margin-left: 20px;
    font-weight: 600;
  }
  .sureInfo>div:last-child{
    width: 60%;
    height: 170px;
    margin-left: 6%;
  }
  .sureInfo>div:last-child>div{
    width: 80%;
    height: auto;
    margin: auto;
    overflow: hidden;
  }
  .sureInfo>div:last-child>div>p{
    margin-top: 15px;
  }
  .sureInfo>div:last-child>div>p:last-child{
    margin-top: 10px;
    color: #ff7a54;
  }
  .btn{
    border: none;
    background-color: #FF7A54;
    color: white;
    width: 90px;
    height: 35px;
    border-radius: 2px;
  }
  .myli2>li:last-child{
    float: right;
  }

</style>
