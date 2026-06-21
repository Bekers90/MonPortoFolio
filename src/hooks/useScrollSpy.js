import { useEffect, useState } from 'react';

export const useScrollSpy = (sectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState(null);

  // Stabilisation du tableau pour éviter les redéclenchements infinis du useEffect
  const serializedIds = JSON.stringify(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Parcours inverse pour détecter correctement la section la plus haute visible
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          // CORRECTION : Remplacement du signe "-" par "+" pour englober toute la hauteur de la section
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    handleScroll(); // Appel initial pour définir la section active dès le chargement

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [serializedIds, offset, sectionIds]); // Utilisation de la version sérialisée

  return activeSection;
};

// Fonction de défilement fluide vers une section
export const scrollToSection = (sectionId, offset = 80) => {
  const section = document.getElementById(sectionId);
  if (section) {
    // CORRECTION : Remplacement de "=" par "-" pour soustraire proprement la hauteur de votre Navbar
    const top = section.offsetTop - offset;
    
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    });
  }
};
