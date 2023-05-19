import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { page03 } from '../../features/counter/counterSlice';
import './03work.css';

import banthing00 from '../../assets/banthing/BanThing_00_Landing_Page.png';
import banthing01 from '../../assets/banthing/BanThing_01_Login.png';
import banthing02 from '../../assets/banthing/BanThing_02_Making_Room.png';
import banthing03 from '../../assets/banthing/BanThing_03_Room_List.png';
import banthing04 from '../../assets/banthing/BanThing_04_Chat_Room.png';
import banthing05 from '../../assets/banthing/BanThing_05_My_Page.png';
import banthing06 from '../../assets/banthing/BanThing_06_Mobile.png';

function Work() {
  const [banthingPage, setBanthingPage] = useState(1);

  const page = useSelector((state) => state.counter.page);
  const dispatch = useDispatch();

  function banthingPageSlides(n) {
    if (banthingPage + n > 7) {
      setBanthingPage(1);
    } else if (banthingPage + n < 1) {
      setBanthingPage(7)
    } else {
      setBanthingPage(banthingPage + n);
    }
  }

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
                  <div className='work_image_prev' onClick={() => banthingPageSlides(-1)}>&#10094;</div>
                  <div className='work_image_next' onClick={() => banthingPageSlides(1)}>&#10095;</div>
                  {banthingPage === 1 ? <img className='banthing00' src={banthing00} alt='banthing00' /> : <></>}
                  {banthingPage === 2 ? <img className='banthing01' src={banthing01} alt='banthing01' /> : <></>}
                  {banthingPage === 3 ? <img className='banthing02' src={banthing02} alt='banthing02' /> : <></>}
                  {banthingPage === 4 ? <img className='banthing03' src={banthing03} alt='banthing03' /> : <></>}
                  {banthingPage === 5 ? <img className='banthing04' src={banthing04} alt='banthing04' /> : <></>}
                  {banthingPage === 6 ? <img className='banthing05' src={banthing05} alt='banthing05' /> : <></>}
                  {banthingPage === 7 ? <img className='banthing06' src={banthing06} alt='banthing06' /> : <></>}
                </div>

                <div className='work_image_page'>
                  <div className='work_image_page_prev' onClick={() => banthingPageSlides(-1)}>◀︎</div>
                  {banthingPage === 1 ? <span>1 / 7</span> : <></>}
                  {banthingPage === 2 ? <span>2 / 7</span> : <></>}
                  {banthingPage === 3 ? <span>3 / 7</span> : <></>}
                  {banthingPage === 4 ? <span>4 / 7</span> : <></>}
                  {banthingPage === 5 ? <span>5 / 7</span> : <></>}
                  {banthingPage === 6 ? <span>6 / 7</span> : <></>}
                  {banthingPage === 7 ? <span>7 / 7</span> : <></>}
                  <div className='work_image_page_next' onClick={() => banthingPageSlides(1)}>▶︎</div>
                </div>
              </div>

              {/* -------------------SCRIPT SIDE------------------- */}
              <div className='work_script_box'>
                <div className='work_script_title'>BANTHING</div>
                <div className='work_script_content'>
                  가까운 거리 내에 있는 주변 사용자들과 채팅방을 통해 의사소통하여
                  <br />배달 음식에 대한 배달비를 분담할 수 있는 웹 어플리케이션, '반띵'입니다.
                  <br />
                  <br />카카오맵 API를 활용한 웹 어플리케이션으로,
                  <br />사용자는 현재 자신의 위치를 기반으로 새로운 방을 생성하거나
                  <br />기존에 생성되어 있는 주변의 방에 참가할 수 있습니다.
                  <br />
                  <br />배달시키고자 하는 음식과 역할을 설정하고
                  <br />이를 바탕으로 사용자들 간의 세부 사항을 조율할 수 있습니다.
                  <br />
                  <br />최소주문금액, 배달팁 등 배달 음식에 대해
                  <br />사용자들이 느끼는 부담을 해소하고자 추진된 팀 프로젝트입니다.
                </div>

                <div className='work_detail_container'>
                  <div className='work_detail_box_01'>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ Repository</span>
                      <span className='work_detail_item_content'>
                        -&nbsp;<a href='https://github.com/slight-snow/BanThing' target='_blank'>github.com/slight-snow/BanThing</a>
                      </span>
                    </div>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ Front End</span>
                      <span className='work_detail_item_content'>
                        -&nbsp;<span className='work_detail_item_content_bold'>React, TypeScript, Next.js, Axios</span>
                      </span>
                    </div>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ Back End</span>
                      <span className='work_detail_item_content'>-&nbsp;<span className='work_detail_item_content_bold'>JWT, MySQL,</span>&nbsp;TypeScript, TypeORM</span>
                    </div>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ Deploy</span>
                      <span className='work_detail_item_content'>- AWS</span>
                    </div>
                  </div>
                  <div className='work_detail_box_02'>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ URL</span>
                      <span className='work_detail_item_content'>- banthing.kr (X)</span>
                    </div>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ Team Member</span>
                      <span className='work_detail_item_content'>- 4 Members</span>
                    </div>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ Project Duration</span>
                      <span className='work_detail_item_content'>- 4 Weeks</span>
                    </div>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>&nbsp;</span>
                      <span className='work_detail_item_content'>&nbsp;</span>
                    </div>
                  </div>
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