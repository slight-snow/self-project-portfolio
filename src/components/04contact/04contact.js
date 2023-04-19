import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { page04 } from '../../features/counter/counterSlice';
import './04contact.css';

function Contact() {
  const [show, setShow] = useState(false);

  const page = useSelector((state) => state.counter.page);
  const dispatch = useDispatch();

  useEffect(() => {
    if (page === 4) {
      setTimeout(() => {
        setShow(true);
      }, 850)
    } else {
      setShow(false);
    }
  }, [page]);

  if (page === 0) {
    return (
      <>
        <div
          className='home_contact_container'
          onClick={() => dispatch(page04())}>
          <div>04</div>
          <div className='home_contact_break_line' />
          <div className='home_contact_title'>CONTACT</div>
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
          {show && (
            <>
              <div>04</div>
              <div className='contact_break_line' />
              <div className='contact_title'>CONTACT</div>
            </>)}
        </div>
      </>
    )
  }

  if (page !== 0 && page !== 4) {
    return (
      <>
        <div
          className='inactive_contact_container'>
        </div>
      </>
    )
  }
}

export default Contact;