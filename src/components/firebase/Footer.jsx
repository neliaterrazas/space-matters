import React from 'react';

import {Link} from 'react-router-dom';


const Footer = (props) => {

    return(
      <nav className="clears">
        <style jsx>{`
            .clears{
              background-color: transparent;
              margin-top: 10em;
            }
            .brand-logo {
              align: center;
              color: blue;
            }
            `}</style>
          <div className="container clear">
            <Link to="/" className="brand-logo center"> Back Home</Link>
          </div>
        </nav>
      );
    }



export default Footer;
