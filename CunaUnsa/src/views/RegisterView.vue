<!-- src/views/RegisterView.vue -->
<script setup>
import { ref } from 'vue'
import api from '../axios'
import { useRouter } from 'vue-router'

const username = ref('')
const email = ref('')
const password = ref('')
const password_confirm = ref('')
const error = ref('')
const success = ref(false)

const router = useRouter()

const register = async () => {
  error.value = ''
  success.value = false
  try {
    await api.post('/auth/register/', {
      username: username.value,
      email: email.value,
      password: password.value,
      password_confirm: password_confirm.value,
    })
    success.value = true
    username.value = ''
    email.value = ''
    password.value = ''
    password_confirm.value = ''
  } catch (err) {
    error.value = 'Error al registrar. Verifica los datos.'
  }
}
</script>

<template>
  <div class="register-container">
    <h2>🆕 Registro de Usuario</h2>

    <form @submit.prevent="register">
      <input v-model="username" type="text" placeholder="Nombre de usuario" required />
      <input v-model="email" type="email" placeholder="Correo electrónico" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <input v-model="password_confirm" type="password" placeholder="Confirmar contraseña" required />
      <button type="submit">Registrar</button>
    </form>

    <p v-if="error" class="error">{{ error }}</p>
    <div v-if="success" class="success">
      <p>✅ Registro exitoso.</p>
      <router-link to="/login" class="go-login">👉 Iniciar sesión</router-link>
    </div>
  </div>
</template>

<style scoped>
.register-container {
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

.success {
  margin-top: 1.5rem;
  color: #2ecc71;
}

.go-login {
  display: inline-block;
  margin-top: 0.5rem;
  text-decoration: none;
  font-weight: bold;
  color: #3498db;
}

.go-login:hover {
  text-decoration: underline;
}
</style>
