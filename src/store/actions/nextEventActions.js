export const createNextEvent = (nextEvent) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    dispatch({ type: 'CREATE_NEXTEVENT', nextEvent });

  }
};
