const initialState = {
  cartData: [],
};

const actionTypes = {
  ADD: "ADD_TO_CART",
  REMOVE: "REMOVE_FROM_CART",
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD: {
      return {
        cartData: [...state.cartData, action.payload],
      };
    }
    case actionTypes.REMOVE: {
      return {
        cartData: state.cartData.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    }
    default:
      return state;
  }
};

export { initialState, actionTypes, cartReducer };
