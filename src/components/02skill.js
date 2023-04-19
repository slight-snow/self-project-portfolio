import React from 'react';
import { useDispatch } from 'react-redux';
import { page02 } from '../features/counter/counterSlice';
import './02skill.css';

function Skill() {
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