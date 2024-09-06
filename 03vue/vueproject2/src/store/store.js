import { createStore } from "vuex";

export default createStore({
  state: {
    modalState: false,
    tmpData: {
      latitude: null,
      longitude: null,
    },
    userData: [
      {
        userid: "user1",
        password: "1234",
        username: "HELLO",
        addr: "Seoul",
        image: "https://picsum.photos/100",
      },
      {
        userid: "user2",
        password: "1234",
        username: "HELLO2",
        addr: "Seoul",
        image: "https://picsum.photos/100",
      },
      {
        userid: "user3",
        password: "1234",
        username: "HELLO3",
        addr: "Seoul",
        image: "https://picsum.photos/100",
      },
    ],
  },
  mutations: {
    addUser(state, payload) {
      state.userData.push(payload);
    },
    toggleModal(state) {
      state.modalState = !state.modalState;
    },
    updateTmpLatLon(state, payload) {
      state.tmpData.latitude = payload[0];
      state.tmpData.longitude = payload[1];
    },
    clearTmpLatLon(state) {
      state.tmpData.latitude = null;
      state.tmpData.longitude = null;
    },
  },
});
