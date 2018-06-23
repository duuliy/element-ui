<template >
    <div class="box">
      <el-table
        ref="multipleTable"
        :data="cartlist"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          label="全选"
          width="65"
         align="center">
        </el-table-column>
        <el-table-column
          label="商品信息" width="200" align="center">
          <template slot-scope="scope">
            <div>
              <img :src="scope.row.img" alt="">
            </div>
            <div>{{scope.row.name}}</div>
          </template>
        </el-table-column>
        <el-table-column
          prop="price"
          label="单价"
          width="230"
          align="center">
        </el-table-column>
        <el-table-column
          label="数量"
          width="230" prop="goodsnumber"
          align="center">
          <template slot-scope="scope">
            <el-input-number ref="inputnumber" v-model="scope.row.goodsnumber" @change="handleChange" :min="1" :max="100" size="small" label="描述文字"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column
          prop="price"
          label="金额"
          width="230"
          align="center">
          <template slot-scope="scope" >
            <span>{{scope.row.goodsnumber*scope.row.price}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="250"
          align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit({index:scope.$index, rowdata:scope.row})">加入收藏</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete({index:scope.$index, rowdata:scope.row})">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="settlement" prop="totalMoney">
        <template >
          <span @click="bottomDelete()">删除</span>
          <span @click="bottomCollect()">移入收藏</span>
          <span>继续购物</span>
          <button>结算（总计￥{{totalMoney}}）</button>
        </template>
      </div>
      <!--<template>-->
        <!--<el-button :plain="true" @click="open2">成功</el-button>-->
        <!--<el-button :plain="true" @click="open3">警告</el-button>-->
        <!--<el-button :plain="true" @click="open">消息</el-button>-->
        <!--<el-button :plain="true" @click="open4">错误</el-button>-->
      <!--</template>-->
      <template prop="total">
        <div  style="margin-top: 20px">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            @current-change="current_change">
          </el-pagination>
        </div>
      </template>

    </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
        name: 'cart',
      data() {
        return {
          goodsnumber:1,
          totalMoney:0,
          total:0,
          currentPage:1
        }
      },
    computed:{
      ...mapGetters(['cartlist'])
    },
    methods: {
      ...mapActions(['handleDelete','handleEdit','bottomDelete','bottomCollect','current_change']),
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleChange(value) {
        this.$nextTick(()=>{

          this.handleSelectionChange(this.multipleSelection)
        })
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        this.totalMoney=0;
        if(val){
          for(let i =0 ;i< val.length;i++){
            this.totalMoney += (val[i].price)*(parseInt(val[i].goodsnumber));
          }
        }
      },
//      bottomDelete(){
//        var arr=this.multipleSelection;
//        var arr=this.multipleSelection;
//        for(var i=0;i<arr.length;i++){
//          for(var j=0;j<this.tableData3.length;j++){
//            if(arr[i]===this.tableData3[j]){
//              this.tableData3.splice(j,1);
//            }
//          }
//        }
//      },
//      bottomCollect(){
//        var arr=this.multipleSelection;
//        for(var i=0;i<arr.length;i++){
//          for(var j=0;j<this.tableData3.length;j++){
//            if(arr[i]===this.tableData3[j]){
//              this.tableData3.splice(j,1);
//            }
//          }
//        }
//      },
      current_change:function(currentPage){
        this.currentPage = currentPage;
      }
    },

      created () {
//      this.tableData3=...mapGetters(['cartlist'])

//        var data = [
//          {id: 1, name: '产品1', img: '../../static/images/circle1.png', sub: '产品副标题1', price: 30, content: '产品1详情文字内容'},
//          {id: 2, name: '产品2', img: '../../static/images/circle2.png', sub: '产品副标题2', price: 50, content: '产品1详情文字内容'},
//          {id: 3, name: '产品3', img: '../../static/images/circle3.png', sub: '产品副标题3', price: 20, content: '产品1详情文字内容'},
//          {id: 4, name: '产品4', img: '../../static/images/circle4.png', sub: '产品副标题4', price: 60, content: '产品1详情文字内容'},
//          {id: 5, name: '产品5', img: '../../static/images/circle5.png', sub: '产品副标题4', price: 60, content: '产品1详情文字内容'},
//          {id: 6, name: '产品6', img: '../../static/images/circle6.png', sub: '产品副标题4', price: 60, content: '产品1详情文字内容'}
//        ]
//        this.tableData3=data;
//        this.total=data.length;
//        this.$axios.get('/api/product.do')
//          .then(resp => {
//            this.tableData3 = resp.data;
//            this.total=resp.data.length;
////            console.log(this.total)
//          })
      }
    }
</script>
<style scoped>

  .box{
    width: 90%;
    margin: 0 auto;
  }
  .settlement{
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 14px;
    color: #5A5E66;
  }
  .settlement span{
    margin-right: 20px;
    cursor: pointer;
  }
  .settlement button{
    width: 200px;
    height: 50px;
    background-color: #6e6e6e;
    color: white;
    margin-left: 650px;
    border: none;
  }
    .cartbox{
    width: 90%;
    height: 150px;
    border: 1px solid red;
  }
  .cartbox>div{
    float: left;
  }
  .productInfo{
    width: 100px;
    height: 150px;
    border: 1px solid red;
    float: left;
  }
 .productInfo>img{
   width: 100px;
   height: 115px;
   border: 1px solid red;
 }
img{
    width: 60px;
    height: 65px;
    /*border: 1px solid red;*/
  }
 .info{
   width:80%;
   line-height: 150px;
 }
 .info span{
   display: inline-block;
   width: 25%;
 }
  .operation{
    width: 10%;
    height: 100%;
    border: 1px solid red;
  }
</style>
