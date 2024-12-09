<template>
    <div class="container py-5">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h1>Your Tasks</h1>
        <button class="btn btn-success" @click="openAddModal">Add Task</button>
      </div>
  
      <!-- Lista de tarefas -->
      <TaskList
        :tasks="tasks"
        @update-task="updateTask"
        @delete-task="deleteTask"
        @edit-task="openEditModal"
      />
  
      <!-- Paginação -->
      <nav class="mt-4">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: !pagination.prev_page_url }">
            <button class="page-link" @click="fetchTasks(pagination.prev_page_url)">Previous</button>
          </li>
          <li class="page-item" :class="{ disabled: !pagination.next_page_url }">
            <button class="page-link" @click="fetchTasks(pagination.next_page_url)">Next</button>
          </li>
        </ul>
      </nav>
  
      <!-- Modal para adicionar tarefa -->
      <AddTaskModal
        v-if="showAddModal"
        @close="closeModal"
        @add-task="addTask"
      />
  
      <!-- Modal para editar tarefa -->
      <EditTaskModal
        v-if="showEditModal"
        :task="selectedTask"
        @close="closeModal"
        @update-task="updateTask"
      />
    </div>
  </template>
  
  <script>
  import axios from "../services/api";
  import TaskList from "../components/TaskList.vue";
  import AddTaskModal from "../components/AddTaskModal.vue";
  import EditTaskModal from "../components/EditTaskModal.vue";
  
  export default {
    components: { TaskList, AddTaskModal, EditTaskModal },
    data() {
      return {
        tasks: [],
        pagination: {}, // Dados de paginação
        showAddModal: false,
        showEditModal: false,
        selectedTask: null,
      };
    },
    methods: {
      async fetchTasks(url = "/tasks") {
        try {
          const response = await axios.get(url);
          this.tasks = response.data.data;
          this.pagination = {
            next_page_url: response.data.next_page_url,
            prev_page_url: response.data.prev_page_url,
          };
        } catch (error) {
          console.error("Erro ao buscar tarefas:", error.response?.data || error.message);
        }
      },
      async addTask(task) {
        await axios.post("/tasks", task);
        this.fetchTasks();
      },
      async updateTask(updatedTask) {
        await axios.put(`/tasks/${updatedTask.id}`, updatedTask);
        this.fetchTasks();
        this.closeModal();
      },
      async deleteTask(taskId) {
        await axios.delete(`/tasks/${taskId}`);
        this.fetchTasks();
      },
      openAddModal() {
        this.showAddModal = true;
      },
      openEditModal(task) {
        this.selectedTask = { ...task };
        this.showEditModal = true;
      },
      closeModal() {
        this.showAddModal = false;
        this.showEditModal = false;
        this.selectedTask = null;
      },
    },
    mounted() {
      this.fetchTasks();
    },
  };
  </script>
  