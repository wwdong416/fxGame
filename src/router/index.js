import login from '../components/Login'
import userinfo from '../components/User_info'
import service from '../components/Service'
import mymsg from '../components/MyMsg'

export const routes = [
  {path: '', name: 'login', component: login},
  {path: '/Login', name: 'login', component: login},
  {path: '/User_info', name: 'user_info', component: userinfo},
  {path: '/Service', name: 'service', component: service},
  {path: '/Mymsg', name: 'myMsg', component: mymsg}
]
