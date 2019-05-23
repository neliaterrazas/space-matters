import React from 'react';


const EventSummary = ({nextEvent}) => {
  return(
    <div className="card z-depth-0 event-summary center">
      <style jsx>{`
          .event-summary{
            background-color: #E0AD14;
            width: 100%;
            display: flex;
            justify-content: center;
          }

          `}</style>
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{nextEvent.title}</span>

        <p>Posted by NTF</p>
        <p className="grey-text text-darken-3">May 20, 2019</p>
      </div>
    </div>
  )
};

export default EventSummary;
