/**
 * Created by a on 2017/12/12.
 */
import home from '../components/home.vue'
import a_product from "../components/common/a_product.vue"
export default [
  {
    path:'/home',
    name:'home',
    component:home,
    meta:{
      isShow:true
    }
  },
  {
    path:'/a_product',
    name:'product',
    component:a_product,
    meta:{
      isShow:true
    }
  }
]
