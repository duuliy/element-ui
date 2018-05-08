<template>
  <div>
    <table>
      <tr>
        <td>{{orders}}</td>
        <td>{{orderdate}}</td>
        <td>
          <slot name="headerslot"></slot>
        </td>
        <td>{{ordername}}</td>
        <td>￥{{orderprice}}</td>
        <td>{{ispay | pay}}</td>
        <td>{{issend | send}}</td>
        <td v-if="ispay==1" class="nopay">已支付</td>
        <td v-else class="pay">立即支付</td>
      </tr>
    </table>
  </div>
</template>

<script type="se6">
    export default {
      name: 'ordercom',
      data () {
            return{}
      },
      filters:{
            pay: function(value){
                if(value==0){
                  value='未支付'
                }else{
                  value='已支付'
                }
                return value
            },
            send: function(value){
                if(value==0){
                  value='未发货'
                }else{
                  value='已发货'
                }
                return value
            }
        },
      props: ['orderdate','orders','goodname1','goodnum1','goodname2','goodnum2','goodname3','goodnum3',
      'ordername','orderprice','ispay','issend']

    }

</script>

<style scoped lang="less">
  .pay{
    color: #FF7A54;
  }
  table{
    margin-bottom: 5px;
    height: 100px;
    width: 953px;
  }
  tr>td:first-child{
    width: 95px;
  }
  tr>td:nth-child(2){
    width: 190px;
  }
  tr>td:nth-child(3){
    width: 190px;
    cursor: pointer;
  }
  tr>td:nth-child(4){
    width: 95px;
  }
  tr>td:nth-child(5){
    width: 95px;
  }
  tr>td:nth-child(6){
    width: 95px;
  }
  tr>td:nth-child(7){
    width: 95px;
  }
  tr>td:nth-child(8){
    width: 95px;
  }
</style>
