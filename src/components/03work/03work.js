import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { page03 } from '../../features/counter/counterSlice';
import './03work.css';

function Work() {
  const page = useSelector((state) => state.counter.page);
  const dispatch = useDispatch();

  if (page === 0) {
    return (
      <>
        <div
          className='home_work_container'
          onClick={() => dispatch(page03())}>
          <div className='home_work_box'>
            <span className='work_line01'></span>
            <span className='work_line02'></span>
            <span className='work_line03'></span>
            <span className='work_line04'></span>
            <div className='home_work_contents'>
              <div>03</div>
              <div className='home_work_break_line' />
              <div className='home_work_title'>WORK</div>
            </div>
          </div>
        </div>
      </>
    )
  }

  if (page === 3) {
    return (
      <>
        <div
          className='work_container'
          onClick={() => dispatch(page03())}>
          <div className='work_box'>
            <div>03</div>
            <div className='work_break_line' />
            <div className='work_title'>WORK</div>
          </div>
        </div>
      </>
    )
  }

  if (page !== 0 && page !== 3) {
    return (
      <>
        <div
          className='inactive_work_container'
          onClick={() => dispatch(page03())}>
          <span className='inactive_work_title'>03 Work</span>
        </div>
      </>
    )
  }
}

export default Work;