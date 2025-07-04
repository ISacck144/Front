<!-- src/views/YearCoursesView.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import api from '../axios'

const yearCourses = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await api.get('/yearcourses/')
    yearCourses.value = response.data
  } catch (error) {
    console.error('Error al cargar cursos por año:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="year-courses-container">
    <h2>📅 Cursos por Año</h2>

    <div v-if="loading" class="loading">Cargando información...</div>
    <div v-else-if="yearCourses.length === 0" class="no-data">No se encontraron cursos por año.</div>
    
    <div v-else class="year-course-list">
      <div v-for="yc in yearCourses" :key="yc.id" class="year-course-card">
        <h3>{{ yc.year }}° Año</h3>
        <ul>
          <li v-for="course in yc.courses" :key="course.id">
            📘 {{ course.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.year-courses-container {
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

.loading, .no-data {
  text-align: center;
  color: #888;
  font-size: 1.1rem;
}

.year-course-list {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.year-course-card {
  background-color: #fdfdfd;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  transition: transform 0.2s ease;
}

.year-course-card:hover {
  transform: translateY(-5px);
  background-color: #f5f5f5;
}

.year-course-card h3 {
  color: #42b983;
  margin-bottom: 0.5rem;
}

.year-course-card ul {
  list-style: none;
  padding-left: 0;
}

.year-course-card li {
  margin: 0.3rem 0;
  font-size: 0.95rem;
}
</style>
