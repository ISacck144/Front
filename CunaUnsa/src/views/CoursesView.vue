<!-- src/views/CoursesView.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import api from '../axios'

const courses = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await api.get('/courses/')
    courses.value = response.data
  } catch (error) {
    console.error('Error al cargar cursos:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="courses-container">
    <h2>📚 Lista de Cursos</h2>

    <div v-if="loading" class="loading">Cargando cursos...</div>
    <div v-else-if="courses.length === 0" class="no-courses">No hay cursos registrados.</div>
    <div v-else class="courses-grid">
      <div v-for="course in courses" :key="course.id" class="course-card">
        <h3>{{ course.name }}</h3>
        <p><strong>Descripción:</strong> {{ course.description || 'Sin descripción' }}</p>
        <p><strong>Créditos:</strong> {{ course.credits || 'N/A' }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.courses-container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.loading, .no-courses {
  text-align: center;
  color: #888;
  font-size: 1.2rem;
}

.courses-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}

.course-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 12px;
  background-color: #f9f9f9;
  transition: box-shadow 0.2s ease;
}

.course-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
</style>
