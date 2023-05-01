import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CampRegistrationView from '../views/CampRegistrationView.vue'
import ChatBotView from '../views/ChatBotView.vue'
import KioskView from '../views/KioskView.vue'
import TournamentsView from '../views/TournamentsView.vue'
import VotingView from '../views/VotingView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/campRegistration',
    name: 'camp-registration',
    component: CampRegistrationView
  },
  {
    path: '/chatBot',
    name: 'chat-bot',
    component: ChatBotView
  },
  {
    path: '/kiosk',
    name: 'kiosk',
    component: KioskView
  },
  {
    path: '/tournaments',
    name: 'tournaments',
    component: TournamentsView
  },
  {
    path: '/voting',
    name: 'voting',
    component: VotingView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
