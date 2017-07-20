import Vue from 'vue'
import Router from 'vue-router'

import OutMai from '../components/OutMai'
import FindMore from '../components/FindMore'
import Order from '../components/Order'
import Mine from '../components/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/outmai',name: 'outmai',component: OutMai},
    {path: '/findmore',name: 'findmore',component: FindMore},
    {path: '/order',name: 'order',component: Order},
    {path: '/mine',name: 'mine',component: Mine},
    {path:'/',redirect:"/outmai"},
    {path:'*',redirect:"/outmai"}
  ]
})
