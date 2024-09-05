<!-- vbase-3-setup -->
<template>
  <div class="container">
    <h1>test</h1>
    <p>{{ count }} / {{ text }}</p>
    <button @click="addNum">CLICK</button>
    <div class="box" v-if="showBox">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo iste
      ullam, beatae mollitia cupiditate totam hic sed a doloremque possimus.
    </div>
    <button @click="toggleBox">BOX</button>
    <ViewComp :text="text" @update="textChange" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ViewComp from "./components/ViewComp.vue";

const count = ref(0);
const text = ref("title");
const showBox = ref(false);

const addNum = () => {
  console.log("aa");
  count.value++;
};

const toggleBox = () => {
  showBox.value = !showBox.value;
};

const textChange = () => {
  console.log("text changed.");
  text.value = "vueComp";
};
</script>

<style lang="scss" scoped></style>
