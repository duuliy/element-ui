<template>
    <div id="bannerText">
      <div id="left">
        <table>
          <tr><td><p>我们的功能</p></td></tr>
          <tr><td><img src="../../../../static/indeximages/z1.png" alt=""><span>智能遥控</span></td>
            <td><img src="static/indeximages/z2.png" alt=""><span>助眠功能</span></td></tr>
          <tr><td><img src="static/indeximages/z3.png" alt=""><span>感应照明</span></td>
            <td><img src="static/indeximages/z4.png" alt=""><span>安全监测</span></td></tr>
          <tr><td><img src="static/indeximages/z5.png" alt=""><span>智能调色</span></td>
            <td><img src="static/indeximages/z6.png" alt=""><span>智能控温</span></td></tr>
        </table>
      </div>
      <div id="right" >
        <h1>客户评价</h1>
        <el-carousel  :interval="3000" arrow="never" indicator-position="none">
          <el-carousel-item v-for="item in 3" :key="item">
            <div class="banner" v-if="item==1" >
            <h3 >来着{{textArr[0].name}}客户的评价</h3>
            <p>{{textArr[0].text}}</p>
              <el-rate
                v-model="value5"
                disabled
                show-score
                text-color="#ff7a55"
                score-template="{value}">
              </el-rate>
            </div>
            <div class="banner" v-if="item==2" >
              <h3 >来着{{textArr[1].name}}客户的评价</h3>
              <p>{{textArr[1].text}}</p>
              <el-rate
                v-model="value5"
                disabled
                show-score
                text-color="#ff7a55"
                score-template="{value}">
              </el-rate>
            </div>
            <div class="banner" v-if="item==3" >
              <h3 >来着{{textArr[2].name}}客户的评价</h3>
              <p>{{textArr[2].text}}</p>
              <el-rate
                v-model="value4"
                disabled
                show-score
                text-color="#ff7a55"
                score-template="{value}">
              </el-rate>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'bannerText',
      data(){
            return{
                textArr:[{id:1,name:'张三@xingxing',text:'金色照耀着你的日子，富有特性的设计和智能化的连接为一体。随着安逸的生活、休闲的日常生活就会舒适地充满着摸金色和贴心金色会给你的日常生活增添不同的色彩'},
                  {id:2,name:'我是一只小小羊',text:'具有很多的智能功能，并且我在装修后还找了设计师定制属于自己房间的灯具，设计师团队也是超棒的呢'},
                  {id:3,name:'大灰狼与红太狼',text:'明天智能灯具的出现改善了我的生活，安装后使用简单但是带来的便利却是很多很多，很值得购买'},],
              value5:5,
              value4:4.8
            }
      }
    }
</script>

<style scoped>
  *{
    font-family: '微软雅黑';
  }
#bannerText{
  width: 100%;
  height: 340px;
}
  #left{
    width:40%;
    height: 340px;
    float:left;
  }
  #right{
    width:60%;
    height: 340px;
    float:left;
    position: relative;
  }
  table{
    width:50%;
    margin: 0 auto;
    font-size: 13px;
    margin-top:20%;
    color: rgba(51, 51, 51, 0.8);
  }
  #right>div{
    width: 80%;
    margin: 0 auto;
  }
  table p{
    font-weight: bold;
  }
  table td{
    width: 50%;
    height:40px;
    line-height:40px;
    padding-left:15%;
    font-weight: 600;
    color: rgba(51, 51, 51, 0.6);
  }
  td>span{
    padding-left:7px;
  }
  /*right*/
  #right h1{
    font-size: 30px;
    color: rgba(51, 51, 51, 0.8);
    font-weight: 300;
    margin-top:7%;
    margin-left:10%;
  }
  #right h3{
    font-size:13px;
    color: rgba(51, 51, 51, 0.8);
    font-weight:600;
    margin-top:4%;
  }
  #right p{
    font-size:16px;
    color: rgba(51, 51, 51, 0.5);
    line-height: 30px;
    font-weight:600;
    margin-top:3%;
    padding-bottom: 4%;
  }

</style>
