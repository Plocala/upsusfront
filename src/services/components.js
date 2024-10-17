import Vue from 'vue';
import FooterComponent from '@/components/FooterComponent.vue';
import IconsComponent from '@/components/IconsComponent.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';
import TasksComponent from '@/components/TasksComponent.vue';

Vue.component('footerComponent', FooterComponent);
Vue.component('iconsComponent', IconsComponent);
Vue.component('navbarComponent', NavbarComponent);
Vue.component('tasksComponent', TasksComponent);

export default Vue;