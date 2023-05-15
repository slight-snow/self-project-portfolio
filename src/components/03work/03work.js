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
                  가까운 거리 내에 있는 주변 사용자들과 채팅방을 통해 의사소통하여
                  <br />배달 음식에 대한 배달비를 분담할 수 있는 웹 어플리케이션입니다.
                  <br />
                  <br />카카오맵 API를 활용한 웹 어플리케이션으로,
                  <br />사용자는 현재 자신의 위치를 기반으로 새로운 방을 생성하거나
                  <br />기존에 생성되어 있는 주변의 방에 참가할 수 있습니다.
                  <br />
                  <br />배달시키고자 하는 음식과 역할을 설정하고
                  <br />이를 바탕으로 사용자들 간의 세부 사항을 조율할 수 있습니다.
                  <br />
                  <br />최소주문금액, 배달팁 등 배달 음식에 대해
                  <br />사용자들이 느끼는 부담을 해소하고자 개발된 팀 프로젝트입니다.
                </div>

                <div className='work_detail_box'>
                  <ul className='work_detail_01'></ul>
                  <li></li>
                  <ul className='work_detail_02'></ul>
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