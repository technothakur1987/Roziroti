import React from 'react'
import './OrangeSection.css'
import Commonbtndark from './Commonbtndark'


const OrangeSection = () => {
  return (
    <div className='oSection d-flex flex-column align-items-center justify-content-evenly py-5'>
        <h2>Endless Inspiration</h2>
        <p>Sign up to our newsletter for fresh updates, encouragement, and exclusive insights.</p>
        <input type="text" placeholder='Input your Email '/>
        <Commonbtndark link='/getintouch' btncontent='SIGN UP'/>
        <p>By clicking Sign Up you’re confirming that you agree with our Terms and Conditions.</p>
    </div>
  )
}

export default OrangeSection
