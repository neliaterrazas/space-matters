import React from 'react';
import Dashboard from '../../components/admin/Dashboard';
import PropTypes from 'prop-types';


function Seventies(){
  return(
    <div>
      <style jsx>{`
          @font-face {
            font-family: Prisma;
            src: url(/Users/Guest/desktop/space-matters/src/assets/Prisma.ttf);
          }
          body {
            background-color: #7BB4BC;
          }
          h1 {
            font-family: Prisma;
            font-size: 8em;
          }
          h3 {
            font-family: Prisma;
            font-size: 3em;
            color: #5D58D2;
          }
          .space{
            color: #5D58D2;
            background-color: #E0AD14;
            height: 40vh;
            border: 1em solid #67330B;
            margin-top: 25vh;
          }
          .center{
            width: 100%;

          }
          .how{
            margin-top:30vh;
            border: 0.5em solid #9A3B2F;
            padding: 4em;
            background-color: #E0AD14;
          }
          `}</style>

        <div className="container">
          <div className="space valign-wrapper ">
            <h1 className="center">SPACE MATTERS</h1>
          </div>
          <div className="center how">
            <h3>How Space Matters</h3>
            <h5>Reflections from a Student Inquiry Project on Race, Space, & the PCC Landscape</h5>
            <p>Space Matters was a student inquiry project and part of an innovative critical race theory (CRT) initiative in Facilities Planning at Portland Community College (PCC). During winter term 2018, as part of a “discovery” phase in planning, PCC students of color spent five weeks exploring dimensions of race, space, and educational settings, to reveal new insights and examine critical questions about inclusion. As participants in this project, we invite PCC staff in Facilities Planning, educational leaders, architectural design consultants, and other stakeholders to consider the following reflections when conceiving and designing educational space. These insights emerged from our collective lived experiences as students of color, spatial field notes we collected, and a student survey we conducted across PCC campuses. As an inquiry project designed to explore, our insights and questions invite more questions and the need for further research. Moving forward, we recommend opportunities for student-led research. We hope to be able to continue this important work in order to further benefit the experiences of students of color at PCC specifically and in academic spaces in general. </p>
          </div>
      </div>
      <Dashboard/>

    </div>

  )
};

Seventies.propTypes = {
  startAnimation: PropTypes.bool,
  seventiesOn: PropTypes.bool,
}

export default Seventies;
