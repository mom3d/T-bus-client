const selectionState='nothing';
export default(state =selectionState,action)=>{
  switch (action.type) {
    case 'CHANGE_SELECTOR':
    return action.payload;






    default:
    return state;

  }
}
