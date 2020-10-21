import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/listofchallenges',
    name: 'ListOfChallenges',
    component: () => import('../views/ListOfChallenges')
  },
  {
    path: '/challengeview',
    name: 'ChallengeView',
    component: () => import('../views/ChallengeView')
  },
  {
    path: '/inviteview',
    name: 'InviteView',
    component: () => import('../views/InviteView')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
