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
          <div className='home_skill_box'>
            <span className='skill_line01'></span>
            <span className='skill_line02'></span>
            <span className='skill_line03'></span>
            <span className='skill_line04'></span>
            <div className='home_skill_contents'>
              <div>02</div>
              <div className='home_skill_break_line' />
              <div className='home_skill_title'>SKILL</div>
            </div>
          </div>
        </div>
      </>
    )
  }

  //--------------------------------------------------------
  if (page === 2) {
    return (
      <>
        <div
          className='skill_container'
          onClick={() => dispatch(page02())}>
          <div className='skill_box'>
            <div className='skill_fe_box'>
              <div className='skill_fe_title'>Front-End</div>
              <div className='skill_fe_list'>
                <div className='skill_fe_item'>
                  <img src='/fe_icons/fe_HTML.png' alt='fe_html' className='skill_fe_html' />
                  <img src='/fe_icons/fe_CSS.png' alt='fe_css' className='skill_fe_css' />
                </div>
                <div className='skill_fe_item'>
                  <img src='/fe_icons/fe_JavaScript.png' alt='fe_javascript' className='skill_fe_javascript' />
                  <img src='/fe_icons/fe_TypeScript.png' alt='fe_typescript' className='skill_fe_typescript' />
                </div>
                <div className='skill_fe_item'>
                  <img src='/fe_icons/fe_React.png' alt='fe_react' className='skill_fe_react' />
                  <img src='/fe_icons/fe_Redux.png' alt='fe_redux' className='skill_fe_redux' />
                </div>
                <div className='skill_fe_item'>
                  <img src='/fe_icons/fe_NextJs.png' alt='fe_nextjs' className='skill_fe_nextjs' />
                  <img src='/fe_icons/fe_Styled-Components.png' alt='fe_styled-components' className='skill_fe_styled-components' />
                </div>
              </div>
            </div>
            <div className='skill_fe_box'>
              <div className='skill_fe_title'>Front-End</div>
              <div className='skill_fe_list'></div>
            </div>
            <div className='skill_fe_box'>
              <div className='skill_fe_title'>Front-End</div>
              <div className='skill_fe_list'></div>
            </div>
          </div>
        </div>
      </>
    )
  }
  //--------------------------------------------------------

  if (page !== 0 && page !== 2) {
    return (
      <>
        <div
          className='inactive_skill_container'
          onClick={() => dispatch(page02())}>
          <span className='inactive_skill_title'>02 Skill</span>
        </div>
      </>
    )
  }
}

export default Skill;