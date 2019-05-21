import React from 'react';
import PropTypes from 'prop-types';
import EventSummary from './EventSummary';


function EventList(){
  return(
    <div className="event-list section">
      <EventSummary/>
      <EventSummary/>
      <EventSummary/>
      <EventSummary/>
    </div>
  )
};
export default EventList;
