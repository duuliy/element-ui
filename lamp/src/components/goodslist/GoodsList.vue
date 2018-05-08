<template>
  <div>
    <div class="head">
      <div class="head_img">
        <img :src='$host+goodsArr[0].imgsrc' alt="">
      </div>
      <div class="head_p">
        <p>{{goodsArr[0].goodName}}</p>
        <p>{{goodsArr[0].info}}用于集中控制放在客厅或床头，支持双向通信；</p>
        <span>￥{{goodsArr[0].price}}</span>
        <btn btnC="btn1a" btntext="加入购物车" @submit="addgouwuche(goodsArr[0].goodId)"></btn>
      </div>
    </div>
    <div class="goods_one">
      <div class="goods_num">
        <p>共有{{count}}个商品</p>
      </div>
      <div class="goods_lamps">
        <div>
          <h3>灯具</h3>
          <div>
            <div class="leixing"><input type="radio" name="leixing" value="true" @change="lxbianhua('all')"><span>所有</span></div>
            <div v-for="item in leixing">
              <div class="leixing"><input type="radio" name="leixing" :value="item.assort_id" @change="lxbianhua(item.assort_id)"><span>{{item.assort_name}}</span></div>
            </div>
          </div>

        </div>
        <div class="scene">
          <h3>场景</h3>
          <!--<div class="lamps">-->
          <div>
            <div class="leixing"><input type="radio" name="changjing" value="true" @change="cjbianhua('all')"><span>所有</span></div>
            <div v-for="item in sceneArr">
              <div class="leixing"><input type="radio" name="changjing" :value="item.scene_id" @change="cjbianhua(item.scene_id)"><span>{{item.NAME}}</span></div>
            </div>
          </div>
        </div>
        <div class="scene">
          <h3>配件</h3>
          <!--<div class="leixing"><input type="radio" name="peijian" value="配件"><span>配件</span></div>-->

        </div>
      </div>
        <div class="goods_list">
          <goods v-for="item in goodsArr"  :goods_id="item.goodId" :goods_src="item.imgsrc" :goods_name="item.goodName" :goods_present="item.info" :goods_price="item.price" @addCart="addgouwuche(item.goodId)"></goods>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import btn from '../common/btn/btndemo.vue'
  import goods from './goods.vue'
  import lamps from './lamps.vue'
  export default {
      name: 'GoodsList',
    data () {
          return {
            count: '',
            radio2: 3,
            mychang:[],
            mydeng:[],
            mypei:[],
            checkList: [],
            sceneArr:[],
            leixing:[],
            goodsAll:[],
            goodsArr:[],
            leixingbianhua:'',
          }
    },
    components: {
          btn: btn,
      goods: goods,
      lamps: lamps
    },
    methods:{
      changjing:function(changjing){
//          this.mychang=changjing;
          console.log(this.mychang);
          if(changjing==undefined||changjing==""){
            var data1="";
          }else{
            this.mychang.push(changjing);
            var data1=this.mychang;
          }
        var a=[];
        for(var i=0;i<this.goodsArr.length;i++){
          if(this.goodsArr[i].class2.indexOf(data1)!=-1){
            a.push(this.goodsArr[i]);
          }
        }
        console.log(a);
        return a;
      },
      addgouwuche(id){
          console.log("进入购物车",id)
        if(sessionStorage.username==undefined){
          let url=location.href.split("http://localhost:8080/#")[1]
          console.log("购物车路径",url)
          this.$router.push({
            path: '/login/userlogin',
            query: {redirect: url}
          })
        }else{
          this.chuancan(id)
          this.$router.push("/cart")
        }
      },
      lxbianhua(id){
        console.log("类型变化",id)
        console.log(this.goodsAll)
        this.goodsArr=[];
        let arr=[]
        arr=this.goodsAll.filter((item)=>{
            if(id=="all"){
              return (item.goodstype=="灯具")
            }else{
              return (item.goodstype=="灯具"&&item.leixing==id)
            }
        })
        for(var i=0;i<arr.length;i++){
            if(i<6){
              this.goodsArr.push(arr[i])
            }
        }
        console.log(this.goodsArr)
      },
      cjbianhua(id){
          console.log("场景变化",id)
        this.goodsArr=[];
        let arr=[];
        arr=this.goodsAll.filter((item)=>{
            if(id=="all"){
                return true;
            }else{
              return (item.scene==id)
            }

        })
        for(var i=0;i<arr.length;i++){
          if(i<6){
            this.goodsArr.push(arr[i])
          }
        }
      },
      hanshu(data){
          console.log("进入传参",data)
        this.getAllgoods(data)
      },


      //初始加载所有商品到vuex里面
      ...mapActions(['getAllgoods','chuancan'])
    },
    created(){
      let that=this
      this.$axios.get("/api/getAllgoods.do").then(resp=>{
         console.log(resp.data)
          that.count=resp.data.length;
         that.goodsAll=resp.data;
         that.hanshu(that.goodsAll);
         for(var i=0;i<resp.data.length;i++){
             if(i<6){
               that.goodsArr.push(resp.data[i])
             }
         }

      })
      this.$axios.get("/api/getScene.do").then(resp=>{
        console.log(resp.data)
        that.sceneArr=resp.data;
      })
      this.$axios.get("/api/getleixing.do").then(resp=>{
          console.log(resp.data)
        that.leixing=resp.data
      })
    },
    computed: {
//      newgoodsArr: function () {
//        var that=this;
//        return that.goodsArr.filter(function (goodsArr) {
//          return goodsArr.goodstype.indexOf('灯具')&&goodsArr.leixing==that.leixingbianhua!= -1;
//        })
//      }
    },
  }

