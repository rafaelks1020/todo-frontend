<template>
    <div class="modal">
      <div class="modal-content">
        <h2>Edit Task</h2>
        <form @submit.prevent="submitUpdate">
          <!-- Campo para o título -->
          <div class="mb-3">
            <label for="title" class="form-label">Title:</label>
            <input
              type="text"
              id="title"
              v-model="localTask.title"
              class="form-control"
              required
            />
          </div>
  
          <!-- Editor simples para a descrição -->
          <div class="mb-3">
            <label for="description" class="form-label">Description:</label>
            <div class="editor-container">
              <div class="editor-toolbar">
                <button type="button" @click="formatText('bold')"><b>B</b></button>
                <button type="button" @click="formatText('italic')"><i>I</i></button>
                <button type="button" @click="formatText('underline')"><u>U</u></button>
                <button type="button" @click="formatText('insertOrderedList')">OL</button>
                <button type="button" @click="formatText('insertUnorderedList')">UL</button>
              </div>
              <div
                id="editor"
                contenteditable="true"
                class="editor"
                ref="editor"
              ></div>
            </div>
          </div>
  
          <!-- Botões do formulário -->
          <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-primary me-2">Save</button>
            <button type="button" class="btn btn-secondary" @click="$emit('close')">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      task: Object, // Recebe a tarefa a ser editada
    },
    data() {
      return {
        localTask: { ...this.task }, // Cria uma cópia local da tarefa
      };
    },
    methods: {
      formatText(command) {
        document.execCommand(command, false, null); // Comando para aplicar formatação
      },
      submitUpdate() {
        // Atualiza a descrição da tarefa local com o conteúdo do editor
        this.localTask.description = this.$refs.editor.innerHTML;
  
        // Emite a tarefa atualizada para o componente pai
        this.$emit("update-task", this.localTask);
  
        // Fecha o modal
        this.$emit("close");
      },
    },
    mounted() {
      // Preenche o editor com a descrição atual ao abrir o modal
      this.$refs.editor.innerHTML = this.task.description;
    },
  };
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1050;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
    width: 500px;
    max-width: 90%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  .editor-container {
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .editor-toolbar {
    display: flex;
    gap: 5px;
    padding: 5px;
    background-color: #f7f7f7;
    border-bottom: 1px solid #ccc;
  }
  
  .editor {
    min-height: 150px;
    padding: 10px;
    outline: none;
    overflow-y: auto;
  }
  </style>
  