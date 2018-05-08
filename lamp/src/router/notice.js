/**
 * Created by 1 on 2017/12/14.
 */
import xuzhi from '@/components/notice/xuzhi'
import buyxz from '@/components/notice/buyxz'
import dzxz from '@/components/notice/dzxz'
import yhxy from '@/components/notice/yhxy'

export default[
  {
    path: '/xuzhi',
    name: 'xuzhi',
    component: xuzhi,
    children:[
      {path: '', name: 'buyxz', component: buyxz},
      {path: 'buyxz', name: 'buyxz', component: buyxz},
      {path: 'dzxz', name: 'dzxz', component: dzxz},
      {path: 'yhxy', name: 'yhxy', component: yhxy}
    ]
  }
]
