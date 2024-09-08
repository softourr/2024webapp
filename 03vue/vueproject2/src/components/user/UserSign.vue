<template>
  <div class="d-flex flex-column justify-content-center" style="height: 400px">
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="User ID"
        v-model="store.state.tmpData.userid"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="User Password"
        v-model="store.state.tmpData.password"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="User Name"
        v-model="store.state.tmpData.username"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="User Address"
        v-model="store.state.tmpData.addr"
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

    <div
      v-if="$store.state.modifyState === null"
      class="submitBtn btn btn-primary"
      @click="addUser"
    >
      회원가입
    </div>

    <div
      v-if="$store.state.modifyState !== null"
      class="modifyButton d-flex gap-2"
    >
      <div class="submitBtn btn btn-danger" @click="modifyUser">수정</div>
      <div class="submitBtn btn btn-secondary" @click="cancelModifyUser">
        취소
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const fileInput = ref(null);

const addUser = () => {
  if (
    store.state.tmpData.userid === null ||
    store.state.tmpData.password === null ||
    store.state.tmpData.username === null ||
    store.state.tmpData.addr === null ||
    store.state.tmpData.image === null ||
    store.state.tmpData.latitude === null ||
    store.state.tmpData.longitude === null
  ) {
    alert("입력되지 않은 정보가 있어요!");
    return;
  }

  if (
    store.state.tmpData.latitude < 33.05 ||
    store.state.tmpData.latitude > 38.36 ||
    store.state.tmpData.longitude < 125.03 ||
    store.state.tmpData.longitude > 131.53
  ) {
    alert("정확한 위도/경도 값을 입력해주세요!");

    store.commit("clearTmpLatLon");
    return;
  }
  store.commit("addUser");

  store.commit("clearForm");
  if (fileInput.value) {
    fileInput.value.value = "";
  }
  store.commit("clearTmpLatLon");
};

const modifyUser = () => {
  if (
    store.state.tmpData.userid === null ||
    store.state.tmpData.password === null ||
    store.state.tmpData.username === null ||
    store.state.tmpData.addr === null ||
    store.state.tmpData.image === null ||
    store.state.tmpData.latitude === null ||
    store.state.tmpData.longitude === null
  ) {
    alert("입력되지 않은 정보가 있어요!");
    return;
  }

  if (
    store.state.tmpData.latitude < 33.05 ||
    store.state.tmpData.latitude > 38.36 ||
    store.state.tmpData.longitude < 125.03 ||
    store.state.tmpData.longitude > 131.53
  ) {
    alert("정확한 위도/경도 값을 입력해주세요!");

    store.commit("clearTmpLatLon");
    return;
  }

  store.commit("updateUser");

  store.commit("clearForm");
  if (fileInput.value) {
    fileInput.value.value = "";
  }
  store.commit("clearTmpLatLon");

  store.commit("clearModify");
};

const cancelModifyUser = () => {
  store.commit("clearForm");
  if (fileInput.value) {
    fileInput.value.value = "";
  }
  store.commit("clearTmpLatLon");

  store.commit("clearModify");
};

const handleImage = (e) => {
  const file = e.target.files[0];

  if (file) {
    store.state.tmpData.image = URL.createObjectURL(file);
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
