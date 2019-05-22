import React from 'react';
import Notifications from './Notifications';
import EventList from './EventList';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  render() {

    // console.log(this.props);
    const { nextEvents } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <EventList nextEvents={nextEvents} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nextEvents: state.nextEvent.nextEvents
  }
}

export default connect(mapStateToProps)(Dashboard)
