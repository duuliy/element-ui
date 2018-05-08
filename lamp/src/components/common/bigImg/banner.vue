<template>
    <div id="banner">
      <hbanner v-for="item in bannerArr"  :bannerTitle="item.myTitle"
               :bannermyText="item.myText"  >
      </hbanner>
    </div>
</template>

<script>
  import hbanner from './bigImg.vue'
    export default {
        name: 'banner',
      data(){
            return {
              bannerArr:[{id: 1,
                myTitle: '改变你的明天',
                img: 'images/灯具banner11.jpg',
                myText: '一个照明产品系统，为您的最佳明天而设计了100年的研究。',
              }]
            }
      },
      components:{
        hbanner:hbanner
      }/*,
      created(){
        this.$axios.get('/api/bigImg.do')
          .then((resp)=>{
            console.log(resp.data);
            this.bannerArr=resp.data;
          });
      }*/
    }
</script>

<style scoped>

</style>
