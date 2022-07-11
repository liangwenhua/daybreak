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
    component: function () {
      return import('@/views/About.vue')
    }
  },
  {
    path: '/room-daybreak',
    name: 'RoomDaybreak',
    component: function () {
      return import('@/views/RoomDaybreak.vue')
    }
  },
  {
    path: '/room-latebreak',
    name: 'RoomLatebreak',
    component: function () {
      return import('@/views/RoomLatebreak.vue')
    }
  },
  {
    path: '/room-daybreak/1301',
    name: 'DayBreak1301',
    component: function () {
      return import('@/views/DayBreak1301.vue')
    }
  },
  {
    path: '/room-latebreak/2201',
    name: 'LateBreak2201',
    component: function () {
      return import('@/views/LateBreak2201.vue')
    }
  },
  {
    path: '/booking-rule',
    name: 'BookingRule',
    component: function () {
      return import('@/views/BookingRule.vue')
    }
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: function () {
      return import('@/views/Privacy.vue')
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: function () {
      return import('@/views/Contact.vue')
    }
  },
  {
    path: '/news',
    name: 'News',
    component: function () {
      return import('@/views/News.vue')
    }
  },
  {
    path: '/news/:id',
    name: 'NewsId01',
    component: function () {
      return import('@/views/NewsId01.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
