import React from 'react';
import './04contact.css';

function Contact(props) {
  return (
    <>
      <div
        className='contact_container'
        onClick={() => props.setActive(4)}>
        <div>04</div>
        <div className='contact_break_line' />
        <div className='contact_title'>CONTACT</div>
      </div>
    </>
  )
}

export default Contact;