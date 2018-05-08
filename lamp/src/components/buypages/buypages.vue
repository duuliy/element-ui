<template>
  <div id="buypages">
    <!--主题-->
    <div>
      <!--<div v-for="item in myhead" :key="item.headtitle">-->
        <buyheader @xuanzeguige="xuanzeguige" @xuanzegongneng="changegongneng" @xuanzeyanse="xuanzeyanse" :headtitle="goodsbyid.goodName" :headtext="goodsbyid.info" :headprice="goodsbyid.price" :imgsrc="$host+goodsbyid.imgsrc"></buyheader>
      <!--</div>-->
    </div>
    <!-- 免费XXX -->
    <div class="buydpt">
      <div>
        <img src="../../../static/buyimg/free.png" alt="">
        <img src="../../../static/buyimg/tenyears5.png" alt="">
        <img src="../../../static/buyimg/white.png" alt="">
      </div>
    </div>

     <!--图片文字说明-->
    <div>
      <div class="buyfontpic" v-for="item in myfontpic" :key="item.id">
        <buyfontpic  :imgsrc="'static/'+item.img" :mytitle="item.title" :myp="item.text"></buyfontpic>
      </div>
      <div class="buyfontpic2" v-for="item in myfontpic2" :key="item.id">
        <butfontpic2 :imgsrc="'static/'+item.img" :title="item.title" :mycont="item.text"></butfontpic2>
      </div>
    </div>




    <!-- 评论 -->
    <div class="comments" id="com">
      <div v-for="item in mycomments">
        <goodscomment :imgsrc="'static/'+item.img" :username="item.name" :userdate="item.date" :usertext="item.text"></goodscomment>
      </div>

      <div class="commore" id="more">
        <p @click="add">显示 <span>更多评论+</span></p>
      </div>
    </div>

    <!--可能还想看-->
    <div class="buymaybe">
      <div>
        <hr>
        <p><span>您</span>可能还想看</p>
      </div>

      <div>
        <!-- 组件 -->
        <div>
          <div v-for="item in mybuywant" :key="item.account">
            <buywant :imgsrc="'static/'+item.img" :title="item.title" :account="item.account" :price="item.price"></buywant>
          </div>
        </div>



      </div>
    </div>



  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  import buyheader from '../common/buy/buyheader.vue' //头部
  import buyfontpic from '../common/buy/buyfontpic.vue' //内容组件1（文字在左）
  import butfontpic2 from '../common/buy/buyfontpic2.vue'//内容组件2（文字在右）
  import goodscomment from '../common/buy/goodscomment.vue' //评论
  import buywant from '../common/buy/buywant.vue' //您可能还想看
    export default {
      name: 'buypages',
      data () {
            return {
              myhead: [{
                  img:'buyimg/yedeng1.jpg',
                    headtitle: '时尚智能夜灯',
                    headtext: '时尚智能壁灯是一款感应照明产品，人到灯亮，人离灯熄，亲切方便，安全节能。',
                    headprice: '1699'
                }],
                myfontpic : [{
                    id:1,
                    img:'buyimg/yedeng2.jpg',
                    title:'举步之间 光明立现',
                    text: '光敏 + 红外感应 丨 超低功耗 丨 亮度双档调节 丨 可贴可挂'
                   },
                  {
                    id:2,
                    img:'buyimg/yedeng3.jpg',
                    title:'随你所至，非凡感知好贴心',
                    text:'120° 超大角度感应范围，感知距离达 5-7 米。采用先进光敏传感 + 人体红外传感技术，暗光条件下自动开启，黑暗里捕捉你的一举一动，15 秒持续点亮。同时具备防红外干扰功能，所到之处，好光相随。'
                  } ,
                  {
                    id:4,
                    img:'buyimg/yedeng5.jpg',
                    title:'随心所欲，灵活好光更自由',
                    text:'3M 背胶灵活设计，冲破插座及安装束缚。不论衣柜、楼梯、储物柜，还是床头、车库、大门口，需要光的地方，它为你照亮。更有创意活动挂钩设计，举手之间开启光的守候'
                 }
                ],

                mycomments: [{
                    img: 'buyimg/1.jpg',
                    name: 'lvshan',
                    date: '2017-12-06',
                    text: '应该不错的吧~'
                },
                  {
                    img: 'buyimg/2.jpg',
                    name: 'lvshan2',
                    date: '2017-12-12',
                    text: '分满意！质量非常好，与卖家描述的完全一致，非常满意,真的很喜欢，完全超出期望值， 发货速度 非常快，包装非常仔细、严实， 物流公司服务 态度很好，运送速度很快，很满意的 一次购物'
                  }
                ],

                mybuywant: [{
                img: 'buyimg/mb1.jpg',
                title: '3.5寸有线真彩色触屏(带定时)',
                account: '标准86安装，支持无缝连接，可搭配多种材质及颜色的面吧',
                price: '1000'
              },
                {
                  img: 'buyimg/mb2.png',
                  title: '智能照明控制面板',
                  account: '标准86安装，支持无缝连接，可搭配多种材质及颜色的面吧',
                  price: '1200'
                },
                {
                  img: 'buyimg/mb3.jpg',
                  title: '智能照明控制面板',
                  account: '标准86安装，支持无缝连接，可搭配多种材质及颜色的面吧',
                  price: '1600'
                },
                {
                  img: 'buyimg/mb4.jpg',
                  title: '智能照明控制面板',
                  account: '标准86安装，支持无缝连接，可搭配多种材质及颜色的面吧',
                  price: '1500'
                }
              ],

                myfontpic2 : [{
                  img: 'buyimg/yedeng6.jpg',
                  title:'智慧光精灵，光明随时随地',
                  text:'突破插座禁锢，告别安装繁琐，一扫黑暗死角，超大感应范围，低能耗，给你 365 个贴心陪伴的夜晚。静谧夜里，无需言语，自然懂你。'
                },
                  {
                    img: 'buyimg/yedeng7.jpg',
                    title:'独运匠心，科技为你的夜晚添光',
                    text:'采用菲涅尔超薄透镜，提升传感器性能。鱼鳞全反射结构，将光高效反射至漫反射片，并均匀打在扩散罩上，在朦胧的夜晚，为家人带来更好的视觉感受。'
                  }
                  ],
              gongneng:'',
              yanse:'',
              guige:'',


            }
      },
      components: {
        buyfontpic: buyfontpic,
        buyheader: buyheader,
        goodscomment: goodscomment,
        buywant: buywant,
        butfontpic2: butfontpic2
      },
      methods: {
        add () {
          var newarr = [{ img: 'images/3.jpg', name: 'lvshan3', date: '2017-11-11', text: '正规商品，非常精致，实用，大小合适，面料好没味道，真心好评！掌柜还送了精美礼物，感谢！'}];
          this.mycomments= newarr.concat(this.mycomments);
        },
        hanshu(id){
          this.goodsByid(id)
        },
        changegongneng(gongneng){

          this.gongneng=gongneng;
          console.log("进入功能",this.gongneng)
        },
        xuanzeyanse(yanse){

          this.yanse=yanse
          console.log("进入颜色",this.yanse)
        },
        xuanzeguige(guige){
          this.guige=guige;
          console.log("规格",this.guige)
        },
        ...mapActions(['goodsByid'])
      },
      created(){
          console.log("this id",this.$route.query.id)
        this.hanshu(this.$route.query.id)
      },
      computed:{
        ...mapGetters(['goodsbyid'])
      },
    }

