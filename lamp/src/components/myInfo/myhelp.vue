<template>
  <div class="myhelp">
    <div class="lay-div">
      <div class="lay-center lay-title">
        售后服务记录
    </div>
    </div>
    <div class="lay-div">
      <div class="lay-center">
        <div class="cont-title">
          全部服务记录
        </div>
        <div class="help-list helplist">
          <ul class="myserive">
            <li>服务记录编号</li>
            <li>订单编号</li>
            <li>商品名称</li>
            <li>申请时间</li>
            <li>状态</li>
            <li>操作</li>
          </ul>

          <div class="myhelps">
            <div  v-for="item in helps" :key="item.serid">
              <helpcom :serviceid="item.service_id" :helpid="item.user_id" :helpname="item.NAME" :helpdate="item.service_time" :helpstatus="item.STATUS">  </helpcom>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import helpcom from './helpcom.vue'
  export default {
    name: '',
    data() {
      return {
        helps:[],

      }
    },
    components: {
      helpcom: helpcom
    },
    created(){
//        用户登录后id的模拟数据
//      sessionStorage.userid=1;
      this.$axios.get("/api/getService.do",{params:{userid:sessionStorage.userId}}).then((response)=>{
        console.log(response.data);
        this.helps=response.data;
        for(var i=0;i<this.helps.length;i++){
          this.helps[i].service_time=(this.helps[i].service_time).substring(0,10);
          if(this.helps[i].STATUS==1){
            this.helps[i].STATUS="完成"
          }
          else{
            this.helps[i].STATUS="未完成"
          }
        }
      })
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/less/myinfo.less";
  *{
    color: #797979;
  }
  .myserive{
    width: 100%;
    height: 30px;
    border-spacing: 0;
    border: 1px solid #f0f0f0;
    background-color: #f0f0f0;
  }

  .myhelps{
    margin-bottom: 30px;
  }
  .myserive>li{
    float: left;
    list-style: none;
    text-align: center;
    line-height: 30px;
  }
  .myserive>li:first-child{
    width: 220px;
  }
  .myserive>li:nth-child(2),.myserive>li:nth-child(4){
    width: 148px;
  }
  .myserive>li:nth-child(3){
    width: 284px;
  }
  .myserive>li:nth-child(5),.myserive>li:nth-child(6){
    width: 74px;
  }

</style>
