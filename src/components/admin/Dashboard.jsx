import React from 'react';
import Notifications from '../Notifications';
import EventList from '../EventList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


class Dashboard extends React.Component{
  render(){
    const { nextEvents, auth } = this.props;

    return(
      <div className="container dashboard">
        <style jsx>{`
            .dashboard {
              margin-top: 10em;
            }
            `}</style>
        <div className="row ">
          <div className="col s12 m4 ">
            <EventList className="center" nextEvents={nextEvents}/>
          </div>
          <div className="col s12 m7 offset-m1">
            <Notifications/>
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
