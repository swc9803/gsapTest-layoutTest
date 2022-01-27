import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Test from '@/pages/Test.vue'
import Test2 from '@/pages/Test2.vue'
import Test3 from '@/pages/Test3.vue'
import Test4 from '@/pages/Test4.vue'
import Test5 from '@/pages/Test5.vue'
import Test6 from '@/pages/Test6.vue'
import Test7 from '@/pages/Test7.vue'
import Test8 from '@/pages/Test8.vue'
import Test9 from '@/pages/Test9.vue'
import Test10 from '@/pages/Test10.vue'
import Test11 from '@/pages/Test11.vue'
import Test12 from '@/pages/Test12.vue'
import Test13 from '@/pages/Test13.vue'
import Test14 from '@/pages/Test14.vue'
import Test15 from '@/pages/Test15.vue'
import Test16 from '@/pages/Test16.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/test2',
    name: 'Test2',
    component: Test2
  },
  {
    path: '/test3',
    name: 'Test3',
    component: Test3
  },
  {
    path: '/test4',
    name: 'Test4',
    component: Test4
  },
  {
    path: '/test5',
    name: 'Test5',
    component: Test5
  },
  {
    path: '/test6',
    name: 'Test6',
    component: Test6
  },
  {
    path: '/test7',
    name: 'Test7',
    component: Test7
  },
  {
    path: '/test8',
    name: 'Test8',
    component: Test8
  },
  {
    path: '/test9',
    name: 'Test9',
    component: Test9
  },
  {
    path: '/test10',
    name: 'Test10',
    component: Test10
  },
  {
    path: '/test11',
    name: 'Test11',
    component: Test11
  },
  {
    path: '/test12',
    name: 'Test12',
    component: Test12
  },
  {
    path: '/test13',
    name: 'Test13',
    component: Test13
  },
  {
    path: '/test14',
    name: 'Test14',
    component: Test14
  },
  {
    path: '/test15',
    name: 'Test15',
    component: Test15
  },
  {
    path: '/test16',
    name: 'Test16',
    component: Test16
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
