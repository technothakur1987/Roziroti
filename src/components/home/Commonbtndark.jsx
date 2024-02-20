import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Commonbtndark.css'

const Commonbtndark = ({link, btncontent}) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <Link
      className={`commonbtnd mx-auto ${hovered ? 'hovered' : ''}`}
      to={link}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {btncontent}
      <span className="arrowd"></span>
    </Link>
  );
};

export default Commonbtndark;
