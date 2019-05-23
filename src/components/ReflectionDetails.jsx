import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ReflectionDetails = (props) => {
  const { reflection } = props;
  if (reflection) {
    return(
      <div className="container section reflection-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{ reflection.title }</span>
            <p>{ reflection.content }</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {reflection.authorFirstName} {reflection.authorLastName}</div>
            <div>May 21st, 2019</div>
          </div>
        </div>
      </div>
    )
  } else {
    return(
      <div className="container center">
        <p>Loading reflection...</p>
      </div>
    )
  }

}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const reflections = state.firestore.data.reflections;
  const reflection = reflections ? reflections[id] : null
  return{
    reflection: reflection
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'reflections' }
  ])
)(ReflectionDetails);
