/**
 * Created by Administrator on 2017/12/13.
 */
//state,mutations,actions,getters

const state = {

  goods:[
    // {
    //   id:1,
    //   title: '时尚智能灯',
    //   UnitPrice: 1699,
    //   color: '深空灰',
    //   opera: '自调亮度 智能调色',
    //   guige: '一',
    //   img: 'buyimg/d1.jpg',
    // },
    // {
    //   id:2,
    //   title: '智能灯',
    //   UnitPrice: 1000,
    //   color: '深空蓝',
    //   opera: '智能调色',
    //   guige: '二',
    //   img: 'buyimg/d2.jpg',
    // }
  ],
  gouwuche: [],
  goodsByid:[],
}

const getters = {

  goodsbyid:state=>state.goodsByid,

  mycart:state=>state.gouwuche,

  totalPrice:(state,getters)=>{
    //ES6 遍历方式 map() forEach()
    let totalprice = 0;
    getters.mycart.forEach(item=>{
      totalprice += item.price * item.num
    })
    return totalprice
  },
  totalNum:(state,getters)=>{
    let totalnum = 0;
    getters.mycart.forEach(item=>{
      totalnum += item.num
    })
    return totalnum
  }
}

const actions = {
  //异步操作
  //添加到购物车 删除指定商品 清空购物车

  chuancan(ctx,canshu){
    ctx.commit("add1",canshu)
  },
  gouwuchejian(ctx,id){
    ctx.commit('jian',id)
  },
  shanchu(ctx,id){
    ctx.commit('shanchu',id)
  },
  getAllgoods(ctx,data){
    ctx.commit('getAllgood',data)
  },
  goodsByid(ctx,id){
    ctx.commit('getgoodsByid',id)
  },
  addCard(ctx,arr){
    ctx.commit('addCard',arr)
  },
  clearCart(ctx){
    ctx.commit('clearCart')
  }
}


const mutations = {

  jian(state,id){
    let record=state.gouwuche.find(selfitem=>selfitem.goodId==id);
    if(record.num>1){
      record.num--
    }
  },

  clearCart(state){
    state.gouwuche=[];
  },

  add1(state,canshu){
    console.log("action提交到mutation---add方法")
    let record=state.gouwuche.find(selfitem=>selfitem.goodId==canshu);
    let record1=state.goods.find(item=>item.goodId==canshu);
    if(record){
      record.num++
    }else{
      state.gouwuche.push({...record1,num:1})
    }
  },
  shanchu(state,id){
    state.gouwuche.map((item,index)=>{
      if(item.goodId === id){
        state.gouwuche.splice(index,1)
      }
    })
  },

  getAllgood(state,data){
    state.goods=data
  },
  getgoodsByid(state,id){
    console.log("商品详情id")
    state.goodsByid=state.goods.find(item=>item.goodId==id)
    // console.log(state.goodsByid);
  },

  addCard(state,arr){
    console.log("进入vuex",arr)
    let id=arr[0];
    let gongneng=arr[1];
    let yanse=arr[2];
    let guige=arr[3];
    let record=state.gouwuche.find(selfitem=>selfitem.goodId==id);
    let record1=state.goods.find(item=>item.goodId==id);
    if(record){
      record.num++
    }else{
      state.gouwuche.push({...record1,num:1,gongneng:gongneng,yanse:yanse,guige:guige});
    }
  }


}

export default {
  state,
  mutations,
  actions,
  getters
}
