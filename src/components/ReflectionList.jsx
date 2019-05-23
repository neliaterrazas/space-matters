import React from 'react';
import ReflectionDetails from './ReflectionDetails';
import { Link } from 'react-router-dom';

const ReflectionList = ({reflections}) => {
  return(
    <div className="reflection-list section">
      { reflections && reflections.map(reflection => {
        return(
          <Link to={'/reflection/' + reflection.id} key={reflection.id}>
            <ReflectionDetails reflection={reflection}  />
          </Link>
        )
      })}
    </div>
  )
};

export default ReflectionList;
