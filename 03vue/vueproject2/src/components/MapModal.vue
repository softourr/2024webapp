<template>
  <div class="modalWrap">
    <div class="mapBox py-3">
      <h4 class="fw-bold mb-3">지도에서 위치를 선택하세요</h4>
      <div class="latLon">
        위도: {{ latitude.toFixed(4) }} / 경도: {{ longitude.toFixed(4) }}
      </div>
      <div class="mapWrap" id="map" style="width: 80%; height: 400px"></div>
      <div class="row mt-3">
        <div class="col">
          <div
            class="btnBox btn btn-danger"
            @click="$store.commit('toggleModal')"
          >
            취소
          </div>
        </div>
        <div class="col">
          <div
            class="btnBox btn btn-primary"
            @click="
              $store.commit('updateTmpLatLon', [latitude, longitude]);
              $store.commit('toggleModal');
            "
          >
            확인
          </div>
        </div>
      </div>
    </div>
    <div class="modalBg" @click="$store.commit('toggleModal')"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const latitude = ref(0);
const longitude = ref(0);

onMounted(() => {
  if (!("geolocation" in navigator)) {
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      latitude.value = pos.coords.latitude;
      longitude.value = pos.coords.longitude;

      initMap();
    },
    (err) => {
      alert(err.message);
    }
  );
});

const initMap = () => {
  var container = document.getElementById("map");
  var options = {
    center: new kakao.maps.LatLng(latitude.value, longitude.value),
    level: 3,
  };

  var map = new kakao.maps.Map(container, options);

  // 지도를 클릭한 위치에 표출할 마커입니다
  var marker = new kakao.maps.Marker({
    // 지도 중심좌표에 마커를 생성합니다
    position: map.getCenter(),
  });
  // 지도에 마커를 표시합니다
  marker.setMap(map);

  // 지도에 클릭 이벤트를 등록합니다
  // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
  kakao.maps.event.addListener(map, "click", function (mouseEvent) {
    // 클릭한 위도, 경도 정보를 가져옵니다
    var latlng = mouseEvent.latLng;

    // 마커 위치를 클릭한 위치로 옮깁니다
    marker.setPosition(latlng);

    latitude.value = latlng.getLat();
    longitude.value = latlng.getLng();
  });
};
</script>

<style lang="scss" scoped>
.btnBox {
  width: 100%;
}

.modalWrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;

  .mapBox {
    width: 600px;
    height: 480px;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .latLon {
      position: absolute;
      bottom: 100px;
      background-color: #333;
      padding: 8px 20px;
      border-radius: 20px;
      font-weight: bold;
      color: white;
      z-index: 2;
    }

    .mapWrap {
      border-radius: 10px;
    }
  }

  .modalBg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
</style>
