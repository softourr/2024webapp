import { createStore } from "vuex";

export default createStore({
  state: {
    modalState: false,
    modifyState: null,
    tmpData: {
      userid: null,
      password: null,
      username: null,
      addr: null,
      image: null,
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
        latitude: 37.48030760449606,
        longitude: 126.8825985829961,
      },
      {
        userid: "user2",
        password: "1234",
        username: "HELLO2",
        addr: "Seoul",
        image: "https://picsum.photos/100",
        latitude: 37.48040860449606,
        longitude: 126.8836985829961,
      },
      {
        userid: "user3",
        password: "1234",
        username: "HELLO3",
        addr: "Seoul",
        image: "https://picsum.photos/100",
        latitude: 37.48030780449606,
        longitude: 126.8828985829961,
      },
    ],
  },
  mutations: {
    addUser(state) {
      let uData = {
        userid: state.tmpData.userid,
        password: state.tmpData.password,
        username: state.tmpData.username,
        addr: state.tmpData.addr,
        image: state.tmpData.image,
        latitude: state.tmpData.latitude,
        longitude: state.tmpData.longitude,
      };

      state.userData.push(uData);
    },
    updateUser(state) {
      state.userData[state.modifyState] = {
        userid: state.tmpData.userid,
        password: state.tmpData.password,
        username: state.tmpData.username,
        addr: state.tmpData.addr,
        image: state.tmpData.image,
        latitude: state.tmpData.latitude,
        longitude: state.tmpData.longitude,
      };
    },
    deleteUser(state, i) {
      state.userData.splice(i, 1);
    },
    toggleModal(state) {
      state.modalState = !state.modalState;
    },
    setModify(state, i) {
      state.tmpData = {
        userid: state.userData[i].userid,
        password: state.userData[i].password,
        username: state.userData[i].username,
        addr: state.userData[i].addr,
        image: state.userData[i].image,
        latitude: state.userData[i].latitude,
        longitude: state.userData[i].longitude,
      };
      state.modifyState = i;
    },
    clearModify(state) {
      state.modifyState = null;
    },
    updateTmpLatLon(state, payload) {
      state.tmpData.latitude = payload[0];
      state.tmpData.longitude = payload[1];
    },
    clearForm(state) {
      state.tmpData.userid = null;
      state.tmpData.password = null;
      state.tmpData.username = null;
      state.tmpData.addr = null;
      state.tmpData.image = null;
    },
    clearTmpLatLon(state) {
      state.tmpData.latitude = null;
      state.tmpData.longitude = null;
    },
  },
});
