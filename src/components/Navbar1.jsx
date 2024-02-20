import React, { useState, useEffect } from 'react';
import './Navbar1.css';
import { Link } from 'react-router-dom';
import openmenu from '../assets/menu.png'

const Navbar1 = () => {
  const [isTop, setIsTop] = useState(true);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAboutUl, setShowAboutUl] = useState(false);
  const [showServiceUl, setShowServiceUl] = useState(false);
  const [showEventsUl, setShowEventsUI] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsTop(scrollTop < 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClass = isTop ? '' : 'appear';
  const navbarClassMobile = isTop ? '' : 'appear';

  const toggleMenu = () => {
    setIsMenuOpen(true);
  };

  const toggleAboutUl = () => {
    setShowAboutUl(!showAboutUl);
    setShowServiceUl(false);
    setShowEventsUI(false)
  };
  const toggleServiceUl = () => {
    setShowServiceUl(!showServiceUl);
    setShowAboutUl(false);
    setShowEventsUI(false)
  };
  const toggleEventsUl = () => {
    setShowEventsUI(!showEventsUl);
    setShowAboutUl(false);
    setShowServiceUl(false);
  };

  return (
    <>
      {/*for big screen*/}
      <nav className={`navbar fixed-top bg-body-tertiary pt-4 pb-0 ${navbarClass}`}>
      <div className='row w-100'>
        <div className="col-4 d-flex align-items-center justify-content-evenly">
          
          <div className='navlink1  ' >
            <h6 className=' hoverclass oraneHover' >About</h6>
            <ul className='Droplets1  list-unstyled w-100 px-2 rounded'>
            <li style={{ whiteSpace: 'nowrap' }}><Link to='/underconstruction' className='oraneHover no-wrap'>About 24 caroots</Link></li>
            <li ><Link to='/underconstruction' className='oraneHover'>team</Link></li>
            <li ><Link to='/underconstruction' className='oraneHover'>Awards  & Press</Link></li>
            <li ><Link to='/underconstruction' className='oraneHover'>Blog</Link></li>
            </ul>
          </div>

          <div className='navlink2  ' >
            <h6 className='oraneHover' >Services</h6>
            <ul className='Droplets2  list-unstyled w-100 px-2 rounded'>
            <li ><Link to='/underconstruction' className='oraneHover'>Gourmet Catering</Link></li>
            <li ><Link to='/underconstruction' className='oraneHover'>Bar Service</Link></li>
            <li ><Link to='/underconstruction' className='oraneHover'>Staffing</Link></li>
            <li ><Link to='/underconstruction' className='oraneHover'>Production</Link></li>
            </ul>
          </div>

          <div className='navlink3  ' >
            <h6 className=' oraneHover ' >Events</h6>
            <ul className='Droplets3  list-unstyled w-100 px-2 rounded'>
            <li ><Link to='/underconstruction' className='oraneHover'>Wedding</Link></li>
            <li ><Link to='/underconstruction' className='oraneHover'>Corporate</Link></li>
            <li ><Link to='/underconstruction' className='oraneHover'></Link></li>
            <li ><Link to='/underconstruction' className='oraneHover'>Gallery</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-4 text-center d-flex justify-content-center align-items-center">
          <Link to='/' className='mainLink'>
            <h2 className='mb-0'>24 CAROOTS</h2>
            <p className='mt-0'>CATERING & EVENTS</p>

          </Link>
          
        </div>
        <div className="col-4 d-flex align-items-center justify-content-evenly ">
          <Link to='/venue' className='navlink4 oraneHover'><h6>Venues</h6></Link>
          <Link to='/career' className='navlink5 mx-3 oraneHover'><h6>Careers</h6></Link>
          <Link to='/getintouch' className='navlink6 border text-justify headerbtn '>get in Touch</Link>

        </div>
      </div>
  
    </nav>

      {/*For mobile screen*/}
      <div className={` d-flex justify-content-center align-items-center fixed-top bg-body-tertiary mobile-nav ${navbarClassMobile}`}>
        <div className='mobile-nav-main d-flex justify-content-center align-items-center' style={{ minWidth: '100vw' }}>
          <div className="row " style={{ minWidth: '100vw' }}>
            <div className="col-4 "></div>
            <div className="col-4 d-flex justify-content-center align-items-center ">
              <Link to='/' className='mobile-mainLink w-100'>
                <h2 className='mb-0'>24 CAROOTS</h2>
                <p className='mt-0'>CATERING & EVENTS</p>
              </Link>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center ">
              <button type='button' className='mb-4 border-0 bg-transparent ' onClick={toggleMenu}>
                <img src={openmenu} alt="" className='img-fluid openbtn' />
              </button>
            </div>
          </div>
        </div>

        {/*mobile-menu-items*/}
        {isMenuOpen && (
        <div className='mobilemenuItems px-3'>
          {/* Add your mobile menu items here */}
          
          <div className='row'>
            <div className="col-4"></div>
            <div className="col-4">
              <img src='https://24carrots.com/wp-content/themes/24carrots/img/24c-white.svg' alt="" className='img-fluid logomobile'/>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center py-4 ">
              <button type='button' className='mb-4 border-0 bg-transparent text-white fs-1' onClick={()=>{setIsMenuOpen(false)}}>
                X
              </button>
            </div>
          </div>
           {/*mobile-ul*/} 
           <ul className='list-unstyled mainmobul d-flex flex-column justify-content-between align-items-center'>
            <li><Link to='/' className='mobLink' onClick={()=>{setIsMenuOpen(false)}}>Home</Link></li>
            <li onClick ={toggleAboutUl} >
              <p className='text-center mb-0 mobLink' >About</p>
              {showAboutUl && (
                <ul className=' p-0 list-unstyled p-2 aboutul d-flex flex-column align-items-center pt-3 '>
                  <li><Link to='/underconstruction' className='text-center' onClick={()=>{setIsMenuOpen(false)}}>About 24 carrots</Link></li>
                  <li><Link to='/underconstruction' className='text-center' onClick={()=>{setIsMenuOpen(false)}}>Team</Link></li>
                  <li><Link to='/underconstruction' onClick={()=>{setIsMenuOpen(false)}}>Awards & Press</Link></li>
                  <li><Link to='/underconstruction' onClick={()=>{setIsMenuOpen(false)}}>Blog</Link></li>
                </ul>
              )}
            </li>
            <li onClick ={toggleServiceUl}>
              <p className='text-center mb-0 mobLink'>Services</p>
              {showServiceUl && (
                <ul className='p-0 list-unstyled p-2 aboutul d-flex flex-column align-items-center pt-3'>
                  <li><Link to='/underconstruction' onClick={()=>{setIsMenuOpen(false)}}>Gourmet Catering</Link></li>
                  <li><Link to='/underconstruction' onClick={()=>{setIsMenuOpen(false)}}>Bar Service</Link></li>
                  <li><Link to='/underconstruction' onClick={()=>{setIsMenuOpen(false)}}>Staffing</Link></li>
                  <li><Link to='/underconstruction' onClick={()=>{setIsMenuOpen(false)}}>Productin</Link></li>
                </ul>
              )}
            </li>
            <li onClick ={toggleEventsUl}>
              <p className='text-center mb-0 mobLink'>Events</p>
              {showEventsUl && (
                <ul className='p-0 list-unstyled p-2 aboutul d-flex flex-column align-items-center pt-3'>
                  <li><Link to='/underconstruction' onClick={()=>{setIsMenuOpen(false)}}>Wedding</Link></li>
                  <li><Link to='/underconstruction' onClick={()=>{setIsMenuOpen(false)}}>Corporate</Link></li>
                  <li><Link to='/underconstruction' onClick={()=>{setIsMenuOpen(false)}}>Gallery</Link></li>
                </ul>
              )}
            </li>
            <li><Link to='/venue' className='mobLink' onClick={()=>{setIsMenuOpen(false)}}>Venues</Link></li>
            <li><Link to='/career' className='mobLink' onClick={()=>{setIsMenuOpen(false)}}>Careers</Link></li>
            <li><Link to='/getintouch' className='mobLink' onClick={()=>{setIsMenuOpen(false)}}>Get In Touch</Link></li>
          </ul>

          {/*Social Media Icons */}
          <div className='SocialMediaIcon d-flex align-items-center justify-content-evenly mb-3 py-2'>
            <a href=''><img src="https://24carrots.com/wp-content/themes/24carrots/img/social/facebook-icon.svg" alt="" className='img-fluid'/></a>
            <a href=''><img src="https://24carrots.com/wp-content/themes/24carrots/img/social/instagram-icon.svg" alt="" className='img-fluid'/></a>
            <a href=''><img src="https://24carrots.com/wp-content/themes/24carrots/img/social/twitter-icon.svg" alt="" className='img-fluid'/></a>
            <a href=''><img src="https://24carrots.com/wp-content/themes/24carrots/img/social/linkedIn-icon.svg" alt="" className='img-fluid'/></a>
          </div>

          <div className='d-flex align-items-center justify-content-center shortLink text-white mb-3 py-1'>
            <Link to='/getintouch' className='me-5' >GALLERY</Link> | <Link to='/getintouch' className='ms-5'>FAQ</Link>
          </div>

          <p className='text-center textp mt-1'>© 2023 24 Carrots Catering &amp; Events. <br/>All rights&nbsp;reserved.</p>
               <p className='lstp'>Site & Design by Dooley Creative co</p>
             
        </div>
      )}
      </div>
    </>
  );
}

export default Navbar1;
