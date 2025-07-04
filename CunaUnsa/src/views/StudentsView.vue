<!-- src/views/StudentsView.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import api from '../axios'

const students = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await api.get('/students/')
    students.value = response.data
  } catch (error) {
    console.error('Error al cargar alumnos:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="students-container">
    <h2>👶 Lista de Alumnos</h2>

    <div v-if="loading" class="loading">Cargando alumnos...</div>
    <div v-else-if="students.length === 0" class="no-students">No hay alumnos registrados.</div>
    <div v-else class="students-grid">
      <div v-for="student in students" :key="student.id" class="student-card">
        <h3>{{ student.name }}</h3>
        <p><strong>DNI:</strong> {{ student.dni }}</p>
        <p><strong>Fecha de Nacimiento:</strong> {{ student.birth_date }}</p>
        <p><strong>Género:</strong> {{ student.gender }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.students-container {
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

.loading, .no-students {
  text-align: center;
  color: #888;
  font-size: 1.2rem;
}

.students-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}

.student-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 12px;
  background-color: #f9f9f9;
  transition: box-shadow 0.2s ease;
}

.student-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
</style>
