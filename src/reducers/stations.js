// Expenses Reducer

const stationsReducerDefaultState = [];

export default (state = stationsReducerDefaultState, action) => {
  switch (action.type) {
    case 'FETCH_STATIONS':
    
      return [
        ...state,
        ...action.payload
      ];

    default:
      return state;
  }
}
