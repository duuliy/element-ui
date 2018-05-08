<template>
  <div class="buyfrist">
    <img :src="imgsrc" alt="">

    <div class="buyins">
      <div class="pagectr">
        <div class="pageone">
          <p>{{headtitle}}</p>
          <p>{{headtext}}</p>
          <p>￥{{headprice}}</p>
        </div>

        <div class="pagetwo pagetw">
          <p>选择功能</p>
          <ul>
            <li v-for="(item,index) in actions" @click="choose(index+1,item.act_name)" class="lilist1">
              <gongneng :chosetext="item.act_name"  choseC="style1" ></gongneng>
            </li>
          </ul>
        </div>

        <div class="pagetwo pagethr">
          <p>选择颜色</p>
          <ul class="yanse">
            <li @click="choose2(0,'白色')" class="lilist2" title="0"> <gongneng choseC="style3"></gongneng> </li>
            <li @click="choose2(1,'橙色')" class="lilist2" title="1"> <gongneng choseC="style4"></gongneng> </li>
            <li @click="choose2(2,'蓝色')" class="lilist2" title="2"> <gongneng choseC="style5"></gongneng> </li>
            <li @click="choose2(3,'灰色')" class="lilist2" title="3"> <gongneng choseC="style6"></gongneng> </li>
            <li @click="choose2(4,'黑色')" class="lilist2" title="4"> <gongneng choseC="style7"></gongneng> </li>
          </ul>
        </div>

        <div class="pagetwo pagefour">
          <p>选择规格</p>
          <ul>
            <li @click="choose3(1,'100*100')" class="lilist3"> <gongneng chosetext="100*100" choseC="style2"></gongneng> </li>
            <li @click="choose3(2,'200*200')" class="lilist3"> <gongneng chosetext="200*200" choseC="style2"></gongneng> </li>
            <li @click="choose3(3,'300*300')" class="lilist3"> <gongneng chosetext="300*300" choseC="style2"></gongneng> </li>
          </ul>
        </div>

        <div class="pagefive">
          <div>
            <btn btntext="立即购买" btnC="btn1b" @submit="buy"></btn>
          </div>

          <div>
            <btn btntext="加入购物车" btnC="btn1a" @submit="submit"></btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  import gongneng from './gongneng.vue'
  import btn from '../btn/btndemo.vue'

    export default {
        name: 'buyheader',
        data () {
            return {
                actions:[],
              gongneng:'',
              yanse:'',
              guige:'',
            }
        },
        components: {
          gongneng: gongneng,
          btn: btn
        },
      props:['headtitle','headtext','headprice','imgsrc'],
      methods:{
            choose(obj,gongneng){
               var lilist1=document.getElementsByClassName("lilist1");
                for(var i=0;i<lilist1.length;i++){
                  lilist1[i].style.borderRadius="3px";
                  lilist1[i].style.border="#cccccc";
                  lilist1[obj-1].style.borderRadius="3px";
                  lilist1[obj-1].style.border="1px solid #ff7a55";
                }
                this.gongneng=gongneng
                console.log('aa',this.gongneng)
                this.$emit("xuanzegongneng",gongneng)
            },
            choose2(obj,yanse){
              var lilist2=document.getElementsByClassName("lilist2");
                for(var i=0;i<lilist2.length;i++){
                  if(i!=obj){
                    lilist2[i].style.transform="scale(1)"
                  }else {
                    lilist2[i].style.transform="scale(1.3)";
                  }
                }
                this.yanse=yanse
                this.$emit("xuanzeyanse",yanse)
            },
            choose3(obj,guige){
              var lilist3=document.getElementsByClassName("lilist3");
              for(var i=0;i<document.getElementsByClassName("lilist3").length;i++){
                lilist3[i].style.borderRadius="3px";
                lilist3[i].style.border="#cccccc";
                lilist3[obj-1].style.borderRadius="3px";
                lilist3[obj-1].style.border="1px solid #ff7a55";
              }
              this.guige=guige
              this.$emit("xuanzeguige",guige)
            },
            submit(){
              let id=location.href.split("http://localhost:8080/#/buypages?id=")[1];
              if(sessionStorage.username==undefined){
                let url=location.href.split("http://localhost:8080/#")[1]
                console.log("购物车路径",url)
                this.$router.push({
                  path: '/login/userlogin',
                  query: {redirect: url}
                })
              }else{
                let arr=[];
                arr.push(id);
                arr.push(this.gongneng);
                arr.push(this.yanse);
                arr.push(this.guige);
                this.addCard(arr)
                this.$router.push('/cart')
              }
            },
            buy(){
              let id=location.href.split("http://localhost:8080/#/buypages?id=")[1];
              if(sessionStorage.username==undefined){
                let url=location.href.split("http://localhost:8080/#")[1]
                console.log("购物车路径",url)
                this.$router.push({
                  path: '/login/userlogin',
                  query: {redirect: url}
                })
              }else{
                let arr=[];
                arr.push(id);
                arr.push(this.gongneng);
                arr.push(this.yanse);
                arr.push(this.guige);
                this.addCard(arr)
                this.$router.push('/placeOrder')
              }
            },
           ...mapActions(['addCard'])
      },
      created(){
            this.$axios.get("/api/getAllActions.do").then(resp=>{
                console.log(resp.data)
              this.actions=resp.data;
                console.log(this.actions)
            })
      }
    }

</script>

<style scoped>
  p{
    color: #797979;
  }
  img{
    width: 100%;
    height: 520px;
  }
  .buyfrist{
    position: relative;
    height: 520px;
    background-image: url("../../../../static/buyimg/yedeng1.jpg");
    background-size: cover;
  }
  .buyfrist img{
    margin-left: 300px;
    margin-top: 100px;
    width: 400px;
    height: 300px;
    background-repeat: no-repeat;
    transition: all .2s linear;
  }
  .buyfrist img:hover{
    transform: scale(1.1);
  }
  .buyins{
    width: 430px;
    height: 480px;
    position: absolute;
    top: 20px;
    left: 55%;
    background-color: white;
  }
  .pagectr{
    width: 350px;
    height: 415px;
    margin:15px auto;
  }
  .pageone{
    width: 100%;
    height: 120px;
  }
  .pageone>p:first-child{
    text-align: center;
    color: #5e5e5e;
    font-size: 20px;
    font-weight: bold;
  }
  .pageone>p:nth-child(2),.pageone>p:nth-child(3){
    font-size: 14px;
    text-align: center;
    margin-top:15px;
    color: #797979;
  }
  .pageone>p:nth-child(3){
    font-size: 20px;
    color: #ff7a55;
  }
  .pagetwo{
    width: 100%;
    height: 120px;
  }
  .pagetwo>p{
    width: 100px;
    margin-left: 15.5px;
  }
  ul{
    height: 80px;
    /*overflow: hidden;*/
    margin-top:10px;
  }
  .yanse{
    margin-top: 0px;

  }
  li{
    list-style: none;
    /*float: left;*/
    display: inline-block;
    margin-left: 15px;
    margin-bottom: 5px;

  }
  .pagethr,.pagefour,.pagefive{
    height: 70px;
  }
  .pagethr>ul{
    margin-top: 10px;
  }
  .pagethr>ul:nth-of-type(2){
    margin-top: 0px;
  }
  .pagefive{
    margin: auto;
    width: 318px;
  }

  .pagefive>div:first-child{
    float: left;
    margin-top: 15px;
  }
  .pagefive>div:last-child{
    float: right;
    margin-top: 15px;
  }
</style>
