<!-- src/views/ProxysView.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import api from '../axios'

const proxys = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await api.get('/proxys/')
    proxys.value = response.data
  } catch (error) {
    console.error('Error al cargar apoderados:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="proxy-container">
    <h2>👨‍👩‍👧 Lista de Apoderados</h2>

    <div v-if="loading" class="loading">Cargando apoderados...</div>
    <div v-else-if="proxys.length === 0" class="no-proxys">No hay apoderados registrados.</div>
    
    <div v-else class="proxy-list">
      <div class="proxy-card" v-for="p in proxys" :key="p.id">
        <h3>{{ p.name }}</h3>
        <p><strong>DNI:</strong> {{ p.dni }}</p>
        <p><strong>Teléfono:</strong> {{ p.phone }}</p>
        <p><strong>Dirección:</strong> {{ p.address }}</p>
        <p><strong>Email:</strong> {{ p.email }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.proxy-container {
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

.loading, .no-proxys {
  text-align: center;
  color: #888;
  font-size: 1.1rem;
}

.proxy-list {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.proxy-card {
  background-color: #fdfdfd;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 6px rgba
