<!-- src/views/DashboardView.vue -->
<script setup>
import { onMounted, ref } from 'vue'
import api from '../axios'

const userData = ref(null)

onMounted(async () => {
  try {
    const response = await api.get('/auth/profile/', {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
    userData.value = response.data
  } catch (err) {
    console.error('Error al cargar perfil:', err)
  }
})
</script>

<template>
  <div class="dashboard-container" v-if="userData">
    <h2>🎓 Bienvenido, {{ userData.username }}</h2>
    <p>Tu correo: <strong>{{ userData.email }}</strong></p>
    <p>Nombre completo: <strong>{{ userData.first_name }} {{ userData.last_name }}</strong></p>

    <div class="actions">
      <router-link to="/" class="btn">🏠 Inicio</router-link>
      <a href="http://127.0.0.1:8000/api/students/" class="btn">👶 Ver Alumnos</a>
      <a href="http://127.0.0.1:8000/api/courses/" class="btn">📚 Ver Cursos</a>
      <a href="http://127.0.0.1:8000/api/teachers/" class="btn">👩‍🏫 Ver Profesores</a>
    </div>
  </div>
  <div v-else class="loading">Cargando tu información...</div>
</template>

<style scoped>
.dashboard-container {
  max-width: 700px;
  margin: 3rem auto;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
}

h2 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.actions {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.btn {
  padding: 0.75rem 1.5rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.btn:hover {
  background-color: #369f6b;
}

.loading {
  text-align: center;
  margin-top: 4rem;
  font-size: 1.2rem;
  color: #888;
}
</style>
