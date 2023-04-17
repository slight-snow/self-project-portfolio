import React from 'react';
import './02skill.css';

function Skill(props) {
  return (
    <>
      <div
        className='skill_container'
        onClick={() => props.setActive(2)}>
        <div className='skill_title'>SKILL</div>
      </div>
    </>
  )
}

export default Skill;