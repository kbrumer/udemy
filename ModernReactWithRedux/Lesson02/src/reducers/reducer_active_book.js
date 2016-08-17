// state agr is not applicatin state, only state this redeucer is
// responsible for
export default function(state = null, action){
  switch(action.type){
    case 'BOOK_SELECTED':
      console.log('action=', action);
      return action.payload;
  }

  return state;

}
