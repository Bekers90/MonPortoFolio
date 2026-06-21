import { useEffect, useState, useRef } from 'react';

const FadeIn = ({ children, delay = 0, duration = 500, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optionnel : déconnecter après détection pour de meilleures performances
          observer.unobserve(currentElement);
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, [threshold]); // Suppression de isVisible des dépendances

  return (
    <div
      ref={elementRef}
      className={isVisible ? 'animation-fadeIn' : 'opacity-0'}
      style={{
        animationDelay: `${delay + 200}ms`,
        animationDuration: `${duration + 200}ms`, 
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
