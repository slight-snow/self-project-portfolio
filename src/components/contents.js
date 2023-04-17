import React, { useState } from 'react';
import './contents.css';

function Contents() {
  const [active, setActive] = useState(0);

  console.log(active)

  return (
    <>
      <div>
        <div className='contents_container'>
          <div className='contents_box'>
            <div className='contents_line_dots_container'>
              <div className='contents_line'></div>
              <div className='contents'>
                <div className='contents_title'>About</div>
                <div
                  className='contents_dot_unselected'
                  onClick={() => setActive(1)} />
              </div>
              <div className='contents'>
                <div className='contents_title'>Skill</div>
                <div
                  className='contents_dot_unselected'
                  onClick={() => setActive(2)}>
                </div>
              </div>
              <div className='contents'>
                <div className='contents_title'>Work</div>
                <div
                  className='contents_dot_unselected'
                  onClick={() => setActive(3)} />
              </div>
              <div className='contents'>
                <div className='contents_title'>Contact</div>
                <div
                  className='contents_dot_unselected'
                  onClick={() => setActive(4)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Contents;