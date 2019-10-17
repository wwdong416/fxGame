import login from '../components/Login'
import register from '../components/register'
import service from '../components/Service'
import user from '../components/user'
import PKBegin from '../components/PK_begin'
import rankList from '../components/rankList'

export const routes = [
  // {path: '', name: 'service', component: service},
  {path: '/Login', name: 'login', component: login},
  {path: '/Register', name: 'register', component: register},
  {path: '/Service', name: 'service', component: service},
  {path: '/User', name: 'user', component: user},
  {path: '/PK_begin', name: 'PK_begin', component: PKBegin},
  {path: '/RankList', name: 'rankList', component: rankList}
]
