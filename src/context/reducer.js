export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case 'REMOVE_BASKET_ITEM':
      if (action.index > -1) {
        state.basket.splice(action.index, 1);
      }
      return {
        ...state,
        basket: [...state.basket],
      };

    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
