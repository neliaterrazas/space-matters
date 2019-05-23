import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { auth } = props;

  const links = auth.uid ? <SignedInLinks/> : <SignedOutLinks />
    return(
      <nav className="clear">
        <style jsx>{`
            .clear{
              background-color: #9A3B2F;
            }
            .brand-logo {
              align: left;
              color: blue;
            }
            `}</style>
          <div className="container clear">
            <Link to="/" className="brand-logo left">Home</Link>
            { links }
          </div>
        </nav>
      );
    }

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar);
