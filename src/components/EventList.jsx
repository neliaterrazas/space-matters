import React from 'react';
import EventSummary from './EventSummary';
import { Link } from 'react-router-dom';

const EventList = ({nextEvents}) => {
  return(
    <div className="sectioncenter">
      <style jsx>{`
        .section {
          margin-top: 5em;
        }

          `}</style>

          <h3 className="center">Future Events: </h3>


      { nextEvents && nextEvents.map(nextEvent => {
        return(
          <Link to={'/project/' + nextEvent.id} key={nextEvent.id}>
            <EventSummary nextEvent={nextEvent}  />
          </Link>
        )
      })}

    </div>
  )
};

export default EventList;
