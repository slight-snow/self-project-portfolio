import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { page04 } from '../../features/counter/counterSlice';
import './04contact.css';

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
            <div>04</div>
            <div className='home_contact_break_line' />
            <div className='home_contact_title'>CONTACT</div>
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
            <div>04</div>
            <div className='contact_break_line' />
            <div className='contact_title'>CONTACT</div>
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