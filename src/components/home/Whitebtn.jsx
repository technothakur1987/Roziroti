import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Whitebtn.css'

const Whitebtn = ({link, btncontent}) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <Link
      className={`wcommonbtn mx-auto ${hovered ? 'hovered' : ''}`}
      to={link}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {btncontent}
      <span className="warrow"></span>
    </Link>
  );
};

export default Whitebtn;
