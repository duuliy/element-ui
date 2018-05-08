
<template>
  <div class="myadress">
    <div class="lay-div">
      <div class="lay-center lay-title">
        <button class="add" @click="myclick">新增地址</button>
        <span>最多可创建10个收货地址</span>
      </div>
    </div>
    <div class="lay-div">
      <div class="lay-center">
        <!--zujian-->
        <div v-for="(item,index) in adress" :key="item.id">
          <adresscom :adsname="item.consi_name" :ads="item.state+item.city+item.district" :adsphone="item.consi_phone" :adsarea="item.address" :addid="item.add_id" @clicked="del(index)"></adresscom>
          <!--@click.native="del(item.add_id)"-->
        </div>

        <div id="mtk">
          <motaikuang @comfirmNo="comfirmNo">

            <div slot="myslot">

              <div class="dialog-content" >
                <input type="text" placeholder="收货人" id="shouhuo" v-model="username">
                <input type="text" placeholder="手机号" id="iphone" v-model="phone" @blur="inp"><span id="dont">手机号位数不对！</span>
                <div>
                  <v-distpicker :placeholders="placeholders" @selected="adressorder"></v-distpicker>
                </div>
                <input type="text" placeholder="地址" class="lastipt" id="address" v-model="address">

                <div id="btns">
                  <button @click="comfirmYes" id="addbtn">确认</button>
                  <button @click="comNo">取消</button>
                </div>
              </div>

            </div>

          </motaikuang>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import motaikuang from './motaikuang.vue'
  import VDistpicker from 'v-distpicker'
  import adresscom from './adresscom.vue'
  //接省市区的数组
  var placeArr=[];
  //接输入模态框内容的数组
  var mtkArr=[];
  var ads={consi_name:'',consi_phone:'',address:''};

  export default {
    name: '',
    data() {
      return {
        username:'',
        phone: '',
        address: '',
        placeholders: {
          province: '------- 省 --------',
          city: '--- 市 ---',
          area: '--- 区 ---',
        },
        adress : []
      }
    },
    components: {
      motaikuang: motaikuang,
      VDistpicker: VDistpicker,
      adresscom: adresscom
    },
    methods: {
      myclick () {
        dialog_wrap=document.getElementsByClassName("dialog-wrap")[0];
        dialog_content=document.getElementsByClassName("dialog-content")[0];
        console.log(dialog_content);
        dialog_cover=document.getElementsByClassName("dialog-cover")[0];
        showDialog()
      },
      comNo () {
        displayDialog();
      },
      comfirmNo(){
        displayDialog();
      },
      comfirmYes () {
//        sessionStorage.userid=1;
        var userid=sessionStorage.userId;
        document.getElementById("iphone").style.borderColor="#cccccc";
        mtkArr.push(this.username);
        mtkArr.push(this.phone);
        mtkArr.push(this.address);
        mtkArr.push(userid);

        for(var i=0;i<mtkArr.length;i++){
          ads.consi_name = mtkArr[0];
          ads.consi_phone = mtkArr[1];
          ads.address = mtkArr[2];
          ads.userid = mtkArr[3];
        }

        this.adress.push(ads);
        this.$axios.post('/api/sendaddress.do',ads).then(resp=>{
          console.log("新增成功")
        });
        this.addressList()
        this.username="";
        this.phone="";
        this.address="";
        displayDialog()
      },
      adressorder(placeholders){
        placeArr.push(placeholders);
        ads.state=placeArr[0].province.value;
        ads.city=placeArr[0].city.value;
        ads.district=placeArr[0].area.value;
      },
      del(index) {
        var addid;
        var myaddress=this.adress;

        for(var i=0;i<myaddress.length;i++){
          if(index==i){
            addid=myaddress[index].add_id;
          }
        }
        myaddress .splice(index,1);

        this.$axios.get("/api/deladdress.do",{params:{add_id:addid}}).then(resp=>{
          console.log("删除成功")
        });

      },
      inp(){
        if(!(/^1[34578]\d{9}$/.test(this.phone))){
          document.getElementById("dont").style.display="block"
        }else{
          document.getElementById("dont").style.display="none"
        }
      },
      addressList(){
        this.$axios.get("/api/myadress.do",{params:{userid:sessionStorage.userId}}).then(resp=>{
          this.adress = resp.data;
        })
      }

    },
    created () {
      this.addressList()

    }
  }

  //  获取dialog-wrap，dialog-cover,dialog-content
  var dialog_wrap,dialog_cover,dialog_content;

  function showDialog(){
    dialog_wrap.style.height="100%";
    dialog_wrap.style.transition="all .4s ease-out";
    dialog_cover.style.height="100%";
    dialog_content.style.height="350px";
    dialog_content.style.transition="all .4s ease-out";
    dialog_content.style.opacity="1"
  }
  function displayDialog(){
    dialog_wrap.style.height="0px";
    dialog_wrap.style.transition="all .4s ease-out";
    dialog_cover.style.height="0px";
    dialog_content.style.height="0px";
    dialog_content.style.transition="all .4s ease-out";
    dialog_content.style.opacity="0"
  }



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../assets/less/myinfo";
  #mtk{
    height: 0;
  }

  #btns{
    width: 100%;
    cursor: pointer;
    margin: 5% auto;
    height: 40px;
  }
  .lastipt{
    width: 407px;
  }
  .dialog-content p{
    width: 80%;
    margin-left: 5%;
    margin-top: 5%;
  }
  #btns button:first-child{
    background-color: #FF7A54;
    margin-left: 5%;
  }
  #btns button:last-child{
    margin-left: 30%;
  }

  .dialog-content>input{
    height:40px;
    outline: none;
    display: block;
    margin-top: 20px;
    border-radius: 5px;
    border: 1px solid #d7d7d7;
    margin-left: 27px;
  }
  .dialog-content>div{
    margin-top: 20px;
    margin-left: 27px;
  }
  .add{
    width: 90px;
    height: 35px;
    background-color: #f1f1f1;
    color: #333;
    border: none;
    border-radius: 2px;
  }
  button{
    outline: none;
    cursor: pointer;
  }
  .lay-title>span{
    margin-left: 15px;
  }
  #dont{
    color: red;
    display: none;
    margin-left: 27px;
  }
</style>
