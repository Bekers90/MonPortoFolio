import { useEffect, useState, useRef } from 'react';

const FadeIn = ( { children, delay = 0, duration = 500, threshold = 0.1 } ) => {


const [isVisible, setIsVisible] = useState(false);
const elementRef = useRef(null);

useEffect(() => {
  const currentElement = elementRef.current;
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    },
    { 
      threshold: threshold,
      rootMargin: '0px 0px -50px 0px'
     }
  );

  if(currentElement) {
    observer.observe(currentElement);
  }

  return () => {
    if(currentElement) {
      observer.unobserve(currentElement);
     }
    };
   }, [threshold, isVisible]);

  return (
    <div
      ref={elementRef}
      className={`${isVisible ? 'animation-fadeIn' : 'opacity-0'}`}
      style={{
        animationDelay: isVisible ? `${delay}ms` : '0ms',
        animationDuration: isVisible ? `${duration}ms` : '0ms', 
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  )
}

export default FadeIn