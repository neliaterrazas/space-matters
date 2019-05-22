import React from 'react';
import PropTypes from 'prop-types';
import EventSummary from './EventSummary';


const EventList = ({nextEvents}) => {
  return (
    <div className="event-list section">
      { nextEvents && nextEvents.map(nextEvent => {
        return (
          <EventSummary nextEvent={nextEvent} key={nextEvent.id} />
        )
      })}
    </div>
  )
}

export default EventList;
