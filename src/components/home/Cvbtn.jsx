import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Cvbtn.css'

const Cvbtn = ({link, btncontent}) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <Link
      className={`cvommonbtn mx-auto ${hovered ? 'hovered' : ''}`}
      to={link}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {btncontent}
      <span className="carrow"></span>
    </Link>
  );
};

export default Cvbtn;
