<template>
  <main>
    <h1 style="text-align: center; margin: 40px">Convert LaTeX to KaTeX</h1>
    <Body />
  </main>
</template>

<script>
import Body from "./components/Body.vue";
import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

// latex
import VueKatex from "vue-katex";
import "katex/dist/katex.min.css";
Vue.use(VueKatex, {
  globalOptions: {
    //... Define globally applied KaTeX options here
  },
});

// title
document.title = "LaTeX to Moodle Converter";

export default {
  name: "main-component",
  components: {
    Body,
  },
};
</script>

<style>
body {
  margin: 0;
  background-color: beige;
}
main {
  margin: 0 auto;
  padding: 50px;
  max-width: 960px;
  min-height: 100vh;
  background-color: rgb(255, 255, 255);
}
p {
  margin: 10px;
  margin-left: 0;
}

.copyButton {
  text-align: right;
}
</style>
