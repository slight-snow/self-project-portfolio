import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { page03 } from '../../features/counter/counterSlice';
import './03work.css';

function Work() {
  const page = useSelector((state) => state.counter.page);
  const dispatch = useDispatch();

  if (page === 0) {
    return (
      <>
        <div
          className='home_work_container'
          onClick={() => dispatch(page03())}>
          <div className='home_work_box'>
            <span className='work_line01'></span>
            <span className='work_line02'></span>
            <span className='work_line03'></span>
            <span className='work_line04'></span>
            <div className='home_work_contents'>
              <div>03</div>
              <div className='home_work_break_line' />
              <div className='home_work_title'>WORK</div>
            </div>
          </div>
        </div>
      </>
    )
  }

  if (page === 3) {
    return (
      <>
        <div
          className='work_container'
          onClick={() => dispatch(page03())}>
          <div className='work_box'>
            {/* 01 */}
            <div className='work_item'>

              {/* -------------------SCREEN SIDE------------------- */}
              <div className='work_screen_box'>
                <div className='work_image'>
                  <div className='work_image_prev'>&#10094;</div>
                  <div className='work_image_next'>&#10095;</div>
                </div>

                <div className='work_image_page'>
                  <div className='work_image_page_prev'>◀︎</div>
                  <span>1 / 4</span>
                  <div className='work_image_page_next'>▶︎</div>
                </div>
              </div>

              {/* -------------------SCRIPT SIDE------------------- */}
              <div className='work_script_box'>
                <div className='work_script_title'>반띵(BanThing)</div>
                <div className='work_script_content'>

                </div>

                <div className='work_detail_box'>
                  <div className='work_detail_01'></div>
                  <div className='work_detail_02'></div>
                </div>
              </div>
            </div>


            {/* 02 */}
            <div className='work_item'>

              {/* -------------------SCREEN SIDE------------------- */}
              <div className='work_screen_box'>
                <div className='work_image'>
                  <div className='work_image_prev' />
                  <div className='work_image_next' />
                </div>

                <div className='work_image_page'>
                  <div className='work_image_page_prev' />
                  <span>1 / 4</span>
                  <div className='work_image_page_next' />
                </div>
              </div>

              {/* -------------------SCRIPT SIDE------------------- */}
              <div className='work_script_box'>
                <div className='work_script_title'></div>
                <div className='work_script_content'></div>

                <div className='work_detail_box'>
                  <div className='work_detail_01'></div>
                  <div className='work_detail_02'></div>
                </div>
              </div>
            </div>


            {/* 03 */}
            <div className='work_item'>

              {/* -------------------SCREEN SIDE------------------- */}
              <div className='work_screen_box'>
                <div className='work_image'>
                  <div className='work_image_prev' />
                  <div className='work_image_next' />
                </div>

                <div className='work_image_page'>
                  <div className='work_image_page_prev' />
                  <span>1 / 4</span>
                  <div className='work_image_page_next' />
                </div>
              </div>

              {/* -------------------SCRIPT SIDE------------------- */}
              <div className='work_script_box'>
                <div className='work_script_title'></div>
                <div className='work_script_content'></div>

                <div className='work_detail_box'>
                  <div className='work_detail_01'></div>
                  <div className='work_detail_02'></div>
                </div>
              </div>
            </div>


            {/* 04 */}
            <div className='work_item'>

              {/* -------------------SCREEN SIDE------------------- */}
              <div className='work_screen_box'>
                <div className='work_image'>
                  <div className='work_image_prev' />
                  <div className='work_image_next' />
                </div>

                <div className='work_image_page'>
                  <div className='work_image_page_prev' />
                  <span>1 / 4</span>
                  <div className='work_image_page_next' />
                </div>
              </div>

              {/* -------------------SCRIPT SIDE------------------- */}
              <div className='work_script_box'>
                <div className='work_script_title'></div>
                <div className='work_script_content'></div>

                <div className='work_detail_box'>
                  <div className='work_detail_01'></div>
                  <div className='work_detail_02'></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </>
    )
  }

  if (page !== 0 && page !== 3) {
    return (
      <>
        <div
          className='inactive_work_container'
          onClick={() => dispatch(page03())}>
          <span className='inactive_work_title'>03 Work</span>
        </div>
      </>
    )
  }
}

export default Work;