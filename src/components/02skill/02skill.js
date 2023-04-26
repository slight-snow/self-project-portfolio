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
            <div className='skill_title'>#<span className='skill_title_02'>SKILL</span></div>
            <div className='skill_item'>
              <div className='skill_item_title'>▸ Front-End</div>
              <div className='skill_ul_type1'>
                <div className='skill_fe_li'>
                  <img src='/fe_icons/fe_HTML.png' alt='fe_html' className='skill_fe_html' />
                  <img src='/fe_icons/fe_CSS.png' alt='fe_css' className='skill_fe_css' />
                </div>
                <div className='skill_fe_li'>
                  <img src='/fe_icons/fe_JavaScript.png' alt='fe_javascript' className='skill_fe_javascript' />
                  <img src='/fe_icons/fe_TypeScript.png' alt='fe_typescript' className='skill_fe_typescript' />
                </div>
                <div className='skill_fe_li'>
                  <img src='/fe_icons/fe_React.png' alt='fe_react' className='skill_fe_react' />
                  <img src='/fe_icons/fe_Redux.png' alt='fe_redux' className='skill_fe_redux' />
                </div>
                <div className='skill_fe_li'>
                  <img src='/fe_icons/fe_NextJs.png' alt='fe_nextjs' className='skill_fe_nextjs' />
                  <img src='/fe_icons/fe_Styled-Components.png' alt='fe_styled-components' className='skill_fe_styled-components' />
                </div>
              </div>
            </div>
            <div className='skill_item'>
              <div className='skill_item_title'>▸ Back-End</div>
              <div className='skill_ul_type2'>
                <div className='skill_be_li'>
                  <img src='/be_icons/be_JWT.png' alt='be_jwt' className='skill_be_jwt' />
                  <img src='/be_icons/be_MySQL.png' alt='be_mysql' className='skill_be_mysql' />
                </div>
                <div className='skill_be_li'>
                  <img src='/be_icons/be_NodeJS.png' alt='be_nodejs' className='skill_be_nodejs' />
                </div>
              </div>
              <div className='space_between' />
              <div className='skill_item_title'>▸ Deploy</div>
              <div className='skill_ul_type2'>
                <div className='skill_dep_li'>
                  <img src='/dep_icons/dep_AWS.png' alt='dep_aws' className='skill_dep_aws' />
                </div>
                <div className='skill_dep_li'>
                  <img src='/dep_icons/dep_Vercel.png' alt='dep_vercel' className='skill_dep_vercel' />
                </div>
              </div>
            </div>
            <div className='skill_item'>
              <div className='skill_item_title'>▸ Communication</div>
              <div className='skill_ul_type2'>
                <div className='skill_com_li'>
                  <img src='/com_icons/com_Git.png' alt='com_git' className='skill_com_git' />
                </div>
                <div className='skill_com_li'>
                  <img src='/com_icons/com_Figma.png' alt='com_figma' className='skill_com_figma' />
                </div>
              </div>
              <div className='space_between' />
              <div className='skill_item_title'>▸ Tools</div>
              <div className='skill_ul_type2'>
                <div className='skill_tool_li'>
                  <img src='/tool_icons/tool_Word.jpeg' alt='tool_word' className='skill_tool_word' />
                  <img src='/tool_icons/tool_Excel.jpeg' alt='tool_excel' className='skill_tool_excel' />
                </div>
                <div className='skill_tool_li'>
                  <img src='/tool_icons/tool_Powerpoint.jpeg' alt='tool_powerpoint' className='skill_tool_powerpoint' />
                  <img src='/tool_icons/tool_Access.jpeg' alt='tool_access' className='skill_tool_access' />
                </div>
              </div>
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