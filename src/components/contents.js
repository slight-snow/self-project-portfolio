import React from 'react';
import './contents.css';

function Contents(props) {
  return (
    <>
      <div>
        <div className='contents_container'>
          <div className='contents_box'>
            <div className='contents_line_dots_container'>
              <div className='contents_line' />

              {/* ABOUT */}
              {props.active === 1 ?
                <div className='contents'>
                  <div className='contents_title_selected'>About</div>
                  <div className='contents_dot_selected' />
                </div> :
                <div className='contents' onClick={() => props.setActive(1)}>
                  <div className='contents_title_unselected'>About</div>
                  <div className='contents_dot_unselected' />
                </div>}

              {/* SKILL */}
              {props.active === 2 ?
                <div className='contents'>
                  <div className='contents_title_selected'>Skill</div>
                  <div
                    className='contents_dot_selected' />
                </div> :
                <div className='contents' onClick={() => props.setActive(2)}>
                  <div className='contents_title_unselected'>Skill</div>
                  <div className='contents_dot_unselected' />
                </div>}

              {/* WORK */}
              {props.active === 3 ?
                <div className='contents'>
                  <div className='contents_title_selected'>Work</div>
                  <div className='contents_dot_selected' />
                </div> :
                <div className='contents' onClick={() => props.setActive(3)}>
                  <div className='contents_title_unselected'>Work</div>
                  <div className='contents_dot_unselected' />
                </div>}

              {/* CONTACT */}
              {props.active === 4 ?
                <div className='contents'>
                  <div className='contents_title_selected'>Contact</div>
                  <div className='contents_dot_selected' />
                </div> :
                <div className='contents' onClick={() => props.setActive(4)}>
                  <div className='contents_title_unselected'>Contact</div>
                  <div className='contents_dot_unselected' />
                </div>}

            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Contents;