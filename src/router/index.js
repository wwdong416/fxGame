import login from '../components/Login'
import register from '../components/register'
import gameExplain from '../components/gameExplain'
import user from '../components/user'
import PKBegin from '../components/PK_begin'
import rankList from '../components/rankList'

export const routes = [
  {path: '', name: 'index', redirect: '/gameExplain'},
  {path: '/Login', name: 'login', component: login},
  {path: '/Register', name: 'register', component: register},
  {path: '/GameExplain', name: 'gameExplain', component: gameExplain},
  {path: '/User', name: 'user', component: user},
  {path: '/PK_begin', name: 'PK_begin', component: PKBegin},
  {path: '/RankList', name: 'rankList', component: rankList}
]
