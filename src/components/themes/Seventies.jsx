import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import seventieslogo ''

const SlideOver = styled.div`
  height: 100%;
  width: 100%;
  background:
`;


function Seventies(){
  return(
    <div>
      <Header/>
      <div>

      </div>

    </div>

  )
};

Seventies.propTypes = {
  startAnimation: PropTypes.bool,
  seventiesOn: PropTypes.bool,
}

export default Seventies;
