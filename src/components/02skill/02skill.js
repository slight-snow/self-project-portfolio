import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { page02 } from '../../features/counter/counterSlice';
import './02skill.css';

function Skill() {
  const page = useSelector((state) => state.counter.page);
  const dispatch = useDispatch();

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

export default Skill;