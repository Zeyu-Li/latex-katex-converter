<template>
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
          title="Copy output to clipboard"
          class="btn btn-primary copyButton"
          @click="copyButtonClick()"
        >
          Copy Output to Clipboard 📋
        </button>
      </div>
      <code id="output">{{ outputString }}</code>
    </div>
  </div>
</template>

<script>
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
  methods: {
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
