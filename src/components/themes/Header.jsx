import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
  return(
    <div>
      <style jsx>{`
          div {
            display: flex;
            justify-content: flex-start;
            text-align: center;
            flex-flow: row wrap;
            margin-top: 2rem;
          }
        a {
          display: flex;
          justify-content: flex-end;
          flex-flow:column wrap;
          width: 7rem;
          text-decoration: none;
          font-family: 'Allerta', sans-serif;
          padding-left: 1rem;
          color: #FFF;
          font-size: 1rem;
          list-style: none;
          }
              `}</style>
            <Link to="/" style={{ textDecoration: 'none'}}>
              <a>Home</a>
            </Link>
    </div>

  )
};


export default Header;
