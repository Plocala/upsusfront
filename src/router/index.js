import Vue from 'vue'
import Router from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import AdminView from '@/views/AdminView.vue'
import ContactView from '@/views/ContactView.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ServicesView from '@/views/ServicesView.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/about', name: 'AboutView', component: AboutView}, 
        {path: '/admin', name: 'AdminView', component: AdminView}, 
        {path: '/contact', name: 'ContactView', component: ContactView}, 
        {path: '/', name: 'HomeView', component: HomeView}, 
        {path: '/login', name: 'LoginView', component: LoginView}, 
        {path: '/services', name: 'ServicesView', component: ServicesView}, 
        {path: '/admin', name: 'HomeView', component: AdminView}, 
    ]
})
