<template>
  <div>
    <div class="funcitem" v-for="item in functionArr">
      <!--<input type="checkbox" name="functions" :value="item.act_id" @change="selectfunc(item.act_name)"><span>{{item.act_name}}</span>-->
      <input type="checkbox" name="functions" :value="item.act_name" @change="selectfunc()"><span>{{item.act_name}}</span>
    </div>
    <!--<input type="checkbox" name="functions"><span>{{act_name}}</span>-->
  </div>
</template>

<script>

  var funcsArr=[];
  var checkboxWrap=document.getElementsByName("functions");
  function getCkexkbox(){
    funcsArr=[];
      for(var i=0;i<checkboxWrap.length;i++){
          if(checkboxWrap[i].checked){
              funcsArr.push(checkboxWrap[i].value);
          }
      }
    console.log("~~~~~~~~~~`选中的功能：",funcsArr)
  }

    export default {
        name:'funcbox',
      data(){
            return {
              functionArr:[],
//              functionArr:[
//                {act_id:"1",act_name:"智能调色"},
//                {act_id:"2",act_name:"安全监测"},
//                {act_id:"3",act_name:"停电自锁"},
//                {act_id:"4",act_name:"助眠功能"},
//                {act_id:"5",act_name:"自调亮度"},
//                {act_id:"6",act_name:"感应照明"},
//                {act_id:"7",act_name:"智能遥控"},
//                {act_id:"8",act_name:"智能控温"},
//                {act_id:"9",act_name:"定时控制"}
//              ],
            }
      },
//      props:['act_name']
      methods:{
//        selectfunc:function(fname){
//            console.log("selectfunc");
//            this.$emit("selectfunctions",fname)
//        }
        selectfunc:function(){
          console.log("selectfunc");
          getCkexkbox();
          this.$emit("selectfunctions",funcsArr)
        }
      },
//      请求功能数据
      created(){
        this.$axios.get("/api/startDiyfunc.do").then(response=>{
          console.log(response);
          this.functionArr=response.data
          console.log(this.functionArr)
        });
      }
    }

</script>

<style scoped>
  .funcitem{
    width: 100px;
    height: 20px;
    font-size: 14px;
    margin-right: 20px;
    margin-bottom: 30px;
    display: inline-block;
    /*outline: 1px solid palegreen;*/
  }
</style>
