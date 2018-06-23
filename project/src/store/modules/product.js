/**
 * Created by a on 2017/12/18.
 */
const state = {
  //商品数据
  data:[]
}
const getters = {
  //对视图返回的数据 - 对视图提供的获取数据的方法
  //让视图拿到一个过滤数据 - computed方式缓存数据
  productlist: state => state.data,
}
const actions = {
  //异步操作
  //添加到购物车 删除指定商品 清空购物车
  getData(ctx,obj){
    ctx.commit("searchdata",obj)
  }
}
const mutations = {
  //添加：购物车数据添加一条数据 - 修改state.购物车数据 push
  //删除指定商品: state.购物车数据.splice()
  //清空购物车: state.购物车数据 = []
  //拿到数据库数据
  searchdata(state,obj){
    obj.$axios.post('/api/getdata.do')
      .then(resp => {
        state.data = resp.data
      })
  }
}


export default {
  state,
  mutations,
  actions,
  getters
}
