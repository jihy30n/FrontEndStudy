const initialState = {
  selectedPost: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_POST':
      return {
        ...state,
        selectedPost: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;