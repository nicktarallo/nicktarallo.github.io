import React, { useState, useEffect } from 'react';

function Typewriter({ text, delay, setDone }) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  const setDoneFunc = () => {
    if (currentIndex >= text.length && showCursor) {
      setDone(true);
    }
  }

  useEffect(() => {
    if (currentIndex < text.length || showCursor) {
        const timeout = setTimeout(() => {
          setShowCursor(!showCursor);
          //setDoneFunc();
        }, 530);

        //return () => clearTimeout(timeout);
    }
    else {
        setDone(true);
    }
  }, [showCursor]);

  return <span>{currentText + (showCursor ? '_' : '')}</span>;
};

export default Typewriter;