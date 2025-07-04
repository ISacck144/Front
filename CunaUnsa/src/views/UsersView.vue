<!-- src/views/UsersView.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import api from '../axios'

const users = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await api.get('/users/')
    users.value = response.data
  } catch (error) {
    console.error('Error al cargar usuarios:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="user-container">
    <h2>🧑‍💻 Lista de Usuarios del Sistema</h2>

    <div v-if="loading" class="loading">Cargando usuarios...</div>
    <div v-else-if="users.length === 0" class="no-users">No hay usuarios registrados.</div>
    
    <div v-else class="user-list">
      <div class="user-card" v-for="user in users" :key="user.id">
        <h3>{{ user.username }}</h3>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Nombre:</strong> {{ user.first_name }} {{ user.last_name }}</p>
        <p><strong>Activo:</strong> {{ user.is_active ? 'Sí' : 'No' }}</p>
        <p><strong>Superusuario:</strong> {{ user.is_superuser ? 'Sí' : 'No' }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.loading, .no-users {
  text-align: center;
  color: #888;
  font-size: 1.1rem;
}

.user-list {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.user-card {
  background-color: #fdfdfd;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  transition: transform 0.2s ease;
}

.user-card:hover {
  transform: translateY(-5px);
  background-color: #f5f5f5;
}

.user-card h3 {
  color: #42b983;
  margin-bottom: 0.5rem;
}

.user-card p {
  margin: 0.25rem 0;
  font-size: 0.95rem;
}
</style>
