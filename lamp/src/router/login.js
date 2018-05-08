/**
 * Created by 1 on 2017/12/14.
 */
import login from '@/components/login/login'
import phonelogin from '@/components/login/login_phone'
import userlogin from '@/components/login/login_user'

export default[
  {
    path: '/login',
    name: 'login',
    component: login,
    children:[
      {path: '', name: 'userlogin', component: userlogin},
      {path: 'userlogin', name: 'userlogin', component: userlogin},
      {path: 'phonelogin', name: 'phonelogin', component: phonelogin}
    ]
  }
]
