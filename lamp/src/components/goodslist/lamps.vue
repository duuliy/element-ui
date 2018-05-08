<template>
  <!--<div class="lamps">-->
    <el-checkbox class="lamps" v-model="checked">{{value}}</el-checkbox>
  <!--<input type="checkbox" >{{value}}-->
  <!--</div>-->
</template>

<script>
export default {
    name: 'lamps',
  props: {
        lamps_name: {
            type: String
        },
    lamps_val:{
            type: String
    }
  },
  props: ['value'],
  data () {
    return {
      checked: false
    };
  }
}

</script>

<style scoped>
  .span{
    margin-left:6px;
    font-size:13px;
  }
  .lamps{
    margin-top:8px;
  }
</style>
