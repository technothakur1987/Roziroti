import React from 'react'
import './Footer.css'
import Footerbtn from './components/home/Footerbtn'
import { Link } from 'react-router-dom'




const Footer = () => {
  return (
    <div className='Footer px-5'>
        <div className="row">
            <div className="col-sm-4 mqfooterflexbasis100 mqborder-bottom">
                <h2 className='main'>24 CARROTS</h2>
                <h6 className='fades mb-5'>CATERING AND EVENTS</h6>
                <p className='mainp'>The event specialists at our Southern California headquarters are available to help with every aspect of your event.</p>
            </div>
            <div className="col-sm-8 mqfooterflexbasis100 mqpadding-top-footer mqborder-bottom">
                <div className='linkFooter '>
                    <div className='links mq-footer-align-items-end'>
                        
                            <div className='fbtn-wrapper'>
                              <Footerbtn link='/getintouch' btncontent='About'/>
                            </div>
                            <Link to='/getintouch'>About 24 carets</Link>
                            <Link to='/getintouch'>Meet the Team</Link>
                            <Link to='/getintouch'>Awards & Press</Link>
                            <Link to='/getintouch'>Blog</Link>
                        
                    </div>
                    <div className='links mq-footer-align-items-start'>
                    
                    <div className='fbtn-wrapper'>
                              <Footerbtn link='/getintouch' btncontent='Services'/>
                            </div>
                            <Link to='/getintouch'>Gourmet Catering</Link>
                            <Link to='/getintouch'>Bar Service</Link>
                            <Link to='/getintouch'>Staffing</Link>
                            <Link to='/getintouch'>Production</Link>
                        
                    </div>
                    <div className='links mq-footer-align-items-end'>
                    
                    <div className='fbtn-wrapper'>
                              <Footerbtn link='/getintouch' btncontent='Events'/>
                            </div>
                            <Link to='/getintouch'>Weddings</Link>
                            <Link to='/getintouch'>Corporate</Link>
                            <Link to='/getintouch'>Social</Link>
                            <Link to='/getintouch'>Gallery</Link>
                       
                    </div>
                    <div className='links mq-footer-align-items-start'>
                    
                            
                    <div className='fbtn-wrapper'>
                              <Footerbtn link='/getintouch' btncontent='Venues'/>
                            </div>
                            <div className='fbtn-wrapper'>
                              <Footerbtn link='/getintouch' btncontent='Careers'/>
                            </div>
                            <div className='fbtn-wrapper'>
                              <Footerbtn link='/getintouch' btncontent='Contact'/>
                            </div>
                            
                        
                    </div>
                    <div className='links mq-footer-align-items-end displayInMobileOnly'></div>
                    <div className='links mq-footer-align-items-start'>
                    
                    <div className='fbtn-wrapper'>
                              <Footerbtn link='/getintouch' btncontent='Follow Us'/>
                            </div>
                            <Link to='/getintouch' className='fi'>facebook</Link>
                            <Link to='/getintouch' className='ii'>Instagram</Link>
                            <Link to='/getintouch' className='pi'>Pinterest</Link>
                            <Link to='/getintouch' className='li'>Linkedin</Link>
                        
                    </div>
                </div>
            </div>
        </div>

        <hr className='hrrw'/>


        <div className="row QQQ">
          <div className="col-sm-6 mqflexbasis100footer mqpadding-top-footer">
            <p className='text-start mqtext-center-Footer'><span  className='mq-dblock-Footer footer-style'>Call US  : </span> <span className='ms-5 mqnomarginstart-Footer'>714.942.6000</span><span>.800.717.1545</span></p>
            <p className='text-start mqtext-center-Footer'><span className='mq-dblock-Footer footer-style'>EMAIL US : </span> <span className='ms-4 mq-dblock-Footer mqnomarginstart-Footer'>info@24carrots.com</span></p>
            <p className='text-start mqtext-center-Footer'><span className='mq-dblock-Footer footer-style'>FIND US  : </span> <span className='ms-4 mq-dblock-Footer mqnomarginstart-Footer'>150 Baker Street East, Costa Mesa, CA 92626</span></p>
          </div>
          
          <div className="col-sm-6 d-flex  align-items-end justify-content-end mq-d-n">

            <p className='cologo text-end  '>Site & Design by Dooley Creative Co</p>
          </div>
        </div>

        <hr className='hrrw2'/>

        <div className="row small-screen-disappear mqpadding-top-footer mqpadding-top-footer mqborder-tt pb-0">
          <div className="col-6 mqflexbasis100footer mqq mb0">
            <p className='text-start mb0'>© 2023 24 Carrot Catering & Events. All rights reserved.</p>
          </div>
          <div className="col-6 pb-5 pt-2 mqflexbasis100footer mqq mqpb0">
            <p className='text-end'>
            <span className='me-3'>ADA Accessibility Policy</span>
            <span>Privacy Policy</span>

            </p>
            
          </div>
        </div>

        <div className='copyrightonlyMobile pb-5 pt-3'>
          <img src="https://24carrots.com/wp-content/themes/24carrots/img/icon/dcc-logo.svg" alt="" className='img-fluid mb-2'/>
          <p>Site & design by Dooley Creative Co.</p>
        </div>
      
    </div>
  )
}

export default Footer

