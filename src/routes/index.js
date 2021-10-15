import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

export default createRouter({
  // Hash(특정 페이지에서 새로 고침을 했을 때 페이지를 찾을 수 없다는 메세지 방지가능)
  // https://google.com/#/search/
  history: createWebHashHistory(),
  // pages
  routes: [
    {
      // https://google.com/
      path: '/',  // 슬래시 하나만 있으면 메인페이지로 가겠다는 의미
      component: Home // 메인 페이지로 이동했을 때 어떤 vue.js의 컴포넌트를 사용할지 명시
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      //https://google.com/about about 페이지에 접근했을 때 사용할 옵션
      path: '/about',
      component: About
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})