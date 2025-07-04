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
  <div class="container">
    <h1>🔵 Bienvenido a <span>CunaUnsa</span></h1>
    <p>Consulta y gestiona toda la información desde estos accesos:</p>

    <div class="card-grid">
      <router-link to="/register" class="card">🆕 Registrarse</router-link>
      <a class="card" href="http://127.0.0.1:8000/api/auth/login/">🔐 Iniciar Sesión</a>
      <a class="card" href="http://127.0.0.1:8000/api/students/">👶 Alumnos</a>
      <a class="card" href="http://127.0.0.1:8000/api/courses/">📚 Cursos</a>
      <a class="card" href="http://127.0.0.1:8000/api/teachers/">👩‍🏫 Profesores</a>
      <a class="card" href="http://127.0.0.1:8000/api/workloads/">📦 Cargas Lectivas</a>
      <a class="card" href="http://127.0.0.1:8000/api/inscriptions/">📝 Inscripciones</a>
      <a class="card" href="http://127.0.0.1:8000/api/announcements/">📢 Anuncios</a>
      <a class="card" href="http://127.0.0.1:8000/api/grades/">📈 Notas</a>
      <a class="card" href="http://127.0.0.1:8000/api/yearcourses/">📅 Cursos por Año</a>
      <a class="card" href="http://127.0.0.1:8000/api/proxys/">👨‍👩‍👧 Apoderados</a>
      <a class="card" href="http://127.0.0.1:8000/api/users/">🧑‍💻 Usuarios</a>
      <a class="card" href="http://127.0.0.1:8000/api/auth/profile/">🙍 Perfil</a>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.container h1 span {
  color: #42b983;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
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
