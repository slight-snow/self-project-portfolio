import React from 'react';
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
                    • &nbsp;&nbsp;가톨릭대학교
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;(사회복지학 / 심리학)
                  </span>
                  <div className='about_extention_line' />
                  <span className='about_education_date'>2016.03 ~ 2023.02</span>
                </div>
                <div className='about_education_item'>
                  <span className='about_education_name'>
                    • &nbsp;&nbsp;코드스테이츠
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;(FE Course 33기)
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
                  <span className='about_certification_name'>• &nbsp;&nbsp;TOEIC Speaking AL</span>
                  <div className='about_extention_line' />
                  <span className='about_certification_date'>2023.01</span>
                </div>
                <div className='about_certification_item'>
                  <span className='about_certification_name'>• &nbsp;&nbsp;컴퓨터활용능력 1급</span>
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

