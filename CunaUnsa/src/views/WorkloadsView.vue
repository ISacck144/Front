<!-- src/views/WorkloadsView.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import api from '../axios'

const workloads = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await api.get('/workloads/')
    workloads.value = response.data
  } catch (error) {
    console.error('Error al cargar cargas lectivas:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="workloads-container">
    <h2>📦 Cargas Lectivas</h2>

    <div v-if="loading" class="loading">Cargando cargas lectivas...</div>
    <div v-else-if="workloads.length === 0" class="no-workloads">No hay cargas lectivas registradas.</div>
    <div v-else class="workloads-grid">
      <div v-for="wl in workloads" :key="wl.id" class="workload-card">
        <h3>{{ wl.course_name || 'Curso Desconocido' }}</h3>
        <p><strong>Profesor:</strong> {{ wl.teacher_name || 'No asignado' }}</p>
        <p><strong>Año:</strong> {{ wl.year || 'N/A' }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.workloads-container {
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

.loading, .no-workloads {
  text-align: center;
  color: #888;
  font-size: 1.2rem;
}

.workloads-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}

.workload-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 12px;
  background-color: #f9f9f9;
  transition: box-shadow 0.2s ease;
}

.workload-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
</style>
