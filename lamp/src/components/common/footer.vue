<template>
  <div id="footer">
    <div class="footer_left">
      <div>
        <ul>
          <li><span>售后服务</span></li>
          <li>售后维修</li>
          <li>配件安装</li>
        </ul>
      </div>
      <div>
        <ul>
          <li><span>关于我们</span></li>
          <li>联系我们</li>
          <li>品牌故事</li>
        </ul>
      </div>
      <div>
        <ul>
          <li><span>快速上手</span></li>
          <router-link to="xuzhi/buyxz" tab="li">购物须知</router-link>
          <li>智能介绍</li>
        </ul>
      </div>
      <div>
        <ul>
          <li><span>团队介绍</span></li>
          <li>设计团队</li>
        </ul>
      </div>
      <div>
        <ul>
          <li><span>智能调控</span></li>
          <li>APP下载</li>
          <li>智能面板</li>
          <li>遥控器</li>
        </ul>
      </div>
    </div>
    <div class="footer_right">
      <div>Copyright © 2012-2016 Vannylove 版权所有 All Rights Reserved | 蜀ICP备12019332号-2</div>
      <div></div>
    </div>
  </div>
</template>

<script>
    export default {
        name:"footer"
    }
</script>

<style scoped lang="less">
  #footer{
    border-top:1px solid #EFEFEF;
    width: 100%;
    text-align: center;
    overflow: hidden;
     >div{
      width: 655px;
      height: 200px;
      margin: 0px auto;
      /*border: 1px solid black;*/
    }

    .footer_left >div{
      margin: 0px auto;
      float: left;
      padding: 32px;
      ul li{
        cursor: pointer;
        list-style: none;
        line-height: 30px;
        color: #A3A2A3;
        span{
          color: #6A6B71;
          display: inline-block;
          margin-bottom: 20px;
        }
      }
    }
    .footer_right{
      height: 60px;
      /*width: 200px;*/
      line-height: 60px;
      border-top:1px solid #EFEFEF;

      >div{
        width: 100%;
        text-align: center;
        float: left;
        color: #A3A2A3;
        font-size: 12px;
      }
    }
    a{
      text-decoration: none;
      color: #A3A2A3;
    }

  }

</style>
