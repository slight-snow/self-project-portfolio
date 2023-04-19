import React from 'react';
import { useDispatch } from 'react-redux';
import { page01 } from '../features/counter/counterSlice';
import './01about.css';

function About() {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className='about_container'
        onClick={() => dispatch(page01())}>
        <div>01</div>
        <div className='about_break_line' />
        <div className='about_title'>ABOUT</div>
      </div>
    </>
  )
}

export default About;

