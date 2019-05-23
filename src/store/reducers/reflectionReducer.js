const initState = {}

const reflectionReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_REFLECTION_SUCCESS':
      console.log('created reflection');
    return state;
    case 'CREATE_REFLECTION_ERROR':
      console.log('create reflection error');
      return state;
    default:
    return state;
  }

};

export default reflectionReducer;
