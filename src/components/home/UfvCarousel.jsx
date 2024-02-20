import React, { useState } from 'react';
import './UfvCarousel.css';
import Cvbtn from './Cvbtn';

const UfvCarousel = () => {
  let ufvCarousel = [
    {
      image: 'https://24carrots.com/wp-content/uploads/2023/03/the-richland-tanveer-badal-13.jpg',
      name: 'The Richland Ballroom',
      venue: 'Orange',
      a: 'https://technoera.netlify.app/'
    },
    {
      image: 'https://24carrots.com/wp-content/uploads/2023/09/MAIN.jpg',
      name: 'Oak Creek Golf Club',
      venue: 'Irvine',
      a: 'https://technoera.netlify.app/'
    },
    {
      image: 'https://24carrots.com/wp-content/uploads/2022/08/1.-MAIN-4.jpg',
      name: 'Rancho Las Lomas',
      venue: 'Silverado',
      a: 'https://technoera.netlify.app/'
    },
    {
      image: 'https://24carrots.com/wp-content/uploads/2023/08/7-31-5.png',
      name: 'Franciscan Gardens',
      venue: 'San Juan Capistrano',
      a: 'https://technoera.netlify.app/'
    },
    {
      image: 'https://24carrots.com/wp-content/uploads/2023/08/9-7.jpg',
      name: 'The Colony House',
      venue: 'Anaheim',
      a: 'https://technoera.netlify.app/'
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="ufv-carousel-container">
      <div className="ufv-carousel">
        <div className="ufv-scroll">
          {ufvCarousel.map((item, index) => (
            <div key={index} className="ufv-item" onMouseEnter={() => handleHover(index)} onMouseLeave={handleLeave}>
              <img src={item.image} alt={item.name} className={hoveredIndex === index ? 'ufv-hovered' : ''} />
              {hoveredIndex === index && (
                <div className="ufv-overlay">
                  <p className='nnn text'>{item.name}</p>
                  <p className='vvv'>{item.venue}</p>
                  {/* <a href={item.a}  className=' commonbtn viewbtn' target="_blank" rel="noopener noreferrer">EXPLORE VENUE
                  <div className='varrow'></div>
                  </a> */}
                  <Cvbtn link={item.a} btncontent='EXPLORE VENUE'/>
                  
                  </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UfvCarousel;
