<template>
    <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div class="card p-4" style="width: 400px;">
        <h2 class="text-center mb-4">Register</h2>
        <form @submit.prevent="register">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              id="name"
              class="form-control"
              v-model="name"
              required
            />
          </div>
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
          <div class="mb-3">
            <label for="password_confirmation" class="form-label">Confirm Password</label>
            <input
              type="password"
              id="password_confirmation"
              class="form-control"
              v-model="passwordConfirmation"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "../services/api";
  
  export default {
    data() {
      return {
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      };
    },
    methods: {
      async register() {
        try {
          await axios.post("/register", {
            name: this.name,
            email: this.email,
            password: this.password,
            password_confirmation: this.passwordConfirmation,
          });
          alert("Registration successful!");
          this.$router.push("/login");
        } catch (error) {
          alert("Registration failed. Please try again.");
        }
      },
    },
  };
  </script>
  