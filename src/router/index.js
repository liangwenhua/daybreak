import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/room-daybreak',
    name: 'RoomDaybreak',
    component: function () {
      return import('../views/RoomDaybreak.vue')
    }
  },
  {
    path: '/room-latebreak',
    name: 'RoomLatebreak',
    component: function () {
      return import('../views/RoomLatebreak.vue')
    }
  },
  {
    path: '/room-daybreak/1301',
    name: '1301',
    component: function () {
      return import('../views/1301.vue')
    }
  },
  {
    path: '/room-latebreak/2201',
    name: '2201',
    component: function () {
      return import('../views/2201.vue')
    }
  },
  {
    path: '/booking-rule',
    name: 'BookingRule',
    component: function () {
      return import('../views/BookingRule.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
