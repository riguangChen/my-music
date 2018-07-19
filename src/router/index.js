import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/secommend',
      component: Recommend
    }, {
      path: '/singer',
      compontent: Singer
    }, {
      path: '/rank',
      component: Rank
    }, {
      parh: '/search',
      component: Search
    }
  ]
})
