import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './store/index.js'
import loadImage from './plugins/loadImage'

createApp(App)
  .use(router)  // $router 플러그인을 연결할 때 사용하는 메소드
  .use(store) // $store
  .use(loadImage)
  .mount('#app')