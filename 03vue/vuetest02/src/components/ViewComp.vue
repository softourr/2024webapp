<template>
  <div>ViewComp, {{ props.text }}</div>
  <button @click="emits('update')">변경</button>
</template>

<script setup>
const props = defineProps({
  text: String,
});

const emits = defineEmits({});
</script>

<style lang="scss" scoped></style>
