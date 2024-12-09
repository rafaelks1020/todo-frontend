# To-Do List Application

Este projeto é composto por dois módulos: um backend desenvolvido em Laravel e um frontend desenvolvido em VueJS. Juntos, eles formam uma aplicação completa de gerenciamento de tarefas.

---


## Frontend (VueJS)

### Descrição

O frontend foi desenvolvido com VueJS e implementa funcionalidades de interface para o gerenciamento de tarefas.

---

### Requisitos

- Node.js >= 16
- Yarn >= 1.22

---

### Configuração do Ambiente

1. **Instale as Dependências**:

   ```
   yarn install
   ```

2. **Inicie o Servidor de Desenvolvimento**:
   ```
   yarn run serve
   ```

---

## Funcionalidades

1. **Página de Login**

   - Login com autenticação JWT.
   - Validação de credenciais.

2. **Página de Registro**

   - Cadastro de novos usuários com senha criptografada.

3. **Página Principal**

   - Listagem de tarefas com paginação.
   - Adicionar, editar, marcar como concluída ou excluir tarefas.

4. **Modais**
   - Modal para adição e edição de tarefas com suporte a texto formatado.

---

## Observações

1. Certifique-se de que o backend esteja rodando em `http://localhost:8000` antes de iniciar o frontend.
2. Utilize o comando `yarn run serve` no frontend para iniciar o servidor local.
