const redux = require("redux");
const createStore = redux.createStore;
const BUY_CAKE = "BUY_CAKE";

// ACTION
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

//INITIAL STATE
const initialState = {
  noOfCakes: 20,
};

//REDUCER FUNCTION
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("INITIAL STATE::", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();
