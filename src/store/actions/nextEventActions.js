export const createNextEvent = (nextEvent) => {
  return (dispatch, getState) => {

    dispatch({ type: 'CREATE_NEXTEVENT', nextEvent});

  }
}
