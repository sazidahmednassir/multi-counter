//initial state
const initialState = {
  count: 0,
};

//reducer function
function counterReducer(state = initialState, action) {
  if (action.type === "increment") {
    return {
      ...state,
      count: count.value + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      count: count.value - 1,
    };
  } else {
    return state;
  }
}
