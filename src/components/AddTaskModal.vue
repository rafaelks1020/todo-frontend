<template>
    <div class="modal">
      <div class="modal-content">
        <h2>Add Task</h2>
        <form @submit.prevent="submitTask">
          <!-- Campo para o título -->
          <div class="mb-3">
            <label for="title" class="form-label">Title:</label>
            <input
              type="text"
              id="title"
              v-model="title"
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
            <button type="submit" class="btn btn-primary me-2">Add Task</button>
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
    data() {
      return {
        title: "",
        description: "",
      };
    },
    methods: {
      formatText(command) {
        document.execCommand(command, false, null); // Comando para aplicar formatação
      },
      submitTask() {
        // Obtém o conteúdo formatado do editor
        this.description = this.$refs.editor.innerHTML.trim();
  
        // Verifica se a descrição está vazia
        if (!this.description || this.description === "<br>") {
          this.description = ""; // Define como string vazia
        }
  
        // Emite os dados para o componente pai
        this.$emit("add-task", {
          title: this.title,
          description: this.description,
        });
  
        // Reseta os campos
        this.title = "";
        this.description = "";
        this.$refs.editor.innerHTML = "";
  
        // Fecha o modal
        this.$emit("close");
      },
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
  