import React from 'react';
import './03work.css';

function Work(props) {
  return (
    <>
      <div
        className='work_container'
        onClick={() => props.setActive(3)}>
        <div>03</div>
        <div className='work_break_line' />
        <div className='work_title'>WORK</div>
      </div>
    </>
  )
}

export default Work;