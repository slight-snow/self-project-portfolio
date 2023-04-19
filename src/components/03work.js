import React from 'react';
import { useDispatch } from 'react-redux';
import { page03 } from '../features/counter/counterSlice';
import './03work.css';

function Work() {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className='work_container'
        onClick={() => dispatch(page03())}>
        <div>03</div>
        <div className='work_break_line' />
        <div className='work_title'>WORK</div>
      </div>
    </>
  )
}

export default Work;