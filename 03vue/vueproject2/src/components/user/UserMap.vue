<template>
  <div class="mapWrap" id="map" style="width: 100%; height: 400px"></div>
</template>

<script setup>
import { onMounted, ref, watch, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const latitude = ref(0);
const longitude = ref(0);
const map = ref(null);
const markers = ref([]);
const infowindows = ref([]);

const userData = computed(() => store.state.userData);

const initMap = () => {
  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(latitude.value, longitude.value),
    level: 3,
  };
  map.value = new kakao.maps.Map(container, options);
  updateMarkers();
};

const updateMarkers = () => {
  markers.value.forEach((marker) => marker.setMap(null));
  infowindows.value.forEach((infowindow) => infowindow.close());
  markers.value = [];
  infowindows.value = [];

  userData.value.forEach((user) => {
    const markerPosition = new kakao.maps.LatLng(user.latitude, user.longitude);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map.value);
    markers.value.push(marker);

    // 인포윈도우 생성
    const iwContent = `<div style="padding:5px;">${user.username}</div>`;
    const infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
    });
    infowindows.value.push(infowindow);

    kakao.maps.event.addListener(marker, "click", function () {
      infowindows.value.forEach((iw) => iw.close());
      infowindow.open(map.value, marker);
    });
  });

  // 모든 마커가 보이도록 지도 범위 재설정
  const bounds = new kakao.maps.LatLngBounds();
  markers.value.forEach((marker) => bounds.extend(marker.getPosition()));
  map.value.setBounds(bounds);
};

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

watch(
  userData,
  () => {
    if (map.value) {
      updateMarkers();
    }
  },
  { deep: true }
);
</script>

<style lang="scss" scoped>
.mapWrap {
  border-radius: 10px;
}
</style>
