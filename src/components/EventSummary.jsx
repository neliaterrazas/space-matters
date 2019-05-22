import React from 'react';
import PropTypes from 'prop-types';

function EventSummary(){
  return(
    <div className="card z-depth-0 event-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">Project Title</span>
        <p>Posted by NTF</p>
        <p className="grey-text">May 20, 2019</p>
      </div>
    </div>
  )
};

export default EventSummary;