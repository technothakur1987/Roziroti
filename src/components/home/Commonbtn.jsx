import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Commonbtn.css'

const Commonbtn = ({link, btncontent}) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <Link
      className={`commonbtn mx-auto ${hovered ? 'hovered' : ''}`}
      to={link}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {btncontent}
      <span className="arrow"></span>
    </Link>
  );
};

export default Commonbtn;
