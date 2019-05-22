export const createNextEvent = (nextEvent) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('nextEvents').add({
      ...nextEvent,
      authorFirstName: 'x',
      authorLastName: 'aquel dia te vi',
      authorId: 1234,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_NEXTEVENT', nextEvent });
    }).catch((err) => {
      dispatch({ type: 'CREATE_NEXTEVENT', err });
    })
  }
};
