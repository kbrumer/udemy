import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  switch(action.type){
    case FETCH_WEATHER:
      // this is BAD !!!! manipulates state - don't do this!!!
      // return state.push([action.payload.data]);

      // better
      // return state.concat([action.payload.data]);

      // better still
      return [action.payload.data, ...state];

  }
  return state;
}
