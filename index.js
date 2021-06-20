const redux = require("redux");
const createStore = redux.createStore;
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// ACTION
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

//INITIAL STATE
const initialState = {
  noOfCakes: 10,
  noOfICeCreams: 20,
};

//REDUCER FUNCTION
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    case BUY_ICECREAM:
      return {
        ...state,
        noOfICeCreams: state.noOfICeCreams - 1,
      };

    default:
      return state;
  }
};

//create redux store
const store = createStore(reducer);

console.log("INITIAL STATE::", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
unsubscribe();
