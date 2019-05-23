export const createReflection = (reflection) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('reflections').add({
      ...reflection,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_REFLECTION_SUCCESS', reflection });
    }).catch((err) => {
      dispatch({ type: 'CREATE_REFLECTION_ERROR', err });
    })
  }
};
