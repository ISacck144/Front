<script setup>
import { ref } from 'vue'
import axios from '../axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')

const login = async () => {
  try {
    const res = await axios.post('/auth/login/', {
      username: username.value,
      password: password.value
    })
    localStorage.setItem('token', res.data.token)
    router.push('/')  // redirige a la página principal
  } catch (err) {
    error.value = 'Credenciales inválidas'
  }
}
</script>

<template>
  <div class="login-container">
    <h2>Iniciar Sesión</h2>
    <input v-model="username" placeholder="Usuario" />
    <input v-model="password" type="password" placeholder="Contraseña" />
    <button @click="login">Entrar</button>
    <p v-if="error">{{ error }}</p>
  </div>
</template>
