import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/HomeView.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HomeView',
            component: HomeView
        }
    ]
})
