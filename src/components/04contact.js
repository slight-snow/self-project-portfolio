import React from 'react';
import { useDispatch } from 'react-redux';
import { page04 } from '../features/counter/counterSlice';
import './04contact.css';

function Contact() {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className='contact_container'
        onClick={() => dispatch(page04())}>
        <div>04</div>
        <div className='contact_break_line' />
        <div className='contact_title'>CONTACT</div>
      </div>
    </>
  )
}

export default Contact;