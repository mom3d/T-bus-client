const busesReducerDefaultState = [];

export default (state = busesReducerDefaultState, action) => {
  switch (action.type) {
    case 'FETCH_BUSES':
    return action.payload;
  default:
      return state;
  }}
