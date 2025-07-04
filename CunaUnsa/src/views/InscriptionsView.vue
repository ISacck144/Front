<!-- src/views/InscriptionsView.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import api from '../axios'

const inscriptions = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await api.get('/inscriptions/')
    inscriptions.value = response.data
  } catch (error) {
    console.error('Error al cargar inscripciones:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="inscriptions-container">
    <h2>📝 Inscripciones</h2>

    <div v-if="loading" class="loading">Cargando inscripciones...</div>
    <div v-else-if="inscriptions.length === 0" class="no-inscriptions">No hay inscripciones registradas.</div>
    <div v-else class="inscriptions-grid">
      <div v-for="ins in inscriptions" :key="ins.id" class="inscription-card">
        <h3>Estudiante: {{ ins.student_name || 'Desconocido' }}</h3>
        <p><strong>Curso:</strong> {{ ins.course_name || 'N/A' }}</p>
        <p><strong>Año:</strong> {{ ins.year || 'N/A' }}</p>
        <p><strong>Fecha:</strong> {{ ins.created_at ? new Date(ins.created_at).toLocaleDateString() : 'No disponible' }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inscriptions-container {
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

.loading, .no-inscriptions {
  text-align: center;
  color: #888;
  font-size: 1.2rem;
}

.inscriptions-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
}

.inscription-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 12px;
  background-color: #fdfdfd;
  transition: box-shadow 0.2s ease;
}

.inscription-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
</style>
