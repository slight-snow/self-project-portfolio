import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { page04 } from '../../features/counter/counterSlice';
import './04contact.css';

import icon_contact_email from '../../assets/icon_email.png';
import icon_contact_phone from '../../assets/icon_phone.png';
import icon_contact_location from '../../assets/icon_location.png';

import icon_contact_name from '../../assets/icon_user.png';
import icon_contact_subject from '../../assets/icon_check.png';
import icon_contact_message from '../../assets/icon_message.png';

import emailjs from '@emailjs/browser';

const notify = () =>
  toast.info(<div>메일이 정상적으로 전송되었습니다 :) <br /> (your mail has been sent successfully)</div>, {
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

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [checkName, setCheckName] = useState(true);
  const [checkEmail, setCheckEmail] = useState(true);
  const [checkSubject, setCheckSubject] = useState(true);
  const [checkMessage, setCheckMessage] = useState(true);

  const page = useSelector((state) => state.counter.page);
  const dispatch = useDispatch();

  function sendEmail(e) {
    if (name && email && subject && message) {
      e.preventDefault();
      emailjs.sendForm('service_fr1lhns', 'template_qku4pks',
        e.target,
        'lz3cUWX4ve311rPtk')
        .then((result) => {
          // console.log(result.text);
          notify();
        }, (error) => {
          // console.log(error.text);
        })
    } else {
      e.preventDefault();
      if (name.length === 0) setCheckName(false);
      if (email.length === 0) setCheckEmail(false);
      if (subject.length === 0) setCheckSubject(false);
      if (message.length === 0) setCheckMessage(false);
    }
  }

  const change = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
      setCheckName(true);
    }
    if (e.target.name === 'email') {
      setEmail(e.target.value);
      setCheckEmail(true);
    }
    if (e.target.name === 'subject') {
      setSubject(e.target.value);
      setCheckSubject(true);
    }
    if (e.target.name === 'message') {
      setMessage(e.target.value);
      setCheckMessage(true);
    }
  }

  if (page === 0) {
    return (
      <>
        <div
          className='home_contact_container'
          onClick={() => dispatch(page04())}>
          <div className='home_contact_box'>
            <span className='contact_line01'></span>
            <span className='contact_line02'></span>
            <span className='contact_line03'></span>
            <span className='contact_line04'></span>
            <div className='home_contact_contents'>
              <div>04</div>
              <div className='home_contact_break_line' />
              <div className='home_contact_title'>CONTACT</div>
            </div>
          </div>
        </div>
      </>
    )
  }

  if (page === 4) {
    return (
      <>
        <div
          className='contact_container'
          onClick={() => dispatch(page04())}>
          <div className='contact_box'>
            {/* <div className='contact_title'>#CONTACT</div> */}

            <div className='contact_script'>
              <div className='contact_script_box'>
                <div className='contact_script_title_box'>
                  <span className='contact_script_title01'>CONTACT</span>
                  <span className='contact_script_title02'>ME.</span>
                </div>
                <div className='contact_script_detail'>
                  <div className='contact_script_detail_kor'>
                    <span>
                      우측의 폼을 작성하여 저에게 메일을 보낼 수 있습니다.
                    </span>
                    <span>
                      당신의 연락을 기다리고 있겠습니다 :)
                    </span>
                  </div>
                  <div className='contact_script_detail_eng'>
                    <span>
                      You can use the form on the right to send me an email.
                    </span>
                    <span>
                      I'll be waiting for your contact :)
                    </span>
                  </div>
                </div>
                <div className='contact_script_source'>
                  <div className='contact_script_phone'>
                    <img
                      className='contact_icon_phone' alt='icon_phone' src={icon_contact_phone} />
                    <span>+82 10 2322 3518</span>
                  </div>
                  <div className='contact_script_location'>
                    <img
                      className='contact_icon_location' alt='icon_location' src={icon_contact_location} />
                    <span>경기도 과천시 별양로 12</span>
                  </div>
                  <div className='contact_script_email'>
                    <img
                      className='contact_icon_script_email' alt='icon_email' src={icon_contact_email} />
                    <span>forcoding97@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            <form className='contact_form' onSubmit={(event) => sendEmail(event)}>
              <div className='contact_form_box'>
                <div className='contact_name'>
                  <label className='contact_name_label'>
                    <img
                      className='contact_icon_name' alt='icon_name' src={icon_contact_name} />
                    Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    className='contact_name_box'
                    placeholder='Enter Your Full Name'
                    value={name}
                    onChange={(e) => change(e)} />
                  {checkName ? <></> :
                    <span className='contact_name_error'>
                      <FontAwesomeIcon icon={faCircleExclamation} />
                      Please enter your full name.
                    </span>}
                </div>
                <div className='contact_email'>
                  <label className='contact_email_label'>
                    <img
                      className='contact_icon_form_email' alt='icon_email' src={icon_contact_email} />
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    className='contact_email_box'
                    placeholder='Enter Your Email Address'
                    value={email}
                    onChange={(e) => change(e)} />
                  {checkEmail ? <></> :
                    <span className='contact_email_error'>
                      <FontAwesomeIcon icon={faCircleExclamation} />
                      Please enter your email address.
                    </span>}
                </div>
                <div className='contact_subject'>
                  <label className='contact_subject_label'>
                    <img
                      className='contact_icon_subject' alt='icon_subject' src={icon_contact_subject} />
                    Subject
                  </label>
                  <input
                    type='text'
                    name='subject'
                    className='contact_subject_box'
                    placeholder='Enter Subject'
                    value={subject}
                    onChange={(e) => change(e)} />
                  {checkSubject ? <></> :
                    <span className='contact_subject_error'>
                      <FontAwesomeIcon icon={faCircleExclamation} />
                      Please enter subject.
                    </span>}
                </div>
                <div className='contact_message'>
                  <label className='contact_message_label'>
                    <img
                      className='contact_icon_message' alt='icon_message' src={icon_contact_message} />
                    Message
                  </label>
                  <textarea
                    type='text'
                    name='message'
                    className='contact_message_box'
                    placeholder='Enter Your Message ...'
                    value={message}
                    onChange={(e) => change(e)} />
                  {checkMessage ? <></> :
                    <span className='contact_message_error'>
                      <FontAwesomeIcon icon={faCircleExclamation} />
                      Please enter your message.
                    </span>}
                </div>
                <button
                  type='submit'
                  className='contact_send_button'>
                  <span>SUBMIT</span>
                </button>
              </div>
            </form>
          </div>
          <ToastContainer style={{ "font-size": "15px", width: "350px" }} />
        </div>
      </>
    )
  }

  if (page !== 0 && page !== 4) {
    return (
      <>
        <div
          className='inactive_contact_container'
          onClick={() => dispatch(page04())}>
          <span className='inactive_contact_title'>04 Contact</span>
        </div>
      </>
    )
  }
}

export default Contact;