<template>
  <div>

    <p>{{serviceid}}</p>
    <p>{{helpid}}</p>
    <p>{{helpname}}</p>
    <p>{{helpdate}}</p>
    <p>{{helpstatus}}</p>
    <p>查看</p>

  </div>
</template>

<script>
  export default {
    name: 'helpcom',
    data () {
      return {}
    },
    props: ['serviceid','helpid','helpname','helpdate','helpstatus','help']
  }

</script>

<style scoped lang="less">
  @import "../../assets/less/myinfo.less";
  *{
    color: #797979;
  }
  div{
    height: 30px;
    margin-left: 1px;
  }
  p{
    float: left;
    text-align: center;
    height: 30px;
    line-height: 30px;
    outline: 1px solid #e7e7e7;
  }
  p:first-child{
    width: 220px;
  }
  p:nth-child(2),p:nth-child(4){
    width: 148px;
  }
  p:nth-child(3){
    width: 284px;
  }
  p:nth-child(5),p:nth-child(6){
    width: 74px;
  }
</style>


