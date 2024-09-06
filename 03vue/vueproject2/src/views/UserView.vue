<template>
  <div class="container py-3">
    <div class="row">
      <div class="col-md-6">
        <div class="row">
          <h3>User Map</h3>
          <UserMap />
        </div>
        <div class="row">
          <h3>User List</h3>
          <UserList />
        </div>
      </div>
      <div class="col-md-6">
        <h3>User Sign</h3>
        <UserSign />
      </div>
    </div>
  </div>
</template>

<script setup>
import UserMap from "../components/user/UserMap.vue";
import UserList from "../components/user/UserList.vue";
import UserSign from "../components/user/UserSign.vue";
</script>

<style lang="scss" scoped></style>
