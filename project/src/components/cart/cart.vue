<template >
    <div class="box">
      <el-table
        ref="multipleTable"
        :data="cartlist"
        tooltip-effect="dark"
        style="width: 90%"
        @selection-change="handleSelectionChange">
        <el-table-column
          label="全选" width="50" align="center">
        </el-table-column>
        <el-table-column
          type="selection"
          width="65"
         align="center">
        </el-table-column>

        <el-table-column
          label="商品信息" width="100" align="center">
          <template slot-scope="scope">
            <div>
              <img :src="scope.row.g_img" alt="">
            </div>
            <div>{{scope.row.g_name}}</div>
          </template>
        </el-table-column>

        <el-table-column
          prop="sku_sell"
          label="单价"
          width="100"
          align="center">
        </el-table-column>
        <el-table-column
          label="颜色"
          width="110"
          align="center">
          <!--'val'+scope.row.c_id-->
          <template slot-scope="scope">
            <el-select v-model="sval[scope.row.c_id-1].value" :placeholder="scope.row.selectedcolor" size="small"
                       @focus="getAllColor(scope.row.sku_id)" no-data-text="" @change="colorChange" @visible-change="getskuid(scope.row.sku_id,scope.row.g_p_id2,scope.row.c_id,scope.row.g_id)">
              <el-option
                v-for="(item,index) in colorlist"
                :key="item[index]"
                :label="item"
                :selected="index"
                :value="index" align="center"  >
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          label="尺寸"
          width="110"
          align="center">
          <template slot-scope="scope">
            <el-select v-model="sval1[scope.row.c_id-1].value" :placeholder="scope.row.selectedsize" size="small"
                       @visible-change="getAllSize(scope.row.sku_id)" no-data-text="" @change="sizeChange">
              <el-option
                v-for="(index,item) in sizelist"
                :key="index"
                :label="item"
                :selected="item[index+1]"
                :value="item[index+1]" align="center">
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          label="数量"
          width="180" prop="goodsnumber"
          align="center">
          <template slot-scope="scope">
            <el-input-number ref="inputnumber" v-model="scope.row.goodsnumber" @change="handleChange(scope.row)" :min="1"  size="small" label="描述文字"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column
          prop="sku_sell"
          label="金额"
          width="100"
          align="center">
          <template slot-scope="scope" >
            <span>{{scope.row.goodsnumber*scope.row.sku_sell}}</span>
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
              type="info"
              @click="handleDelete({index:scope.$index, rowdata:scope.row})">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="settlement" prop="totalMoney">
        <template >
          <span @click="bottomDelete()">删除</span>
          <span @click="bottomCollect()">移入收藏</span>
          <span>继续购物</span>
          <span>共计：{{totalNum}}件商品</span>
          <button>结算（总计￥{{totalPrice}}）</button>
        </template>
      </div>
      <!--<template prop="total">-->
        <!--<div  style="margin-top: 20px">-->
          <!--<el-pagination-->
            <!--background-->
            <!--layout="prev, pager, next"-->
            <!--:total="total"-->
            <!--@current-change="current_change">-->
          <!--</el-pagination>-->
        <!--</div>-->
      <!--</template>-->
    </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
        name: 'cart',
      data() {
        return {
          total:0,
          currentPage:1,
          selected: '',
          skuid:"",
          sizeid:"",
          goodid:"",
          rowid:"",
          sval:[
            {value:''},
            {value:''},
            {value:''},
            {value:''},
            {value:''},
            {value:''}
          ],
          sval1:[
            {value:''},
            {value:''},
            {value:''},
            {value:''},
            {value:''},
            {value:''}
          ],
        }
      },
    computed:{
      ...mapGetters(['cartlist','totalPrice','totalNum','colorlist','sizelist'])
    },
    methods: {
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
          if(this.multipleSelection!==undefined&&this.multipleSelection.length>0){
//            console.log("我是this.multipleSelection",this.multipleSelection)
            this.$store.dispatch("changeNumber",this.multipleSelection)
          }else {
//            console.log("我是value",value)
            this.$store.dispatch("changeNumber",value)
          }
        })
      },
      handleSelectionChange(val) {
        this.multipleSelection = val,
        this.$store.dispatch("selectproduct",val)
      },
      ...mapActions(['handleDelete','handleEdit','bottomDelete','bottomCollect','current_change']),
      current_change:function(currentPage){
        this.currentPage = currentPage;
      },
      getAllColor(val){
//        console.log("我是id",val)
        this.$store.dispatch("getAllColor",val)
      },
      getAllSize(val){
//        console.log("我是id",val)
        this.$store.dispatch("getAllSize",val)

      },
      getskuid(a,b,c,d){
        this.skuid=a;
        this.sizeid=b;
        this.rowid=c;
        this.goodid=d;
      },
      colorChange(index){
        // console.log("我是index：",index)
//        console.log("我是rowid：",this.rowid)
//        console.log("选中的下拉框的值",this.sval[index].value)
        this.$store.dispatch("modifyColor",{skuid:this.skuid,color:index+1,sizeid:this.sizeid,rowid:this.rowid,goodid:this.goodid})

//        let obj = {};
//        obj = this.options.find((item)=>{
//          return item.value == value;
//        });
//        console.log("我是选中的lable",obj.label);
      },
      sizeChange(selected){
        console.log("选中的下拉框的值",selected)
//        let obj = {};
//        obj = this.options.find((item)=>{
//          return item.value == value;
//        });
//        console.log("我是选中的lable",obj.label);
      }
    },
      created () {
        this.$store.dispatch("getData",this)
        // for(let i=0;i<this.$store.state.cart.data.length;i++){
        //   this.sval.push({value:''})
        //   // console.log(this.sval);
        // }
      }


  }
</script>
<style scoped>
  *{
    font-family: 微软雅黑;
  }
  body{
    overflow: hidden;
  }
  .box{
    overflow: hidden;
    /*border: 1px solid red;*/
    width: 88%;
    margin: 50px 0 50px 150px;
  }
  .settlement{
    width: 90%;
    height: 100px;
    background-color: #f2f2f2;
    line-height: 100px;
    font-size: 14px;
    color: #5A5E66;
    /*margin-left: 90px;*/
  }
  .settlement span{
      margin-right: 20px;
      cursor: pointer;
    }
  .settlement span:nth-of-type(4){
    margin-left: 420px;
  }
  .settlement span:nth-of-type(1){
    margin-left: 20px;
  }
  .settlement button{
    width: 200px;
    height: 50px;
    background-color: #6e6e6e;
    color: white;
    margin-left: 20px;
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
