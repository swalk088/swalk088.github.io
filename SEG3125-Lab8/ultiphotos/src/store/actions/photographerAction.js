export const createProject = (photographer) => {
    return (dispatch, getState,{getFirebase,getFirstore}) => {
      // make async call to database
      const firestore = getFirstore();
      firestore.collection('photographers').add({
        ...photographer,
        photographerId:1,
        firstName:"Simon",
        lastName:"Walker",
        personalSite:"None Yet",
      }).then(() => {
        dispatch({ type: 'CREATE_PHOTOGRAPHER', photographer });
      }).catch((err) => {
        dispatch({type: 'CREATE_PHOTOGRAPHER_ERROR',err});
      })

    }
  };