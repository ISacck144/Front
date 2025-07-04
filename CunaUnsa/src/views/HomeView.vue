<!-- src/views/HomeView.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import api from '../axios'

const alumnos = ref([])

onMounted(() => {
  api.get('/alumnos/')
    .then(res => alumnos.value = res.data)
    .catch(err => console.error(err))
})
</script>

<template>
  <div class="hero">
    <div class="overlay">
      <h1 class="title">🔵 Bienvenido a <span>CunaUnsa</span></h1>
      <p class="subtitle">Tu aula virtual para gestionar alumnos, cursos y más.</p>

      <div class="actions">
        <router-link to="/register" class="btn primary">🆕 Registrarse</router-link>
        <router-link to="/login" class="btn secondary">🔐 Iniciar Sesión</router-link>
      </div>

      <div class="grid">
        <router-link to="/students" class="card">👶 Alumnos</router-link>
        <router-link to="/courses" class="card">📚 Cursos</router-link>
        <router-link to="/teachers" class="card">👩‍🏫 Profesores</router-link>
        <router-link to="/workloads" class="card">📦 Cargas Lectivas</router-link>
        <router-link to="/inscriptions" class="card">📝 Inscripciones</router-link>
        <router-link to="/announcements" class="card">📢 Anuncios</router-link>
        <router-link to="/grades" class="card">📈 Notas</router-link>
        <router-link to="/yearcourses" class="card">📅 Cursos por Año</router-link>
        <router-link to="/proxys" class="card">👨‍👩‍👧 Apoderados</router-link>
        <router-link to="/users" class="card">🧑‍💻 Usuarios</router-link>
        <router-link to="/profile" class="card">🙍 Perfil</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  background-image: url('/fondo-aula.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2rem 3rem;
  border-radius: 20px;
  text-align: center;
  color: white;
  max-width: 1000px;
  width: 90%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.title {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.title span {
  color: #42b983;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: 0.2s;
  font-size: 1rem;
}

.btn.primary {
  background-color: #42b983;
  color: white;
}

.btn.secondary {
  background-color: #ffffff;
  color: #333;
}

.btn:hover {
  opacity: 0.9;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.card {
  display: block;
  background-color: #ffffff;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 12px;
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
  background-color: #f5f5f5;
  color: #42b983;
}
</style>
