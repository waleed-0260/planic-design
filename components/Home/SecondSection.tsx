// components/SecondSection.tsx

import React, { useEffect, useRef, useState } from 'react';

interface Word {
  text: string;
  color: string;
}

const SecondSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState<Word[]>([]);
  const [scrollAttempts, setScrollAttempts] = useState(0);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault(); 
      setScrollAttempts(prevAttempts => prevAttempts + 1);
    };

    if (sectionRef.current) { 
      sectionRef.current.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (sectionRef.current) {
        sectionRef.current.removeEventListener('wheel', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const originalText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;
    const words = originalText.split(' ');
    setText(words.map((word) => ({ text: word, color: '#000' }))); 
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (scrollAttempts > 0) {
        const updatedText = text.map((word, index) => {
          if (index < scrollAttempts) {
            return { ...word, color: 'red' }; 
          }
          return word;
        });
        setText(updatedText);
      }
    }, 100); // Adjust interval time as needed

    return () => clearInterval(intervalId);
  }, [scrollAttempts, text]);

  return (
    <section ref={sectionRef} style={{ overflowY: 'scroll', height: '500px' }}> 
      {/* Your section content here */}
      <h2>This is the second section</h2>
      <p>
        {text.map((word, index) => (
          <span key={index} style={{ color: word.color }}>
            {word.text} 
          </span>
        ))}
      </p>
      {/* Add more content as needed */}
    </section>
  );
};

export default SecondSection;