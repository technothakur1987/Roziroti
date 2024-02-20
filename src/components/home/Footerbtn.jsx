import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Footerbtn.css'

const Footerbtn = ({link, btncontent}) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <Link
      className={`fcommonbtn mx-auto ${hovered ? 'hovered' : ''}`}
      to={link}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {btncontent}
      <span className="farrow"></span>
    </Link>
  );
};

export default Footerbtn;
