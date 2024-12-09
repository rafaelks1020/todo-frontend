<template>
    <ul class="list-group">
      <li
        v-for="task in tasks"
        :key="task.id"
        class="list-group-item d-flex justify-content-between align-items-start"
      >
        <div>
          <!-- Exibe o título com estilo riscado se a tarefa estiver concluída -->
          <div class="d-flex align-items-center">
            <span
              :class="{ 'text-decoration-line-through': task.completed }"
              class="me-2"
            >
              {{ task.title }}
            </span>
            <!-- Botão para expandir ou recolher a descrição -->
            <button
              class="btn btn-sm btn-outline-secondary"
              @click="toggleDescription(task.id)"
            >
              {{ expandedTask === task.id ? "▲" : "▼" }}
            </button>
          </div>
  
          <!-- Exibe a descrição, se expandida -->
          <div
            v-if="expandedTask === task.id"
            class="text-muted mt-2"
            v-html="task.description"
          ></div>
        </div>
        <div>
          <!-- Botão de editar -->
          <button
            class="btn btn-sm btn-warning me-2"
            @click="$emit('edit-task', task)"
          >
            Edit
          </button>
          <!-- Botão para alternar estado (feito/não feito) -->
          <button
            class="btn btn-sm btn-primary me-2"
            @click="$emit('update-task', { ...task, completed: !task.completed })"
          >
            {{ task.completed ? "Undo" : "Complete" }}
          </button>
          <!-- Botão para deletar tarefa -->
          <button
            class="btn btn-sm btn-danger"
            @click="$emit('delete-task', task.id)"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
      tasks: Array, // Lista de tarefas recebida como prop
    },
    data() {
      return {
        expandedTask: null, // ID da tarefa com descrição expandida
      };
    },
    methods: {
      // Alterna entre expandir/recolher a descrição
      toggleDescription(taskId) {
        this.expandedTask = this.expandedTask === taskId ? null : taskId;
      },
    },
  };
  </script>
  
  <style scoped>
  .text-decoration-line-through {
    text-decoration: line-through;
  }
  .text-muted {
    font-size: 0.9rem;
    color: #6c757d;
  }
  </style>
  