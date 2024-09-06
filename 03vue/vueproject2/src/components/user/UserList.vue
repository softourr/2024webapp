<template>
  <div
    v-for="(item, i) in $store.state.userData"
    :key="i"
    class="d-flex align-items-center gap-2 border rounded px-3 py-2 mb-2"
  >
    <div class="avatar">
      <img :src="item.image" alt="" />
    </div>
    <div class="d-flex flex-column align-items-center mt-1 px-3">
      <h4 class="mb-0">{{ item.userid }}</h4>
      <p>{{ item.username }}</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
