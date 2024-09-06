<template>
  <div class="d-flex flex-column justify-content-center" style="height: 400px">
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="User ID"
        v-model="userData.userid"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="User Password"
        v-model="userData.password"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="User Name"
        v-model="userData.username"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="User Address"
        v-model="userData.addr"
      />
    </div>
    <div class="input-group mb-3">
      <input
        type="file"
        class="form-control"
        ref="fileInput"
        id="fileform"
        @change="handleImage"
        accept="image/*"
      />
      <label class="input-group-text" for="fileform">Upload</label>
    </div>
    <div class="mb-3 d-flex gap-2">
      <input
        type="number"
        class="form-control"
        placeholder="Latitude"
        v-model="store.state.tmpData.latitude"
      /><input
        type="number"
        class="form-control"
        placeholder="Longitude"
        v-model="store.state.tmpData.longitude"
      />
      <div
        class="searchBtn btn btn-secondary"
        @click="$store.commit('toggleModal')"
      >
        찾기
      </div>
    </div>

    <div class="submitBtn btn btn-primary" @click="addUser">회원가입</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const fileInput = ref(null);
const userData = ref({
  userid: null,
  password: null,
  username: null,
  addr: null,
  image: null,
});

const clearForm = () => {
  userData.value.userid = null;
  userData.value.password = null;
  userData.value.username = null;
  userData.value.addr = null;
  userData.value.image = null;
  if (fileInput.value) {
    fileInput.value.value = "";
  }
};

const addUser = () => {
  if (
    userData.value.userid === null ||
    userData.value.password === null ||
    userData.value.username === null ||
    userData.value.addr === null ||
    userData.value.image === null ||
    store.state.tmpData.latitude === null ||
    store.state.tmpData.longitude === null
  ) {
    alert("입력되지 않은 정보가 있어요!");
    return;
  }

  let uData = {
    userid: userData.value.userid,
    password: userData.value.password,
    username: userData.value.username,
    addr: userData.value.addr,
    image: userData.value.image,
    latitude: store.state.tmpData.latitude,
    longitude: store.state.tmpData.longitude,
  };
  store.commit("addUser", uData);

  clearForm();
  store.commit("clearTmpLatLon");
};

const handleImage = (e) => {
  const file = e.target.files[0];

  if (file) {
    userData.value.image = URL.createObjectURL(file);
  }
};
</script>

<style lang="scss" scoped>
.searchBtn {
  width: 150px;
}

.submitBtn {
  width: 100%;
}
</style>
