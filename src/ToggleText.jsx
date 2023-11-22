

import React, { useState } from 'react';
import './App.css'; 

const ToggleText = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleToggleText = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div className="toggle-text-container">
      <button className="toggle-button" onClick={handleToggleText}>
        {isTextVisible ? 'Hide' : 'Show'} 
      </button>
      <p className={toggle-text ${isTextVisible ? 'visible' : ''}}>
        Some text to show or hide
      </p>
    </div>
  );
};

export default ToggleText;


