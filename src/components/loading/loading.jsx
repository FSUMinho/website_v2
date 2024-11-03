import React from 'react';
import './Loading.css';
import logo_red from '../../assets/logo_red.png'; 

const Loading = () => {
  return (
    <div className="loading-container">
      <img src={logo_red} alt="Loading..." className="loading-image" />
    </div>
  );
};

export default Loading;
