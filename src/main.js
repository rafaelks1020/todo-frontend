import { createApp } from "vue";
import { QuillEditor } from "vue3-quill";

import App from "./App.vue";
import router from "./router";
import "quill/dist/quill.snow.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const app = createApp(App);

// Registro global do QuillEditor
app.component("QuillEditor", QuillEditor);

createApp(App).use(router).mount("#app");
