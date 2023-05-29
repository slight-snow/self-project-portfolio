import React from 'react';
import Typewriter from 'typewriter-effect';
import { useDispatch, useSelector } from 'react-redux';
import { page01 } from '../../features/counter/counterSlice';
import './01about.css';

function About() {
  const page = useSelector((state) => state.counter.page);
  const dispatch = useDispatch();

  if (page === 0) {
    return (
      <>
        <div
          className='home_about_container'
          onClick={() => dispatch(page01())}>
          <div className='home_about_box'>
            <span className='about_line01'></span>
            <span className='about_line02'></span>
            <span className='about_line03'></span>
            <span className='about_line04'></span>
            <div className='home_about_contents'>
              <div>01</div>
              <div className='home_about_break_line' />
              <div className='home_about_title'>ABOUT</div>
            </div>
          </div>
        </div>
      </>
    )
  }

  if (page === 1) {
    return (
      <>
        <div
          className='about_container'
          onClick={() => dispatch(page01())}>

          <div className='about_box'>

            <div className='about_quotes_box'>
              <div className='about_quotes_eng'>
                <div className='about_quotes_eng_title'>
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .changeDelay(80)
                        .pauseFor(2000)
                        .typeString('"The only source of knowledge is experience."')
                        .start()
                    }} />
                  <span className='about_quotes_emphasis_line01' />
                  <span className='about_quotes_emphasis_line02' />
                </div>
                <div className='about_quotes_kor_title'>"지식의 유일한 원천은 경험이다."</div>
              </div>
              <div className='about_quotes_kor'>
                <div className='about_quotes_eng_name'>- Albert Einstein -</div>
                <div className='about_quotes_kor_name'>- 앨버트 아인슈타인 -</div>
              </div>
              <div className='about_quotes_scroll'>
                <span className='about_quotes_scroll_content'>SCROLL</span>
                <div className='about_quotes_scroll_direction' />
              </div>
            </div>

            <div className='about_introduction_container'>
              <span className='about_introduction_title'>
                ✦ &nbsp;INTRODUCTION
              </span>
              <div className='about_introduction_box'>
                <div className='about_introduction_header'>
                  "경험을 통한 지식의 체화를 지향하는 개발자, <span className='about_introduction_bold'>정윤석</span>입니다."
                </div>
                <div className='about_introduction_content'>
                  &nbsp;&nbsp;새로운 이론이나 기술을 단순히 학습하는 것을 넘어, 실제로 적용하며 몸에 익히는 것을 좋아합니다.
                  <br />적용하면서 마주할 수 있는 실수나 실패를 두려워하지 않고 이를 해결하는 과정을 통한 배움을 중요시합니다.
                  <br />미숙, 도전, 실패, 해결, 성공, 적응, 변화. 이 모든 것들을 경험 삼아 저는 보다 더 성장하고자 합니다.
                  <br />
                  <br />&nbsp;&nbsp;온라인상의 웹 사이트와 편리한 웹 어플리케이션들을 사용해 보면서 웹 개발에 대한 흥미가 생겼습니다.
                  <br />부트캠프를 통해 웹 개발에 필요한 HTML, CSS, JavaScript 등의 핵심적인 기술을 학습하였고,
                  <br />이후 프로젝트에서 React, Next.js 와 같은 라이브러리 및 프레임워크를 다루며 경험을 쌓았습니다.
                  <br />
                  <br />&nbsp;&nbsp;교육과정을 수료하고 개발자로서의 진로를 확고히 하였으며, 개발 전문성을 향상시키고자 노력합니다.
                  <br />주도적으로 웹 개발 관련 공식 문서를 찾아보거나 알고리즘 문제를 풀어나가며 역량을 키워나가고 있습니다.
                  <br />기술이나 함수, 메서드들에 관해 새롭게 알게 된 내용은 이해한 부분을 바탕으로 블로그에 기록합니다.
                  <br />
                  <br />&nbsp;&nbsp;저의 경험을 바탕으로 한 성장이 다른 사용자의 긍정적인 경험을 이끌어낼 수 있도록,
                  <br />사람과 사회에 이바지할 수 있는 개발자가 되도록 계속해서 정진하겠습니다.
                </div>
                <span className='about_introduction_quotation_before' />
                <span className='about_introduction_quotation_after' />
              </div>
            </div>

            <div className='about_profile_container'>
              <span className='about_profile_title'>
                ✦ &nbsp;PROFILE
              </span>
              <div className='about_profile_box'>
                <div className='about_profile_item'>
                  <span className='about_profile_name'>• &nbsp;&nbsp;이름(한글) &nbsp;:&nbsp; 정윤석</span>
                  <span className='about_profile_name'>• &nbsp;&nbsp;이름(영문) &nbsp;:&nbsp; Jeong Yunseok</span>
                </div>
                <div className='about_profile_item'>
                  <span className='about_profile_name'>• &nbsp;&nbsp;생년월일 &nbsp;:&nbsp; 1997.03.15</span>
                  <span className='about_profile_name'>• &nbsp;&nbsp;이메일 &nbsp;:&nbsp; forcoding97@gmail.com</span>
                </div>
                <div className='about_profile_item'>
                  <span className='about_profile_name'>• &nbsp;&nbsp;연락처 &nbsp;:&nbsp; +82 10 2322 3518</span>
                  <span className='about_profile_name'>• &nbsp;&nbsp;거주지 &nbsp;:&nbsp; 경기도 과천시 별양로 12</span>
                </div>
              </div>
            </div>

            <div className='about_education_container'>
              <span className='about_education_title'>
                ✦ &nbsp;EDUCATION
              </span>
              <div className='about_education_box'>
                <div className='about_education_item'>
                  <span className='about_education_name'>• &nbsp;&nbsp;창원남고등학교</span>
                  <div className='about_extention_line' />
                  <span className='about_education_date'>2013.03 ~ 2016.02</span>
                </div>
                <div className='about_education_item'>
                  <span className='about_education_name'>
                    • &nbsp;&nbsp;가톨릭대학교 (성심)
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='about_item_detail'>- 사회복지학, 심리학</span>
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='about_item_detail'>- 3.77 / 4.5</span>
                  </span>
                  <div className='about_extention_line' />
                  <span className='about_education_date'>2016.03 ~ 2023.02</span>
                </div>
                <div className='about_education_item'>
                  <span className='about_education_name'>
                    • &nbsp;&nbsp;코드스테이츠
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='about_item_detail'>- Front-End Course 33기</span>
                  </span>
                  <div className='about_extention_line' />
                  <span className='about_education_date'>2021.07 ~ 2022.03</span>
                </div>
              </div>
            </div>

            <div className='about_certification_container'>
              <span className='about_certification_title'>
                ✦ &nbsp;CERTIFICATION
              </span>
              <div className='about_certification_box'>
                <div className='about_certification_item'>
                  <span className='about_certification_name'>• &nbsp;&nbsp;자동차운전면허증 (1종)</span>
                  <div className='about_extention_line' />
                  <span className='about_certification_date'>2016.07</span>
                </div>
                <div className='about_certification_item'>
                  <span className='about_certification_name'>
                    • &nbsp;&nbsp;TOEIC Speaking AL
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;<span className='about_item_detail'>(Advanced Low, &nbsp;Level 7)</span>
                  </span>
                  <div className='about_extention_line' />
                  <span className='about_certification_date'>2023.01</span>
                </div>
                <div className='about_certification_item'>
                  <span className='about_certification_name'>• &nbsp;&nbsp;컴퓨터활용능력 (1급)</span>
                  <div className='about_extention_line' />
                  <span className='about_certification_date'>2023.03</span>
                </div>
                <div className='about_certification_item'>
                  <span className='about_certification_name'>• &nbsp;&nbsp;정보처리기능사</span>
                  <div className='about_extention_line' />
                  <span className='about_certification_date'>2023.04</span>
                </div>
              </div>
            </div>

            <div className='about_other_container'>
              <span className='about_other_title'>
                ✦ &nbsp;OTHER
              </span>
              <div className='about_other_box'>
                <div className='about_other_item'>
                  <span className='about_other_name'>
                    • &nbsp;&nbsp;병역사항
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='about_item_detail'>- 운전병, 상담병</span>
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='about_item_detail'>- 육군 병장 만기전역</span>
                  </span>
                  <div className='about_extention_line' />
                  <span className='about_other_date'>2017.08 ~ 2019.04</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </>
    )
  }

  if (page !== 0 && page !== 1) {
    return (
      <>
        <div
          className='inactive_about_container'
          onClick={() => dispatch(page01())}>
          <span className='inactive_about_title'>01 About</span>
        </div>
      </>
    )
  }
}

export default About;

