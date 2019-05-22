import React from 'react';
import PropTypes from 'prop-types';

function NextEventDetails(props){
  const id = props.match.params.id;
  return(
    <div className="container section event-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Event Title - {id}</span>
          <p>Lorem ipsum.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Derrick</div>
          <div>May 21st, 2019</div>
        </div>
      </div>
    </div>
  )
}
export default NextEventDetails;
