import React, { useState, useEffect } from 'react';
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

import auction00 from '../../assets/auction/Auction_Calculator_00_Main_Page.png';

import portfolio00 from '../../assets/portfolio/Portfolio_00_Landing_Page.png';
import portfolio01 from '../../assets/portfolio/Portfolio_01_About_Page.png';
import portfolio02 from '../../assets/portfolio/Portfolio_02_Skill_Page.png';
import portfolio03 from '../../assets/portfolio/Portfolio_03_Work_Page.png';
import portfolio04 from '../../assets/portfolio/Portfolio_04_Contact_Page.png';

const preloadImages = () => {
  const images = [
    banthing00, banthing01, banthing02, banthing03, banthing04, banthing05, banthing06,
    auction00,
    portfolio00, portfolio01, portfolio02, portfolio03, portfolio04
  ]
  images.forEach((image) => {
    const img = new Image();
    img.src = image;
  });
};

function Work() {
  const [banthingPage, setBanthingPage] = useState(1);
  const [portfolioPage, setPortfolioPage] = useState(1);

  const page = useSelector((state) => state.counter.page);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   preloadImages();
  // }, []);

  function banthingPageSlides(n) {
    if (banthingPage + n > 7) {
      setBanthingPage(1);
    } else if (banthingPage + n < 1) {
      setBanthingPage(7)
    } else {
      setBanthingPage(banthingPage + n);
    }
  }

  function portfolioPageSlides(n) {
    if (portfolioPage + n > 5) {
      setPortfolioPage(1);
    } else if (portfolioPage + n < 1) {
      setPortfolioPage(5)
    } else {
      setPortfolioPage(portfolioPage + n);
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
    preloadImages();

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
                  <div className='work_image_prev_black' onClick={() => banthingPageSlides(-1)}>&#10094;</div>
                  <div className='work_image_next_black' onClick={() => banthingPageSlides(1)}>&#10095;</div>
                  {banthingPage === 1 ? <img className='banthing00' src={banthing00} alt='banthing00' onClick={() => window.open(banthing00)} /> : <></>}
                  {banthingPage === 2 ? <img className='banthing01' src={banthing01} alt='banthing01' onClick={() => window.open(banthing01)} /> : <></>}
                  {banthingPage === 3 ? <img className='banthing02' src={banthing02} alt='banthing02' onClick={() => window.open(banthing02)} /> : <></>}
                  {banthingPage === 4 ? <img className='banthing03' src={banthing03} alt='banthing03' onClick={() => window.open(banthing03)} /> : <></>}
                  {banthingPage === 5 ? <img className='banthing04' src={banthing04} alt='banthing04' onClick={() => window.open(banthing04)} /> : <></>}
                  {banthingPage === 6 ? <img className='banthing05' src={banthing05} alt='banthing05' onClick={() => window.open(banthing05)} /> : <></>}
                  {banthingPage === 7 ? <img className='banthing06' src={banthing06} alt='banthing06' onClick={() => window.open(banthing06)} /> : <></>}
                </div>

                <div className='work_image_page'>
                  {banthingPage === 1 ? <div className='work_image_page_circle_active' onClick={() => setBanthingPage(1)} /> : <div className='work_image_page_circle_inactive' onClick={() => setBanthingPage(1)} />}
                  {banthingPage === 2 ? <div className='work_image_page_circle_active' onClick={() => setBanthingPage(2)} /> : <div className='work_image_page_circle_inactive' onClick={() => setBanthingPage(2)} />}
                  {banthingPage === 3 ? <div className='work_image_page_circle_active' onClick={() => setBanthingPage(3)} /> : <div className='work_image_page_circle_inactive' onClick={() => setBanthingPage(3)} />}
                  {banthingPage === 4 ? <div className='work_image_page_circle_active' onClick={() => setBanthingPage(4)} /> : <div className='work_image_page_circle_inactive' onClick={() => setBanthingPage(4)} />}
                  {banthingPage === 5 ? <div className='work_image_page_circle_active' onClick={() => setBanthingPage(5)} /> : <div className='work_image_page_circle_inactive' onClick={() => setBanthingPage(5)} />}
                  {banthingPage === 6 ? <div className='work_image_page_circle_active' onClick={() => setBanthingPage(6)} /> : <div className='work_image_page_circle_inactive' onClick={() => setBanthingPage(6)} />}
                  {banthingPage === 7 ? <div className='work_image_page_circle_active' onClick={() => setBanthingPage(7)} /> : <div className='work_image_page_circle_inactive' onClick={() => setBanthingPage(7)} />}
                  {/* <div className='work_image_page_prev' onClick={() => banthingPageSlides(-1)}>◀︎</div>
                  {banthingPage === 1 ? <span>1&nbsp;&nbsp;/&nbsp;&nbsp;7</span> : <></>}
                  {banthingPage === 2 ? <span>2&nbsp;&nbsp;/&nbsp;&nbsp;7</span> : <></>}
                  {banthingPage === 3 ? <span>3&nbsp;&nbsp;/&nbsp;&nbsp;7</span> : <></>}
                  {banthingPage === 4 ? <span>4&nbsp;&nbsp;/&nbsp;&nbsp;7</span> : <></>}
                  {banthingPage === 5 ? <span>5&nbsp;&nbsp;/&nbsp;&nbsp;7</span> : <></>}
                  {banthingPage === 6 ? <span>6&nbsp;&nbsp;/&nbsp;&nbsp;7</span> : <></>}
                  {banthingPage === 7 ? <span>7&nbsp;&nbsp;/&nbsp;&nbsp;7</span> : <></>}
                  <div className='work_image_page_next' onClick={() => banthingPageSlides(1)}>▶︎</div> */}
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
                  <br />최소 주문금액, 배달팁 등 배달 음식에 대해
                  <br />사용자들이 느끼는 부담을 해소하고자 추진된 팀 프로젝트입니다.
                </div>

                <div className='work_detail_container'>
                  <div className='work_detail_box_01'>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ Repository</span>
                      <span className='work_detail_item_content'>
                        -&nbsp;<a href='https://github.com/slight-snow/BanThing' target='_blank' rel='noreferrer'>github.com/slight-snow/BanThing</a>
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
                      <span className='work_detail_item_title'>✦ Responsive</span>
                      <span className='work_detail_item_content'>- O</span>
                    </div>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ Team Member</span>
                      <span className='work_detail_item_content'>- 4 Members</span>
                    </div>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ Project Duration</span>
                      <span className='work_detail_item_content'>- 4 Weeks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='work_line_box'>
              <div className='work_line_between_item' />
              &nbsp;&nbsp;✦&nbsp;&nbsp;
              <div className='work_line_between_item' />
            </div>

            {/* 02 */}
            <div className='work_item'>

              {/* -------------------SCREEN SIDE------------------- */}
              <div className='work_screen_box'>
                <div className='work_image'>
                  <div className='work_image_prev_white'>&#10094;</div>
                  <div className='work_image_next_white'>&#10095;</div>
                  <img className='auction00' src={auction00} alt='' onClick={() => window.open(auction00)} />
                </div>

                <div className='work_image_page'>
                  <div className='work_image_page_circle_active' />
                  {/* <div className='work_image_page_prev'>◀︎</div>
                  <span>1&nbsp;&nbsp;/&nbsp;&nbsp;1</span>
                  <div className='work_image_page_next'>▶︎</div> */}
                </div>
              </div>

              {/* -------------------SCRIPT SIDE------------------- */}
              <div className='work_script_box'>
                <div className='work_script_title'>Auction Calculator</div>
                <div className='work_script_content'>
                  게임 내 경매 시스템에서 적정 입찰가를 계산해주는 정적 웹 사이트입니다.
                  <br />
                  <br />경매에 참여하는 인원수와 경매장가를 입력하면 손익분기점을 계산하여
                  <br />이를 바탕으로 입찰선점가, 직전입찰가 등 적정 입찰가를 추천합니다.
                  <br />
                  <br />경매에 참여하는 인원수와 경매장가는 버튼을 통해 조작하거나,
                  <br />직접 숫자를 입력하여 구체적인 수치를 입력할 수 있습니다.
                  <br />
                  <br />만약 입찰하는 것 자체가 손해로 이어질 경우,
                  <br />적정 입찰가를 계산하거나 추천하지 않습니다.
                  <br />
                  <br />계산된 금액을 클릭하여 클립보드에 해당 금액을 복사할 수 있습니다.
                  <br />대학교 게임 소모임 내의 수요를 기반으로 제작되었습니다.
                </div>

                <div className='work_detail_container'>
                  <div className='work_detail_box_01'>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ Repository</span>
                      <span className='work_detail_item_content'>
                        -&nbsp;<a href='https://github.com/slight-snow/lostark-calc' target='_blank' rel='noreferrer'>github.com/slight-snow/lostark-calc</a>
                      </span>
                    </div>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ Front End</span>
                      <span className='work_detail_item_content'>
                        -&nbsp;<span className='work_detail_item_content_bold'>React, TypeScript, Next.js</span>
                      </span>
                    </div>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ Back End</span>
                      <span className='work_detail_item_content'>- X</span>
                    </div>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ Deploy</span>
                      <span className='work_detail_item_content'>-&nbsp;<span className='work_detail_item_content_bold'>Vercel</span></span>
                    </div>
                  </div>
                  <div className='work_detail_box_02'>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ URL</span>
                      <span className='work_detail_item_content'>-&nbsp;<a href='https://lostark-calc.vercel.app/auction' target='_blank' rel='noreferrer'>lostark-calc.vercel.app/auction</a></span>
                    </div>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ Responsive</span>
                      <span className='work_detail_item_content'>- X</span>
                    </div>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ Team Member</span>
                      <span className='work_detail_item_content'>- 1 Member</span>
                    </div>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ Project Duration</span>
                      <span className='work_detail_item_content'>- 1.5 Weeks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='work_line_box'>
              <div className='work_line_between_item' />
              &nbsp;&nbsp;✦&nbsp;&nbsp;
              <div className='work_line_between_item' />
            </div>

            {/* 03 */}
            <div className='work_item'>

              {/* -------------------SCREEN SIDE------------------- */}
              <div className='work_screen_box'>
                <div className='work_image'>
                  <div className='work_image_prev_white' onClick={() => portfolioPageSlides(-1)}>&#10094;</div>
                  <div className='work_image_next_white' onClick={() => portfolioPageSlides(1)}>&#10095;</div>
                  {portfolioPage === 1 ? <img className='portfolio00' src={portfolio00} alt='portfolio00' onClick={() => window.open(portfolio00)} /> : <></>}
                  {portfolioPage === 2 ? <img className='portfolio01' src={portfolio01} alt='portfolio01' onClick={() => window.open(portfolio01)} /> : <></>}
                  {portfolioPage === 3 ? <img className='portfolio02' src={portfolio02} alt='portfolio02' onClick={() => window.open(portfolio02)} /> : <></>}
                  {portfolioPage === 4 ? <img className='portfolio03' src={portfolio03} alt='portfolio03' onClick={() => window.open(portfolio03)} /> : <></>}
                  {portfolioPage === 5 ? <img className='portfolio04' src={portfolio04} alt='portfolio04' onClick={() => window.open(portfolio04)} /> : <></>}
                </div>

                <div className='work_image_page'>
                  {portfolioPage === 1 ? <div className='work_image_page_circle_active' onClick={() => setPortfolioPage(1)} /> : <div className='work_image_page_circle_inactive' onClick={() => setPortfolioPage(1)} />}
                  {portfolioPage === 2 ? <div className='work_image_page_circle_active' onClick={() => setPortfolioPage(2)} /> : <div className='work_image_page_circle_inactive' onClick={() => setPortfolioPage(2)} />}
                  {portfolioPage === 3 ? <div className='work_image_page_circle_active' onClick={() => setPortfolioPage(3)} /> : <div className='work_image_page_circle_inactive' onClick={() => setPortfolioPage(3)} />}
                  {portfolioPage === 4 ? <div className='work_image_page_circle_active' onClick={() => setPortfolioPage(4)} /> : <div className='work_image_page_circle_inactive' onClick={() => setPortfolioPage(4)} />}
                  {portfolioPage === 5 ? <div className='work_image_page_circle_active' onClick={() => setPortfolioPage(5)} /> : <div className='work_image_page_circle_inactive' onClick={() => setPortfolioPage(5)} />}
                  {/* <div className='work_image_page_prev' onClick={() => portfolioPageSlides(-1)}>◀︎</div>
                  {portfolioPage === 1 ? <span>1 / 5</span> : <></>}
                  {portfolioPage === 2 ? <span>2 / 5</span> : <></>}
                  {portfolioPage === 3 ? <span>3 / 5</span> : <></>}
                  {portfolioPage === 4 ? <span>4 / 5</span> : <></>}
                  {portfolioPage === 5 ? <span>5 / 5</span> : <></>}
                  <div className='work_image_page_next' onClick={() => portfolioPageSlides(1)}>▶︎</div> */}
                </div>
              </div>

              {/* -------------------SCRIPT SIDE------------------- */}
              <div className='work_script_box'>
                <div className='work_script_title'>PORTFOLIO</div>
                <div className='work_script_content'>
                  저에 대해 소개하고자 제작한 포트폴리오용 정적 웹 사이트입니다.
                  <br />
                  <br />메인 페이지에서 열람하고자 하는 페이지를 클릭하거나,
                  <br />프로필 우측의 바를 클릭하여 원하는 페이지로 이동할 수 있습니다.
                  <br />
                  <br />프로필 하단의 아이콘을 클릭하면 아이콘에 해당하는 사이트로 이동합니다.
                  <br />
                  <br />'ABOUT' 페이지에서는 저에 대한 세부 스펙과 프로필을,
                  <br />'SKILL' 페이지에서는 제가 보유한 기술 및 스택을,
                  <br />'WORK' 페이지에서는 제가 참여한 프로젝트를 확인할 수 있습니다.
                  <br />
                  <br />마지막으로, 'CONTACT' 페이지에서는 저의 연락처를 확인할 수 있으며,
                  <br />페이지 내의 폼을 작성하여 메일을 전송할 수 있습니다.
                </div>

                <div className='work_detail_container'>
                  <div className='work_detail_box_01'>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ Repository</span>
                      <span className='work_detail_item_content'>
                        -&nbsp;<a href='https://github.com/slight-snow/self-project-01' target='_blank' rel='noreferrer'>github.com/slight-snow/self-project-01</a>
                      </span>
                    </div>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ Front End</span>
                      <span className='work_detail_item_content'>
                        -&nbsp;<span className='work_detail_item_content_bold'>React, JavaScript</span>
                      </span>
                    </div>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ Back End</span>
                      <span className='work_detail_item_content'>- X</span>
                    </div>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ Deploy</span>
                      <span className='work_detail_item_content'>-&nbsp;<span className='work_detail_item_content_bold'>Vercel</span></span>
                    </div>
                  </div>
                  <div className='work_detail_box_02'>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ URL</span>
                      <span className='work_detail_item_content'>-&nbsp;<a href='https://yunseok-portfolio.vercel.app/' target='_blank' rel='noreferrer'>yunseok-portfolio.vercel.app</a></span>
                    </div>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ Responsive</span>
                      <span className='work_detail_item_content'>- X</span>
                    </div>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ Team Member</span>
                      <span className='work_detail_item_content'>- 1 Member</span>
                    </div>
                    <div className='work_detail_item'>
                      <span className='work_detail_item_title'>✦ Project Duration</span>
                      <span className='work_detail_item_content'>- 4 Weeks</span>
                    </div>
                  </div>
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