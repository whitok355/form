<template>
  <div class="popup-row-flex">
    <button>{{ text }}</button>
  </div>
</template>
<script>
export default {
  name: "btn",
  props: {
    text: {
      type: String,
      default: "cleck me",
    },
  },
};
</script>
<style scoped>
.popup-row-flex {
  justify-content: center;
}
.popup-row-flex > button {
  padding: 10px 30px;
  border-radius: 5px;
  margin-top: 20px;
  text-transform: uppercase;
  background: #a6b3ff;
  border: none;
}
.popup-row-flex > button:hover {
  cursor: pointer;
}
</style>
