<template>
  <div class="notificationComponent" v-for="notification in notifications" :key="notification.id">
    <p><strong>{{ notification.user }}</strong> fez uma alteração em <strong>{{ notification.field }}</strong> em {{ notification.date }}</p>
  </div>
</template>

<script>
export default {
  name: 'NotificationComponent',
  props: {
    notifications: Array
  }
}
</script>
