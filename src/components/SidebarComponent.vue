// src/components/Sidebar.vue
<template>
  <aside class="sidebar-home">
    <IconsComponent />
    <NotificationComponent :notifications="notifications" />
  </aside>
</template>

<script>
import IconsComponent from '@/components/IconsComponent.vue';
import NotificationComponent from '@/components/NotificationComponent.vue';

export default {
  name: 'SidebarComponent',
  components: {
    IconsComponent,
    NotificationComponent
  },
  data() {
    return {
      notifications: []
    };
  },
  created() {
    this.connectWebSocket();
  },
  methods: {
    connectWebSocket() {
      const socket = new WebSocket('ws://localhost:8081/notifications');
      socket.onmessage = (event) => {
        this.notifications.push({ message: event.data });
      };
    }
  }
}
</script>
