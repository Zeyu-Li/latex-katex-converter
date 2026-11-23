import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import prettier from "@vue/eslint-config-prettier";
import globals from "globals";

export default [
  { ignores: ["dist/"] },
  js.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  prettier,
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      // Keep the existing single-word component names (App, Body).
      "vue/multi-word-component-names": "off",
      "vue/no-reserved-component-names": "off",
    },
  },
];