</script>

<style scoped>
  .lamps{
    margin-top:8px;
  }
.head{
  width:100%;
  height:488px;
  background-image: url("../../../static/GoodsList/goodsbg.jpg");
}


  .head_img{
    width:60%;
    float:left;
    text-align: right;
  }
  .head_img img{
    margin-top: 50px;
    width: 300px;
    transition: all 0.2s linear;
  }
  .head_img img:hover{
    transform: scale(1.1);
  }

  .head_p{
    /*padding-left:10%;*/
    padding-right:9%;
    width:25%;
    float:left;
    margin-top:6%;
  }
  .head_p {
    letter-spacing: 2px;
  }
.head_p p:nth-child(1){
  font-size: 22px;
  font-weight: 700;
  color:white;
}
.head_p p:nth-child(2){
  margin-top:6%;
   font-size: 13px;
   font-weight: 400;
   color:white;
  line-height:24px;
 }
.head_p span{
  display: block;
  margin-top:20%;
  margin-bottom:2%;
  font-size: 22px;
  font-weight: 400;
  color:#ff7a55;
}
  .goods_one{
    padding-left:6%;
    padding-right:6%;
  }
  .goods_num{
    /*height:100px;*/
    color: #5A5E66;
    margin-top:60px;
    margin-bottom:15px;
    text-align: right;
    /*display:table-cell;      !*按照单元格的样式显示元素*!*/
    vertical-align:bottom;
  }
  .goods_lamps{
    width:7%;
    float:left;
    height:100%;
  }
  .goods_lamps input{
    width: 20px;
  }
  .goods_lamps h3{
    color: #5B5B5B;
  }
  .goods_list{
    width:93%;
    float:left;
  }
  .clear{
    clear: both;
  }
.lamps{
  margin-top:8px;
  /*color:#ff6751!important;*/
}

.leixing{
  margin-top: 10px;
  margin-left: 10px;
  color: #5A5E66;

}
  .leixing span{
    margin-left: 10px;
  }

.el-radio__input.is-checked+.el-radio__label {
  color: #ff6751!important;
}
.el-radio__input.is-checked .el-radio__inner {
  border-color: #ff6751!important;
  background: #ff6751!important;
}
  .scene{
    margin-top:20px;
  }
</style>
