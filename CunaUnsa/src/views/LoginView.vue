<!-- src/views/LoginView.vue -->
<script setup>
import { ref } from 'vue'
import api from '../axios'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const login = async () => {
  error.value = ''
  try {
    const response = await api.post('/auth/login/', {
      username: username.value,
      password: password.value,
    })
    const token = response.data.token
    localStorage.setItem('token', token)
    router.push('/dashboard')  // o donde quieras redirigir después de login
  } catch (err) {
    error.value = 'Credenciales incorrectas. Intenta de nuevo.'
  }
}
</script>

<template>
  <div class="login-container">
    <h2>🔐 Iniciar Sesión</h2>

    <form @submit.prevent="login">
      <input v-model="username" type="text" placeholder="Usuario" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Ingresar</button>
    </form>

    <p v-if="error" class="error">{{ error }}</p>

    <router-link to="/register" class="go-register">¿No tienes cuenta? Regístrate aquí</router-link>
  </div>
</template>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 4rem auto;
  background-color: #fff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
}

h2 {
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

button {
  padding: 0.75rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #369f6b;
}

.error {
  color: red;
  margin-top: 1rem;
}

.go-register {
  display: inline-block;
  margin-top: 1rem;
  text-decoration: none;
  font-weight: bold;
  color: #3498db;
}

.go-register:hover {
  text-decoration: underline;
}
</style>
