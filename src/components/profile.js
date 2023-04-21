import React from 'react';
import { useDispatch } from 'react-redux';
import { page00 } from '../features/counter/counterSlice';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import profile_image from '../assets/profile_image.jpeg'
import icon_github from '../assets/icon_github.svg'
import icon_velog from '../assets/icon_velog.png'
import icon_velog_white from '../assets/icon_velog_white.svg'
import icon_email from '../assets/icon_email.png'
import './profile.css';

const notify = () =>
  toast.info(<div>이메일 주소가 복사 되었습니다 :) <br /> (e-mail address copied to clipboard)</div>, {
    position: 'bottom-center',
    theme: 'dark',
    autoClose: 2200,
    transition: Zoom,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    pauseOnFocusLoss: false,
    draggable: true,
    progress: '',
  });

function Profile() {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className='profile_title' onClick={() => window.location.reload()}>yunseok.portfolio</div>
        {/* <div className='profile_title' onClick={() => dispatch(page00())}>#yunseok.portfolio</div> */}
        <div className='profile_container'>
          <div className='profile_box'>
            <div className='profile_image_box'>
              <img className='profile_image' alt='profile_image' src={profile_image} />
            </div>
            <div className='profile_text_box'>
              <div className='profile_name_kor'>
                정윤석
              </div>
              <div className='profile_name_eng'>
                Jeong Yunseok
              </div>
              <div className='profile_break_line' />
              <div className='profile_job_kor'>
                프론트엔드 개발자
              </div>
              <div className='profile_job_eng'>
                Front-End Developer
              </div>
            </div>
            <div className='profile_icon_box'>
              <img
                className='profile_icon_github' alt='icon_github' src={icon_github}
                onClick={() => window.open('https://github.com/slight-snow', '_blank')} />
              <img
                className='profile_icon_velog' alt='icon_velog' src={icon_velog_white}
                onClick={() => window.open('https://velog.io/@slight-snow', '_blank')} />
              <img
                className='profile_icon_email' alt='icon_email' src={icon_email}
                onClick={() =>
                  navigator.clipboard.writeText('hee_ahn97@naver.com').then(notify)} />
            </div>
          </div>
        </div>
        <ToastContainer style={{ "font-size": "15px", width: "350px" }} />
      </div>
    </>
  );
}

export default Profile;
