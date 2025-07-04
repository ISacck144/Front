<!-- src/views/GradesView.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import api from '../axios'

const grades = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await api.get('/grades/')
    grades.value = response.data
  } catch (error) {
    console.error('Error al cargar notas:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="grades-container">
    <h2>📈 Notas Registradas</h2>

    <div v-if="loading" class="loading">Cargando notas...</div>
    <div v-else-if="grades.length === 0" class="no-grades">No hay notas disponibles.</div>
    <div v-else class="grades-table">
      <table>
        <thead>
          <tr>
            <th>Estudiante</th>
            <th>Curso</th>
            <th>Nota</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="g in grades" :key="g.id">
            <td>{{ g.student_name || 'N/A' }}</td>
            <td>{{ g.course_name || 'N/A' }}</td>
            <td>{{ g.score }}</td>
            <td>{{ new Date(g.created_at).toLocaleDateString() }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.grades-container {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  font-family: 'Segoe UI', sans-serif;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
}

h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.loading, .no-grades {
  text-align: center;
  color: #888;
  font-size: 1.1rem;
}

.grades-table table {
  width: 100%;
  border-collapse: collapse;
}

.grades-table th, .grades-table td {
  border: 1px solid #ccc;
  padding: 0.75rem;
  text-align: center;
}

.grades-table th {
  background-color: #f0f0f0;
  color: #2c3e50;
}

.grades-table tr:hover {
  background-color: #f9f9f9;
}
</style>
