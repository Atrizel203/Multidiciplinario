import React, { useState } from 'react';
import "../css/acordion.css";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      <div className={`accordion-item ${activeIndex === 0 ? 'active' : ''}`}>
        <div className="accordion-header" onClick={() => handleClick(0)}>
          Hijos
        </div>
        <div className="accordion-body">
          {activeIndex === 0 && (
            <div className='fondo'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Accordion;