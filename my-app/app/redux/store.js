import { createStore, compose /* , applyMiddleware*/ } from "redux";
// import someReduxMiddleware from 'some-redux-middleware';
// import someOtherReduxMiddleware from 'some-other-redux-middleware';
import rootReducer from "./reducers/root.reducer";
import test from "./reducers/test.reducer";

// const enhancerList = [];
// const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

// if (typeof devToolsExtension === "function") {
//   enhancerList.push(devToolsExtension());
// }

// const composedEnhancer = compose(
//   /* applyMiddleware(someReduxMiddleware, someOtherReduxMiddleware),*/ ...enhancerList
// );

//const initStore = () => createStore(rootReducer, {}, composedEnhancer);
// const initStore = () => {
//   return createStore(test);
// };

const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const initStore = createStore(test);
console.log(initStore);

export default initStore;
