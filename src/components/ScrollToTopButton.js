 
import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`${
        isVisible ? 'block' : 'hidden'
      } fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer transition-opacity duration-300`}
      onClick={scrollToTop}
    >
      Scroll to Top
    </button>
  );
};

export default ScrollToTopButton;
