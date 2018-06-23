/**
 * Created by a on 2017/12/19.
 */
const state = {
  //商品数据
  data:[]
}
const getters = {
  roomlist: state => state.data,
}
const actions = {
  getroomData(ctx,obj){
    ctx.commit("searchdata",obj)
  }
}
const mutations = {
  searchdata(state,obj){
    obj.$axios.get('/api/getroomdata.do')
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
