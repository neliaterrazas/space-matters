const initState = {
  nextEvents: [
    {id: '1', title: 'UCLA', content: 'blah'},
    {id: '2', title: 'PCC', content: 'blah'},
    {id: '3', title: 'PSU', content: 'blah'}
  ]
}

const eventReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_NEXTEVENT':
    console.log('created event', action.nextEvent)
  }
  return state;
}

export default eventReducer;
