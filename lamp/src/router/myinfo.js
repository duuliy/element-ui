import myinfos from '@/components/myInfo/myinfo.vue'
import personal from '@/components/myInfo/personal.vue'
import myorder from '@/components/myInfo/myorder.vue'
import  myadress from '@/components/myInfo/myadress.vue'
import  myhelp from '@/components/myInfo/myhelp.vue'
import  myapplication from '@/components/myInfo/myapplication.vue'
import  aftersale from '@/components/myInfo/aftersale.vue'

export default
[{
  path: '/myinfo',
  name: 'myinfo',
  component: myinfos,
  children: [
   {
      path:'personal',
      name:'personal',
      component:personal
    },{
      path:'myorder',
      name:'myorder',
      component:myorder
    },{
      path:'myadress',
      name:'myadress',
      component:myadress
    },{
      path:'myhelp',
      name:'myhelp',
      component:myhelp
    },{
      path:'myapplication',
      name:'myapplication',
      component:myapplication
    },{
      path:'aftersale',
      name:'aftersale',
      component:aftersale
    }

  ]
}
]

