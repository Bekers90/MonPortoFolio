import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];

    // Ajuste la taille du canvas à l'écran entier
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Configuration des particules
    const initParticles = () => {
      particles = [];
      // Ajuste le nombre de particules selon la largeur de l'écran
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      
      for (let i = 0; i < Math.min(particleCount, 80); i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5, // Taille entre 0.5px et 2.5px
          speedX: (Math.random() - 0.5) * 0.4, // Vitesse horizontale lente
          speedY: (Math.random() - 0.5) * 0.4, // Vitesse verticale lente
          alpha: Math.random() * 0.5 + 0.2, // Opacité initiale
        });
      }
    };

    // Boucle d'animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Déplacement
        p.x += p.speedX;
        p.y += p.speedY;

        // Si la particule sort de l'écran, elle réapparaît de l'autre côté
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Dessin de la particule (utilise la couleur violette/bleue de votre primary)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${p.alpha})`; // Remplacez par le RGBA de votre couleur 'primary'
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 bg-transparent"
    />
  );
};

export default ParticleBackground;
