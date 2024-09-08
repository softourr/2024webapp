<template>
  <div class="container py-3">
    <div class="row">
      <div class="order-2 order-md-1 col-md-6">
        <h3>User Map</h3>
        <UserMap />
      </div>
      <div class="order-1 order-md-2 col-md-6">
        <h3 v-if="$store.state.modifyState === null">User Sign</h3>
        <h3 v-if="$store.state.modifyState !== null">User Data Modify</h3>
        <UserSign />
      </div>
    </div>
    <div class="row">
      <h3>User List</h3>
      <UserList />
    </div>
  </div>
</template>

<script setup>
import UserMap from "../components/user/UserMap.vue";
import UserList from "../components/user/UserList.vue";
import UserSign from "../components/user/UserSign.vue";
</script>

<style lang="scss" scoped></style>
