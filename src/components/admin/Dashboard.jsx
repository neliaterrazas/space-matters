import React from 'react';

import EventList from '../EventList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends React.Component{
  render(){
    const { nextEvents, auth } = this.props;

    return(
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <EventList nextEvents={nextEvents}/>
          </div>
          <div className="col s12 m5 offset-m1">
            
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    nextEvents: state.firestore.ordered.nextEvents,
    auth: state.firebase.auth
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'nextEvents'}
  ])
)(Dashboard);
