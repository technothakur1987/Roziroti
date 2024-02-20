import React, { useState, useEffect } from 'react';
import './Sec2carousel.css';
import Commonbtn from './Commonbtn';


const Sec2carousel = () => {
    const [selectedSection, setSelectedSection] = useState(null);

    let carouselContent = [
        {
            heading: 'wedding',
            minheading: 'Exceptional Weddings',
            p: 'The most important day of your life, is ours too. Your wedding should be the ultimate celebration of your relationship, and our team of experts guide you through the process, offering peace of mind and a remarkable experience.',
            img: 'https://24carrots.com/wp-content/uploads/2023/08/wedding-scroll-cropped.jpg'
        },
        {
            heading: 'Social',
            minheading: 'Incomparable Social Events',
            p: 'We sweat the small stuff, so you don’t have to. For all of life’s special occasions, we give your anniversary, shower, or birthday party the attention it deserves, allowing you to focus on being present with your guests!',
            img: 'https://24carrots.com/wp-content/uploads/2023/10/2.2-Social-Lorely-Meza.jpg'
        },
        {
            heading: 'Corporate',
            minheading: 'ONE-OF-A-KIND CORPORATE EVENTS',
            p: 'Our job is to make you look good. From office lunches to large-scale corporate events, we’ve made our business out of making your business shine.',
            img: 'https://24carrots.com/wp-content/uploads/2023/10/2.3-Corporate-Joel-Maus.jpg'
        },
        {
            heading: 'Venues',
            minheading: 'EXCLUSIVE SOCIAL VENUES',
            p: 'We don’t put you in a box. Each venue is unique to each party, and our curated list of event spaces and venue partners offers easy access with personalized service at Southern California’s premier locations.',
            img: 'https://24carrots.com/wp-content/uploads/2023/10/2.4-Venues-Jenny-Quicksall.jpg'
        },
    ];

    useEffect(() => {
        setSelectedSection(carouselContent[0].heading);
    }, []); // Empty dependency array ensures this effect runs only once, after the initial render

    const handleClick = (section) => {
        setSelectedSection(section);
    };

   
    
    

    return (
        <>
        {/* // large screen view  */}
        <div className="sec2-carousel pb-5">
            <div className="left-section" >
                {selectedSection && <img className='img-fluid' src={carouselContent.find(content => content.heading === selectedSection).img} alt={selectedSection} />}
            </div>
            <div className="right-section pt-5">
                <h2 >Making Every Experience Magical</h2>
                <div className='rightsection-ContentWrapper '>

                <div className="subheadings">
                    {carouselContent.map((content, index) => (
                        <div key={index} onClick={() => handleClick(content.heading)}>{content.heading}</div>
                    ))}
                </div>
                <div className="selected-content">
                    {selectedSection && (
                        <>
                            <h3>{carouselContent.find(content => content.heading === selectedSection).minheading}</h3>
                            <p>{carouselContent.find(content => content.heading === selectedSection).p}</p>
                        </>
                    )}
                </div>

                </div>
                <div className='d-flex justify-content-center align-items-start ' style={{overflowX:'hidden'}}>
                    <Commonbtn link='/getintouch' btncontent='Learn More'/>
                </div>

                
            </div>
        </div>

        {/* // smal screen view  */}
        <div className='sec2-mobile'>


            {
               carouselContent.map((section, index)=>{
                return (
                    <div key={index} className='d-flex flex-column align-items-center justify-content-evenly my-5 py-3'>
                <img src={section.img} className='img-fluid'/>
                 <h5>{section.heading}</h5> 
                 <h6>{section.minheading}</h6> 
                 <p>{section.p}</p>     
                 <div className='d-flex justify-content-center align-items-start ' style={{overflowX:'hidden'}}>
                    <Commonbtn link='/getintouch' btncontent='Learn More'/>
                </div>
            </div>
                )

               }) 
            }
            


        </div>
        </>
    );
};

export default Sec2carousel;
