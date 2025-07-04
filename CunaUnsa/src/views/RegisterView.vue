<script setup>
import { ref } from 'vue'
import axios from '../axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
const error = ref('')

const register = async () => {
  error.value = ''
  try {
    const response = await axios.post('/auth/register/', {
      username: username.value,
      email: email.value,
      password: password.value,
      password_confirm: passwordConfirm.value
    })
    console.log('Usuario registrado:', response.data)
    router.push('/')
  } catch (err) {
    if (err.response && err.response.data) {
      const data = err.response.data
      error.value = Object.values(data).flat().join(' | ')
    } else {
      error.value = 'Error de red o del servidor.'
    }
    console.error(err)
  }
}
</script>

<template>
  <div class="form-container">
    <h2>🆕 Registro de Usuario</h2>
    <form @submit.prevent="register">
      <input v-model="username" placeholder="Nombre de usuario" required />
      <input v-model="email" placeholder="Correo electrónico" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <input v-model="passwordConfirm" type="password" placeholder="Confirmar contraseña" required />
      <button type="submit">Registrar</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 50px auto;
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

button {
  width: 100%;
  background: #42b983;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background: #36956c;
}

.error {
  color: red;
  margin-top: 1rem;
}
</style>