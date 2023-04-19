import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { page02 } from '../../features/counter/counterSlice';
import './02skill.css';

function Skill() {
  const page = useSelector((state) => state.counter.page);
  const dispatch = useDispatch();

  if (page === 0) {
    return (
      <>
        <div
          className='home_skill_container'
          onClick={() => dispatch(page02())}>
          <div>02</div>
          <div className='home_skill_break_line' />
          <div className='home_skill_title'>SKILL</div>
        </div>
      </>
    )
  }

  if (page === 2) {
    return (
      <>
        <div
          className='skill_container'
          onClick={() => dispatch(page02())}>
          <div>02</div>
          <div className='skill_break_line' />
          <div className='skill_title'>SKILL</div>
        </div>
      </>
    )
  }

  if (page !== 0 && page !== 2) {
    return (
      <>
        <div
          className='inactive_skill_container'>
        </div>
      </>
    )
  }
}

export default Skill;