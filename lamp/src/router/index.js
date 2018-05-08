import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/common/index.vue'
// import HelloWorld from '@/components/HelloWorld'

import index from '@/components/common/index.vue';

import myinfo from './myinfo'
import heightDiy from './heightDiy'
import divshow from './divshow.js'
import notice from './notice.js'
import  funRecommend from './funRecommend'
import  cart from './cart.js'
import AppDownload from './AppDownload.js'

import service from './hfService.js'

import GoodsList from './GoodsList.js'
import login from './login.js'
import buy from './buy.js'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    ...service,
    ...myinfo,
    ...heightDiy,
    ...divshow,
    ...notice,
    ...funRecommend,
    ...cart,
    ...login,
    ...AppDownload,
    ...GoodsList,
    ...buy,
  ]
})
