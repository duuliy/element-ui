
import shop from '../components/shop/shop.vue';
import shopdetails from '../components/shop/shopdetails.vue';
export default [
    {
      path: '/shop',
      name: 'shop',
      component: shop,
      meta:{
        isShow:true
      },
    },{
    path:'/shopdetails',
    name:'/shopdetails',
    component:shopdetails,
      meta:{
      isShow:true
    },
  }

  ]

