<script setup>
import { ref, onMounted } from 'vue'
import api from '../axios'

const courses = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await api.get('/courses/')
    courses.value = res.data
  } catch (error) {
    console.error('Error al cargar cursos:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="course-container">
    <h2>📚 Lista de Cursos</h2>

    <div v-if="loading" class="loading">Cargando cursos...</div>
    <div v-else-if="courses.length === 0" class="no-courses">No hay cursos registrados.</div>
    
    <div v-else class="course-list">
      <div class="course-card" v-for="c in courses" :key="c.id">
        <h3>{{ c.name }}</h3>
        <p><strong>Descripción:</strong> {{ c.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.course-container {
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

.loading, .no-courses {
  text-align: center;
  color: #888;
  font-size: 1.1rem;
}

.course-list {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.course-card {
  background-color: #fdfdfd;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}
</style>
