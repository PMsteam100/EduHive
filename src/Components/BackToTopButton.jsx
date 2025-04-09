import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from "react-icons/fa"; 
import { FaArrowCircleDown } from "react-icons/fa"; 

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showUp, setUp] = useState(true);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const toggleUp = () => {
    setUp(!showUp);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          type="button"
          onClick={() => {
            scrollToTop();
            toggleUp();
          }}
          className="p-3 bg-white text-blue-800 rounded-full shadow-lg hover:bg-white/5 hover:border-white border-2 transition duration-300"
        >
          {showUp ? <FaArrowCircleUp /> : <FaArrowCircleDown />}
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
