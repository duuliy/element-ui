<template>
  <div class="par">
    <div class="shutter">
      <div class="shutter-img">
        <a href="#"><img src="../../static/images/mybanner1.jpg" alt="#"></a>
        <a href="#"><img src="../../static/images/mybanner2.jpg" alt="#"></a>
        <a href="#"><img src="../../static/images/mybanner3.jpg" alt="#"></a>
        <a href="#"><img src="../../static/images/mybanner4.jpg" alt="#"></a>
        <a href="#"><img src="../../static/images/mybanner5.jpg" alt="#"></a>
        <a href="#"><img src="../../static/images/mybanner6.jpg" alt="#"></a>
      </div>
      <ul class="shutter-btn">
        <li class="prev"></li>
        <li class="next"></li>
      </ul>
    </div>
  </div>

</template>
<script>
  import contenter from './contenter.vue'
  export default {
    name:"one",
    created()
    {
      setTimeout(function () {
        $('.shutter').shutter({
          shutterW: 1349, // 容器宽度
          shutterH: 480, // 容器高度
          isAutoPlay: true, // 是否自动播放
          playInterval: 2000, // 自动播放时间
          curDisplay: 3, // 当前显示页
          fullPage: false // 是否全屏展示
        });
      },0)

    },
    components:{
      contenter:contenter
    },
    data:function () {
      return {
        number:1,
        price:20
      }
    },
  }
</script>

<style scoped>

</style>
