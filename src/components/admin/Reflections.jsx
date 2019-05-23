import React from 'react';
import ReflectionDetails from '../ReflectionDetails';


const Reflections = ({reflections}) => {
  return(
    <div className="reflection-list section">
      { reflections && reflections.map(reflection => {
        return(
        <div>
          <ReflectionDetails reflection={reflection}  />
        </div>

        )
      })}
    </div>
  )
};

export default Reflections;
