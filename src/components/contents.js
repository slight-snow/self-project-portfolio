import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { page00, page01, page02, page03, page04 } from '../features/counter/counterSlice';
import icon_home from '../assets/icon_home.png';
import './contents.css';

function Contents() {
  const page = useSelector((state) => state.counter.page);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className='contents_container'>
          <div className='contents_icon_box'>
            <img
              className='contents_icon_home' alt='icon_home' src={icon_home}
              onClick={() => dispatch(page00())} />
          </div>
          <div className='contents_box'>
            <div className='contents_line_dots_container'>
              <div className='contents_line' />

              {/* ABOUT */}
              {page === 1 ?
                <div className='contents'>
                  <div className='contents_title_selected'>About</div>
                  <div className='contents_dot_selected' />
                </div> :
                <div className='contents' onClick={() => dispatch(page01())}>
                  <div className='contents_title_unselected'>About</div>
                  <div className='contents_dot_unselected' />
                </div>}

              {/* SKILL */}
              {page === 2 ?
                <div className='contents'>
                  <div className='contents_title_selected'>Skill</div>
                  <div
                    className='contents_dot_selected' />
                </div> :
                <div className='contents' onClick={() => dispatch(page02())}>
                  <div className='contents_title_unselected'>Skill</div>
                  <div className='contents_dot_unselected' />
                </div>}

              {/* WORK */}
              {page === 3 ?
                <div className='contents'>
                  <div className='contents_title_selected'>Work</div>
                  <div className='contents_dot_selected' />
                </div> :
                <div className='contents' onClick={() => dispatch(page03())}>
                  <div className='contents_title_unselected'>Work</div>
                  <div className='contents_dot_unselected' />
                </div>}

              {/* CONTACT */}
              {page === 4 ?
                <div className='contents'>
                  <div className='contents_title_selected'>Contact</div>
                  <div className='contents_dot_selected' />
                </div> :
                <div className='contents' onClick={() => dispatch(page04())}>
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