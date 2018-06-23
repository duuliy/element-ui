<template>
  <div class="classify" @click="sify">
    {{classifyy}}
  </div>
</template>

<script>
    export default{
      name:'classify',
      props:['classifyy'],
      methods: {
        sify () {
//        子组件通过$emit触发父组件上的事件
          this.$emit('clicked')
        }
      }
    }
</script>

<style scoped>
  .classify{
    font-family: 微软雅黑;
    font-size:16px;
    float: left;
    margin-left: 15px;
    margin-top: 15px;
    cursor: pointer;
  }
</style>
