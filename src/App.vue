<template>
  <div class="wrapper">
    <header class="header"><h1>Test Task</h1></header>
    <popup />
    <btn
      v-for="(city, i) in cities"
      :key="i"
      :text="city.name"
      @click="changeVisibleA(city.name)"
    />
    <footer class="footer">
      <p>Created by &copy; Andrey Ampleev</p>
      <p>tel.: +7 (917) 313-91-39</p>
      <p>meil: 3139139@mail.ru</p>
    </footer>
  </div>
</template>

<script>
import popup from "./components/popup";
import btn from "./components/btn";
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  components: { popup, btn },
  computed: {
    ...mapState({
      cities: (state) => state.data,
    }),
  },
  methods: {
    ...mapActions(["changeVisibleA"]),
  },
};
</script>

<style>
body {
  background: #010a38;
}
.wrapper {
  position: relative;
  max-width: 1140px;
  margin: 0 auto;
  margin-top: 10%;
  text-align: center;
  color: white;
  border: 1px solid white;
}
.header,
.footer {
  margin: 30px;
  border: 1px solid white;
}
.header > h1 {
  text-transform: uppercase;
}
.footer > p {
  font-size: 22px;
}
</style>
