var selectedBusDefaultState={nom:'',details:[],incident:''};
export default (state=selectedBusDefaultState,action)=>{

  switch (action.type) {
    case 'SELECT_BUS':
      return action.payload;
    default:
      return state;

  }
}
