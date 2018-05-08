<template>
  <div>
    <div class="lay-div">
      <div class="appcenter lay-title">
        申请售后
    </div>
    </div>

    <div class="lay-div">
      <div class="lay-center">

        <div v-for="item in orderapp" :key="item.id" class="one">
        <apporders :imgsrc="'static/'+item.img" :orderbh="item.bh" :ordertime="item.time"></apporders>
        <div slot="shenqin">
          <router-link  :to="{path:'/myinfo/aftersale',query:{id:item.id}}" tag="button">申请</router-link>
        </div>
      </div>

        <!--<router-link  :to="'/myinfo/aftersale?id='+item.id" v-for="item in orderapp" :key="item.id" class="one">-->
          <!--<apporders :imgsrc="'static/'+item.img" :orderbh="item.bh" :ordertime="item.time"></apporders>-->
        <!--</router-link>-->

        </div>
      </div>
  </div>




</template>

<script>
  import apporders from './apporders.vue'
    export default {
      name: 'myapplication',
      data () {
            return {
                orderapp: [{
                    id:1,
                  img:'buyimg/yedeng1.jpg',
                  bh: 1234567891644,
                  time:'2017-10-20 08:56:19',

                },
                  {
                      id:2,
                    img:'buyimg/d1.jpg',
                    bh:2354889647234,
                    time: '2017-12-12 14:56:08'
                  },
                  {
                      id:3,
                    img:'buyimg/yedeng2.jpg',
                    bh:2354889647234,
                    time: '2017-12-15 20:30:08'
                  },



                ]
            }
      },
      components: {
        apporders: apporders
      }
    }

</script>

<style scoped>
  @import "../../assets/less/myinfo.less";
  *{
    color: #797979;
  }
  .lay-center{
    display: flex;
    justify-content: space-around;
  }
  .appcenter{
    width: 95%;
    margin: 0 auto;
    height: auto;
  }
  button{
    background-color:transparent;
    border: 1px solid #FF7A55;
    color:#FF7A55 ;
    width: 68px;
    height: 28px;
    border-radius: 2px;
    margin: 0 6px;
    cursor: pointer;
    outline:none;
  }
  .one{
    margin-bottom: 20px;
  }
</style>
