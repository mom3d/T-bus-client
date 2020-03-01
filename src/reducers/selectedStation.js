const selectedStationDefaultState={nom:'',details:[]};
export default (state=selectedStationDefaultState,action)=>{

  switch (action.type) {
    case 'SELECT_STATION':

      return action.payload;
          default:
          return state;

  }
}
