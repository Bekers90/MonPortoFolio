import { useEffect, useState } from 'react';

export const useScrollSpy = (sectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    // Évite l'écoute si le tableau est vide
    if (!sectionIds || sectionIds.length === 0) return;

    const observers = [];

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    // Configuration de la zone de détection (simule votre offset via rootMargin)
    // -offsetpx en haut signifie que la détection se fait juste sous votre Navbar
    const options = {
      root: null,
      rootMargin: `-${offset}px 0px -60% 0px`, 
      threshold: 0,
    };

    const observer = new IntersectionObserver(callback, options);

    // Observation de chaque section présente dans le DOM
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [JSON.stringify(sectionIds), offset]); // Dépendance stabilisée proprement

  return activeSection;
};

// Fonction de défilement fluide vers une section (Calcul universel et précis)
export const scrollToSection = (sectionId, offset = 80) => {
  const section = document.getElementById(sectionId);
  if (section) {
    // CORRECTION : getBoundingClientRect() inclut les marges réelles par rapport à la fenêtre de navigation
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = section.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
