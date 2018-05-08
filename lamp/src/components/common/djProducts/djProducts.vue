<template>
    <div id="app">
      <!-- --------------------产品列表展示 -->
      <showproduct v-for="item in  productArr"  :productTitle="item.name" :productSubtitle="item.sub"
                :productPrice="item.price" :imgsrc="$host+item.img" >
      </showproduct>
    </div>
</template>

<script>
  import showproduct from './show.vue';
    export default {
        name: 'app',
      data(){
        return {
          productArr: []
        }
      },
      components:{
        showproduct:showproduct
      },
      created(){
        this.$axios.get('/api/showproducts.do')
          .then((resp)=>{
            console.log(resp.data);
            this.productArr=resp.data;
          });
      }
    }
</script>

<style scoped>

</style>
