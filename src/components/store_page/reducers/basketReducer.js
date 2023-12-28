// reducers/basketReducer.js
const initialState = {};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_BASKET_ITEM':
      return {
        ...state,
        [action.productId]: !state[action.productId],
      };
    default:
      return state;
  }
};

export default basketReducer;
