import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { page04 } from '../../features/counter/counterSlice';
import './04contact.css';

import emailjs from '@emailjs/browser';

function sendEmail(event) {
  event.preventDefault();

  console.log(event.target)

  emailjs.sendForm('service_fr1lhns', 'template_qku4pks', event.target, 'lz3cUWX4ve311rPtk')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    })
}

function Contact() {
  const page = useSelector((state) => state.counter.page);
  const dispatch = useDispatch();

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
            {/* <form className='contact_form' onSubmit={sendEmail}>
              <input type='hidden' name='contact_number' />
              <label>Name</label>
              <input type='text' name='user_name' />
              <label>Email</label>
              <input type='email' name='user_email' />
              <label>Text</label>
              <textarea name='message' />
              <input type='submit' value='Send' />
            </form> */}
          </div>
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