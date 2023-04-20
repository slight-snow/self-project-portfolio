import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { page01 } from '../../features/counter/counterSlice';
import './01about.css';

function About() {
  const page = useSelector((state) => state.counter.page);
  const dispatch = useDispatch();

  if (page === 0) {
    return (
      <>
        <div
          className='home_about_container'
          onClick={() => dispatch(page01())}>
          <div>01</div>
          <div className='home_about_break_line' />
          <div className='home_about_title'>ABOUT</div>
        </div>
      </>
    )
  }

  if (page === 1) {
    return (
      <>
        <div
          className='about_container'
          onClick={() => dispatch(page01())}>

          <div className='about_box'>
            <div>01</div>
            <div className='about_break_line' />
            <div className='about_title'>ABOUT</div>
          </div>
        </div>
      </>
    )
  }

  if (page !== 0 && page !== 1) {
    return (
      <>
        <div
          className='inactive_about_container'
          onClick={() => dispatch(page01())}>
          <span className='inactive_about_title'>01 About</span>
        </div>
      </>
    )
  }
}

export default About;

