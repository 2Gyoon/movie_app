import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './store/index.js'

createApp(App)
  .use(router)  // 플러그인을 연결할 때 사용하는 메소드
  .use(store)
  .mount('#app')