<!-- src/views/TeachersView.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import api from '../axios'

const teachers = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await api.get('/teachers/')
    teachers.value = response.data
  } catch (error) {
    console.error('Error al cargar profesores:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="teachers-container">
    <h2>👩‍🏫 Lista de Profesores</h2>

    <div v-if="loading" class="loading">Cargando profesores...</div>
    <div v-else-if="teachers.length === 0" class="no-teachers">No hay profesores registrados.</div>
    <div v-else class="teachers-grid">
      <div v-for="teacher in teachers" :key="teacher.id" class="teacher-card">
        <h3>{{ teacher.name }}</h3>
        <p><strong>Email:</strong> {{ teacher.email }}</p>
        <p><strong>Especialidad:</strong> {{ teacher.specialty || 'No especificada' }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.teachers-container {
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

.loading, .no-teachers {
  text-align: center;
  color: #888;
  font-size: 1.2rem;
}

.teachers-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}

.teacher-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 12px;
  background-color: #f9f9f9;
  transition: box-shadow 0.2s ease;
}

.teacher-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
</style>
