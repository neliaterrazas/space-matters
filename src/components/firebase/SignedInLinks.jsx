import React from 'react';
import {NavLink} from 'react-router-dom';

class SignedInLinks extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <ul className="right">
        <li><NavLink to="/create">New Event</NavLink></li>
        <li><NavLink to="/">Log Out</NavLink></li>
        <li><NavLink to="/" className='btn btn-floating pink lighten-1'>NN</NavLink></li>
      </ul>
      );
    }
}


export default SignedInLinks;
