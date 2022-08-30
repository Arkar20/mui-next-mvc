const initialState = {
  auth: {
    payload: {},
    isLogin: false,
  },
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "TICK":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export { auth };
