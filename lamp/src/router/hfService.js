/**
 * Created by Administrator on 2017/12/11.
 */

//--------------------dj
import djProducts from '@/components/common/djProducts/djProducts.vue'
import bigImg from '@/components/common/bigImg/bigImg.vue'
import placeOrder from '@/components/common/placeOrder/placeOrder.vue'

export default
[
  {
    path: '/djProducts',
    name: 'djProducts',
    component: djProducts
  },
  {
    path: '/bigImg',
    name: 'bigImg',
    component: bigImg
  },
  {
    path: '/placeOrder',
    name: 'placeOrder',
    component: placeOrder
  }
]
