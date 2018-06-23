<template>
  <div>
    <div class="menu">
      <ul>
        <li><b>风格:</b></li>
        <li>全部</li>
        <li>古典</li>
        <li>现代</li>
        <li>时尚</li>
        <li>艺术</li>
        <li>流行</li>
      </ul>
      <br>
      <div>
        <b id="ll">类型:</b>
        <classify v-for="item in classif" :key="item.a_id" @clicked="sifyy(item)" :classifyy="item.a_name"></classify>
      </div>
      <div class="searchh">
      <span><b>筛选:</b></span> <input type="text" size="5" width="50px" v-model="search">-<input type="text" size="5" width="50px">
      </div>
      </div>
  <div class="bottom">
    <!--<router-link :to="{path:'/shopdetails',query:{id:item.g_id}}" @clicktwo="linkdetail" v-for="item in dothis" @clicked="addcartt(item.g_id)">-->
    <!--<router-link  v-for="item in dothis" >-->
    <product_specially v-for="item in dothis" @clicktwo="linkdetail(item)" @clicked="addcartt(item)" class="list" :key="item.g_id" :productTitle="item.g_name" :productPrice="item.g_detail"
                       :imgsrc="item.g_img" whclass="b"
    ></product_specially>
    <!--</router-link>-->
  </div>
    <!--//分页-->
    <!--<pagee></pagee>-->
  </div>
</template>

<script>
  import product_specially from "../common/product_specially.vue"
  import classify from "./classify.vue"
//  import page from "./page.vue"
    export default{
      data () {
        return {
            list:[],
          search:"",
          classif:[{a_id:'1',a_name:'柜子'},
            {a_id:'2',a_name:'桌子'},
            {a_id:'3',a_name:'床'},
            {a_id:'4',a_name:'椅子'},
            {a_id:'5',a_name:'沙发'},
            {a_id:'6',a_name:'茶几'}
          ]
        }},
      components: {
        product_specially,
        classify,
//        pagee:"page"
      },
      created () {
        var that=this;
        this.$axios.post('/api/getshopdata.do')
          .then(res=>{
//            console.log(res.data);
            that.list=res.data;
//            console.log(that.list);
          })
      },
      methods:{
        sifyy(item) {
          console.log(item.a_id)
          var that=this;
          this.$axios.get('/api/sishopdata.do',{params:{id:item.a_id}})
            .then(res=>{
//            console.log(res.data);
              that.list=res.data;
//            console.log(that.list);
            })
        },
        addcartt(item){
//            console.log(item)
          var that=this;
          this.$axios.get('/api/addcart.do',{params:{id:item.g_id}})
            .then(res=>{
//              that.list=res.data;
            })

        },

        linkdetail(item){
          this.$router.push({path: '/shopdetails', query: {id:item.g_id}});
        }
      },
      computed:{
          dothis:function () {
            var that=this;
            let newarr=this.list.filter(function (f) {

              console.log(f)
              let arr=f.g_detail.toString().indexOf(that.search)&&f.g_name.indexOf(that.search)
              return arr!=-1
            })
            return  newarr
          }
      }
    }
</script>

<style scoped lang="less">
  *{
    font-family: 微软雅黑;
  }
  #ll{
    float: left;
    margin-top: 15px;
    margin-left: -38px;
  }
  .bottom{
    float: left;
    margin-top:25px;
    margin-left: 146px;
    margin-bottom: 35px;
    .list{
      float: left;
      margin-left: 23px;
      margin-top: 25px;
      /*width: 235px;*/
      /*height: 272px;*/
      img{
        /*width: 235px;*/
        /*height: 191px;*/
      }
    }
  }
  .menu{
    font-family: 微软雅黑;
    margin-top: 45px;
  }
  ul{
    margin-left: 13%;
    margin-top: 15px;
    li{
      float: left;
      margin-left: 15px;
    }
  }
  .searchh{
    float: right;
    margin-right: 12%;
  }
  //分页

</style>
