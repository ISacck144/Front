<!-- src/views/ProfileView.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import api from '../axios'

const profile = ref(null)
const error = ref(null)

onMounted(async () => {
  try {
    const res = await api.get('/auth/profile/')
    profile.value = res.data
  } catch (err) {
    error.value = 'No se pudo cargar el perfil. ¿Estás autenticado?'
    console.error(err)
  }
})
</script>

<template>
  <div class="profile-container">
    <h2>🙍 Perfil de Usuario</h2>

    <div v-if="error" class="error">{{ error }}</div>
    <div v-else-if="!profile" class="loading">Cargando datos del perfil...</div>
    <div v-else class="profile-card">
      <p><strong>Nombre de usuario:</strong> {{ profile.user.username }}</p>
      <p><strong>Email:</strong> {{ profile.user.email }}</p>
      <p><strong>Nombres:</strong> {{ profile.user.first_name }}</p>
      <p><strong>Apellidos:</strong> {{ profile.user.last_name }}</p>
      <p><strong>Fecha de creación:</strong> {{ profile.user.date_joined }}</p>
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.loading,
.error {
  text-align: center;
  font-size: 1.1rem;
  color: #888;
}

.profile-card {
  border: 1px solid #ddd;
  padding: 1.5rem;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.profile-card p {
  font-size: 1rem;
  margin: 0.5rem 0;
}
</style>
