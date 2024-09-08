<template>
  <div class="container">
    <swiper
      :slides-per-view="2"
      :space-between="20"
      :pagination="{ clickable: true }"
      :modules="modules"
      :breakpoints="breakpoints"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(item, i) in $store.state.userData"
        :key="i"
        class="user-wrap d-flex flex-column align-items-center border rounded px-0 py-4 me-2"
      >
        <div class="deleteBtn" @:click="deleteProfile(i)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <div class="card-view px-3" @:click="clickProfile(i)">
          <div class="row d-flex flex-column align-items-center">
            <div class="avatar">
              <img :src="item.image" alt="" width="100px" height="100px" />
            </div>
          </div>
          <div class="d-flex flex-column align-items-center mt-1">
            <h4 class="mb-0">{{ item.userid }}</h4>
            <p>{{ item.username }}</p>
            <p class="lan-lon">
              {{ (item?.latitude ?? 0).toFixed(4) }} /
              {{ (item?.longitude ?? 0).toFixed(4) }}
            </p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { getCurrentInstance } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { useStore } from "vuex";

const store = useStore();

const { proxy } = getCurrentInstance();

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const deleteProfile = (i) => {
  if (store.state.modifyState !== null) {
    alert("수정 중인 내용을 먼저 저장해주세요!");
    return;
  }

  const userId = store.state.userData[i].userid;

  proxy
    .$swal({
      title: "정말로 삭제하시겠습니까?",
      text: `${userId}을(를) 삭제합니다.`,
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "네, 삭제합니다",
      cancelButtonText: "취소",
    })
    .then((result) => {
      if (result.isConfirmed) {
        store.commit("deleteUser", i);
        proxy.$swal("삭제완료!", `${userId}이(가) 삭제되었습니다.`, "success");
      }
    });
};

const clickProfile = (i) => {
  if (store.state.modifyState !== null) {
    alert("수정 중인 내용을 먼저 저장해주세요!");
    return;
  }
  store.commit("setModify", i);
  scrollToTop();
};

const modules = [Pagination];

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  576: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  992: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1200: {
    slidesPerView: 5,
    spaceBetween: 50,
  },
};
</script>

<style lang="scss" scoped>
.mySwiper {
  width: 100%;
  height: 100%;
  padding-top: 10px;
  padding-bottom: 40px;
}

.user-wrap {
  width: 200px;
  height: 260px;
  position: relative;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translate(0, -10px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }

  .deleteBtn {
    position: absolute;
    top: 0;
    right: 0;
    transition: 0.3s;
    padding: 10px;

    &:hover {
      transform: rotate(180deg);
    }
  }

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .lan-lon {
    background-color: #333;
    color: white;
    font-weight: bold;
    font-size: 14px;
    padding: 8px 16px;
    border-radius: 20px;
    justify-self: end;
  }
}

:deep(.swiper-pagination) {
  bottom: 0 !important;
}
</style>
