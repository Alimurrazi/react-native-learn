import { TEST_ACTION } from "../actions/index.actions";

const initialState = {
  res: 1,
};

const test = (state = initialState, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case TEST_ACTION: {
      return action.payload;
    }
    default: {
      console.log(state.res);
      return state.res;
    }
  }
};

export default test;
