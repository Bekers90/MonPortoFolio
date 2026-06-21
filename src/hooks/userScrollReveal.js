import { useState, useEffect, useRef } from 'react';

export const useUserScrollReveal = (options = {}) => {
    // Extraction des options avec des valeurs par défaut
    const {
        threshold = 0.1,
        rootMargin = '0px',
    } = options;

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        // CORRECTION : Utilisation de .current au lieu de .useEffect
        const element = ref.current; 
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Arrête d'observer dès que l'élément est visible
                    observer.unobserve(element);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        // Nettoyage global plus propre avec .disconnect()
        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin]); // Les dépendances restent correctes

    return { ref, isVisible };
};
