<template>
  <div>
    <div>
      <div
        style="height: 50%; width: 100%; display: flex; justify-content: center"
      >
        <textarea
          style="width: 100%; height: 50%; text-align: left"
          rows="14"
          placeholder="Input LaTeX here"
          class="form-control"
          v-model="inputString"
          @input="changeTextInput()"
        ></textarea>
      </div>

      <div style="height: 50%" class="outputSection">
        <hr />
        <div style="display: flex; justify-content: space-between">
          <p>Output Text:</p>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-toggle="modal"
            data-bs-target="#modal-1"
          >
            Preview LaTeX
          </button>
          <button
            type="button"
            title="Copy output to clipboard"
            class="btn btn-primary copyButton"
            @click="copyButtonClick()"
          >
            Copy Output to Clipboard 📋
          </button>
        </div>
        <code id="output" style="white-space: break-spaces">{{
          outputString
        }}</code>
      </div>
    </div>
    <div
      id="modal-1"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="modal-1-title"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <header class="modal-header">
            <h5 id="modal-1-title" class="modal-title">Preview</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </header>
          <div class="modal-body">
            <div ref="preview" style="white-space: break-spaces"></div>
          </div>
          <footer class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              OK
            </button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/js/dist/modal";
import renderMathInElement from "katex/contrib/auto-render";

// let inputString = "";
// let outputString = "";

export default {
  name: "Body",
  data() {
    return {
      inputString: "",
      outputString: "",
    };
  },
  watch: {
    outputString() {
      this.renderPreview();
    },
  },
  methods: {
    renderPreview() {
      // The output goes in as plain text; only KaTeX turns the math delimiters into markup.
      const preview = this.$refs.preview;
      preview.textContent = this.outputString;
      renderMathInElement(preview);
    },
    copyButtonClick() {
      navigator.clipboard.writeText(this.outputString);
    },
    changeTextInput() {
      // console.log(this.inputString);
      const nonsense = "#*%@^";
      let newOutputString = "";
      const newInput = this.inputString.replaceAll("\\$", nonsense);

      let start = true;
      for (let i = 0; newInput && i < newInput.length; i++) {
        if (newInput[i] === "$") {
          newOutputString += start ? "\\(" : "\\)";
          start = !start;
        } else {
          newOutputString += newInput[i];
        }
      }
      // convert nonsense back to regular dollar sign
      this.outputString = newOutputString.replaceAll(nonsense, "$");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
