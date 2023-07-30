<template>
  <div>
    <Navbar />
    <Home />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
}

@font-face {
  font-family: "Inter";
  src: url("../fonts/Inter.ttf");
}
</style>
