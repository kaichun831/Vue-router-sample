<template>
  <div>
    <p>Home</p>
    <button @click="goIndex">Back To Index</button>
  </div>
</template>

<script>
export default {
  methods: {
    goIndex() {
      this.$router.push("/index");
    },
  },
};
</script>

<style></style>
