import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const EventDetails = (props) => {
  // const id = props.match.params.id;
  console.log(props);
  const { nextEvent } = props;
  if (nextEvent) {
    return(
      <div className="container section event-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{ nextEvent.title }</span>
            <p>{ nextEvent.content }</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {nextEvent.authorFirstName} {nextEvent.authorLastName}</div>
            <div>May 21st, 2019</div>
          </div>
        </div>
      </div>
    )
  } else {
    return(
      <div className="container center">
        <p>Loading event...</p>
      </div>
    )
  }

}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const nextEvents = state.firestore.data.nextEvents;
  const nextEvent = nextEvents ? nextEvents[id] : null
  return{
    nextEvent: nextEvent
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'nextEvents' }
  ])
)(EventDetails);
