import React from 'react';
import './01about.css';

function About(props) {
  return (
    <>
      <div
        className='about_container'
        onClick={() => props.setActive(1)}>
        <div>01</div>
        <div className='about_break_line' />
        <div className='about_title'>ABOUT</div>
      </div>
    </>
  )
}

export default About;

