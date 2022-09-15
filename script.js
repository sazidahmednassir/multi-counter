// select dom elements
const counter = document.getElementById("main-counter");
const incrementbtn = document.getElementById("increment");
const decrementbtn = document.getElementById("decrement");

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

//create store
const store = Redux.createStore(counterReducer);
