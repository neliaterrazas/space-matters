import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {Link} from 'react-router-dom';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <nav className="nav-wrapper grey darken-3">
          <div className="container">
            <Link to="/" className="brand-logo">Home</Link>
            <SignedInLinks/>
            <SignedOutLinks/>
          </div>
        </nav>
      );
    }
}


export default Header;