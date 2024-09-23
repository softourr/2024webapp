const initalData = {
  value: 10,
  title: "TEST",
};

const reducer = (state = initalData, action) => {
  if (action.type == "up") {
    return { ...state, value: state.value + action.payload };
  } else if (action.type == "down") {
    return { ...state, value: state.value - action.payload };
  }
  return state;
};

export default reducer;
