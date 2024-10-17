<template>
    <div class="iconsComponent">
        <div style="font-weight: bolder; margin-top: -10px; color: gray;">Notificações</div>
        <div style="display: flex;  flex-direction: row; justify-content: space-around; padding-top: 10px;">
            <button><label for="categories">📒</label></button>
            <select name="categories" id="categories" form="categoriesForm" @click="fetchCategories">
                <option value="EMANDAMENTO">Em andamento</option>
                <option value="CONCLUIDA">Concluída</option>
                <option value="CANCELADA">Cancelada</option>
                <option value="AGUARDANDO">Aguardando</option>
            </select>
            <ul>
                <li v-for="notif in notifs" :key="notif.id" data-test="notif">
                    {{ notif.title }}
                </li>
            </ul>
            <button @click="getAll">👥</button>
        </div>
    </div>
</template>

<script>
    import apiClient from '@/services/api.js'
    export default {
        data() {
            return {
                posts: 0,
                intervalId: null
            };
        },
        methods: {
            async getAll() {
                if(!this.intervalId) {
                    this.intervalId = setInterval(async () => {
                        this.posts = await apiClient.get("/api/posts").catch(() => []);
                    }, 1000);
                }
            }
        }
    }
</script>