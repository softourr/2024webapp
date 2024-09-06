<template>
  <div class="mapWrap" id="map" style="width: 100%; height: 400px"></div>
  {{ latitude }} / {{ longitude }}
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

  // 마커가 표시될 위치입니다
  var markerPosition = new kakao.maps.LatLng(latitude.value, longitude.value);

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);

  // 마커가 드래그 가능하도록 설정합니다
  marker.setDraggable(true);
};
</script>

<style lang="scss" scoped>
.mapWrap {
  border-radius: 10px;
}
</style>
