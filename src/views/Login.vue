<template>
    <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div class="card p-4" style="width: 400px;">
        <h2 class="text-center mb-4">Login</h2>
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              id="email"
              class="form-control"
              v-model="email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model="password"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
        <div class="text-center mt-3">
          <a href="/register" class="text-decoration-none">Create an account</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "../services/api";
  
  export default {
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
    async login() {
        try {
        const response = await axios.post('/login', {
            email: this.email,
            password: this.password,
        });

        // Salva o token no localStorage
        localStorage.setItem('token', response.data.token);

        // Redireciona para a página de tarefas
        this.$router.push('/tasks');
        } catch (error) {
        alert('Login failed. Check your credentials.');
        }
    },
}

  };
  </script>
  