</script>

<style scoped lang="less">
  .aaa .buya h1{
    color:red
  }
  .buydpt{
  width: 100%;
  height: 130px;
  overflow: hidden;
  >div{
    width: 51.6%;
    height: 88px;
    margin:21px auto;
    img:nth-child(1){
      float: left;
    }
    img:nth-child(3){
      float: right;
    }
    img:nth-child(2){
      margin-left: 31%;
    }
  }
}

  .buyfontpic{
    position: relative;
    font-size: 0;
  }
  .comments{
    width: 1349px;
    height: auto;
    overflow: hidden;
  }
  .commore{
    margin-top: 45px;
    width: 100%;
    height: 50px;
    background-color: #f2f2f2;
  >p{
    width: 115px;
    color: #ff6700;
    margin: auto;
    line-height: 50px;
    cursor: pointer;
    >span{
      font-size: 16px;
      color: #797979;
    }
  }
  }

  //可能还想看
  .buymaybe{
    width: 100%;
    height: 475px;
    >div:nth-child(1){
      width: 100%;
      height: 150px;
      overflow: hidden;
      >hr{
        width: 2px;
        height: 60px;
        background-color: #797979;
        border: none;
        margin:auto;
        margin-top: 20px;
      }
    }
  }
  .buymaybe>div:nth-child(1)>p{
  width: 180px;
  font-size: 28px;
  color: #797979;
  margin: auto;
      >span{
        font-size: 36px;
      }
}
  .buymaybe>div:nth-child(2){
    width: 100%;
    height: 325px;
    overflow: hidden;
    >div{
      width: 1250px;
      height: 325px;
      margin: auto;
      >div{
        margin-top: 37px;
      }
    }
  }

  //图片
  .buypic>figure{
    position: relative;
    font-size: 0;
     img{
      width: 100%;
      height: 520px;
  }
    figcaption{
      position: absolute;
      top: 40%;
      left: 12%;
      width: 615px;
      height: 150px;
      background-color: rgba(128, 128, 128, 0.51);
    }
  }


</style>
