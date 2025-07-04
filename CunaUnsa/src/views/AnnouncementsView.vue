<!-- src/views/AnnouncementsView.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import api from '../axios'

const announcements = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await api.get('/announcements/')
    announcements.value = response.data
  } catch (error) {
    console.error('Error al cargar anuncios:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="announcements-container">
    <h2>📢 Anuncios</h2>

    <div v-if="loading" class="loading">Cargando anuncios...</div>
    <div v-else-if="announcements.length === 0" class="no-announcements">No hay anuncios disponibles.</div>
    <div v-else class="announcements-grid">
      <div v-for="a in announcements" :key="a.id" class="announcement-card">
        <h3>{{ a.title }}</h3>
        <p class="desc">{{ a.content }}</p>
        <p class="date">Publicado el {{ new Date(a.created_at).toLocaleDateString() }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.announcements-container {
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

.loading, .no-announcements {
  text-align: center;
  color: #888;
  font-size: 1.2rem;
}

.announcements-grid {
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

.announcement-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 12px;
  background-color: #fefefe;
  transition: box-shadow 0.2s ease;
}

.announcement-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.announcement-card h3 {
  color: #42b983;
  margin-bottom: 0.5rem;
}

.announcement-card .desc {
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  color: #333;
}

.announcement-card .date {
  font-size: 0.8rem;
  color: #999;
}
</style>
