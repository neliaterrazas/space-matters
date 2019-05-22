import React from 'react';


const EventSummary = ({nextEvent}) => {
  return(
    <div className="card z-depth-0 event-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{nextEvent.title}</span>

        <p>Posted by {nextEvent.authorFirstName} {nextEvent.authorLastName}</p>
        <p className="grey-text">May 20, 2019</p>
      </div>
    </div>
  )
};

export default EventSummary;
