<template>
  <div>
    <h1>{{ inputChild["userId"] }}</h1>
    <h2>{{ inputChild["userName"] }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    inputChild: {
      type: Object,
    },
  },
};
</script>

<style></style>
