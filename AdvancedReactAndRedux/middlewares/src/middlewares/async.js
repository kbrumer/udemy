export default function({ dispatch }){
  return next => action => {
    console.log(action);

    // if action does not have a payload, or payload doe snot have a then (promise)
    // we don't care about it, send it on.
    if (!action.payload || !action.payload.then){
      return next(action);
    }

    action.payload.then(response => {
      // keep everything on the old action except the payload. replace that
      // with what was returned  from the Promise
      return dispatch({ ...action, payload: response });
    });
  };
}
