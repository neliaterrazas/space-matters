import React from 'react';
import PropTypes from 'prop-types';




function Sterile(){
  return(
    <div>
      <style jsx>{`
          @font-face {
            font-family: Prisma;
            src: url(/Users/Guest/desktop/space-matters/src/assets/Prisma.ttf);
          }
          h1 {
            font-family: Prisma;
            font-size: 10em;
          }
          .space{
            color: green;
            background-color: #E0AD14;
            height: 40vh;
            border: 1em solid #67330B;

          }
          `}</style>

        <div className="container">
          <div className="space valign-wrapper ">
            <h1 className="center">SPACE MATTERS</h1>
          </div>
      </div>

    </div>

  )
};

Sterile.propTypes = {
  startAnimation: PropTypes.bool,
  seventiesOn: PropTypes.bool,
}

export default Sterile;
