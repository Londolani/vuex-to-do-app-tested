import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import store from './store/store.js'
import TaskDescription from './components/TaskDescription.vue'


const routes = [
    {path:'/', component:App },
    {path:'/description/:taskId', component:TaskDescription }
]

const router = createRouter({
    history: createWebHistory(),
    routes:routes,
    linkActiveClass: 'active'
})

export default router;

export { routes }

const app = createApp(App);
app.use(store)
app.use(router)
app.mount('#app')


