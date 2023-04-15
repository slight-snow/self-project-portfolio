import React from 'react';
import './contents.css';

function Contents() {
  return (
    <>
      <div>
        <div className='contents_container'>
          <div className='contents_box'>
            <div className='contents_title'>
              <div>About</div>
              <div>Skill</div>
              <div>Project</div>
              <div>Contact</div>
            </div>
            <div className='contents_line'>
              <div className='dots_container'>
                <div className='unselected' />
                <div className='unselected' />
                <div className='unselected' />
                <div className='unselected' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Contents;