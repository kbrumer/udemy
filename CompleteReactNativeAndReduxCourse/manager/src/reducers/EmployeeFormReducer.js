import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

// this state is state.employee - just a slice of state
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { prop: 'name', value: 'jane' }
      // the  [ ] are key interpolation (not an array - key determined at runtime)

      // another, more laborious way of doing the reducer
      // const newState = {};
      // newState[action.state.prop] = action.payload.value;
      // return { ...state, newState };

      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
