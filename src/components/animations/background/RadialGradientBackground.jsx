

const RadialGradientBackground = ({ variant = 'hero', gradients = [] }) => {

  const variants = {
    hero: [
      {
        position: 'top-0 left-0 -translate-x-1/2 -translate-y-1/2 transform',
        size: 'w-[1400px] h-[1400px]',
        colors: [
          { color: 'rgba(141, 255, 105, 0.4)', stop: '0%' },
          { color: 'rgba(141, 255, 105, 0.2)', stop: '40%' },
          { color: 'rgba(141, 255, 105, 0.05)', stop: '75%' },
          { color: 'rgba(141, 255, 105, 0)', stop: '100%' },
        ],
        blur: '80px',
        opacity: 0.5,
      },
      {
        position: 'top-10 right-10 translate-x-1/4 transform',
        size: 'w-[1000px] h-[1000px]',
        colors: [
          { color: 'rgba(141, 255, 105, 0.3)', stop: '0%' },
          { color: 'rgba(141, 255, 105, 0.15)', stop: '50%' },
          { color: 'rgba(141, 255, 105, 0)', stop: '100%' },
        ],
        blur: '100px',
        opacity: 0.4,
      },
      {
        position: 'bottom-0 right-0 translate-x-1/3 translate-y-1/3 transform',
        size: 'w-[1200px] h-[1200px]',
        colors: [
          { color: 'rgba(141, 255, 105, 0.35)', stop: '0%' },
          { color: 'rgba(141, 255, 105, 0.1)', stop: '60%' },
          { color: 'rgba(141, 255, 105, 0)', stop: '100%' },
        ],
        blur: '90px',
        opacity: 0.5,
      },
    ],
    about: [
      {
        position: 'bottom-0 left-[75%] -translate-x-1/2 translate-y-1/4 transform',
        size: 'w-[700px] h-[700px]',
        colors: [
          { color: 'rgba(141, 255, 105, 0.4)', stop: '0%' },
          { color: 'rgba(141, 255, 105, 0.15)', stop: '50%' },
          { color: 'rgba(141, 255, 105, 0)', stop: '100%' },
        ],
        blur: '60px',
        opacity: 0.6,
      },
    ],
  };

  const activeGradients = variant === 'custom' ? gradients : variants[variant] || variants.hero;

  const generateGradient = (colors) => {
    const colorStops = colors.map(({ color, stop }) => `${color} ${stop}`).join(', ');
    // Nettoyage complet de la syntaxe CSS défectueuse
    return `radial-gradient(circle at center, ${colorStops})`;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {activeGradients.map((gradient, index) => (
        <div 
          key={index}
          className={`absolute ${gradient.position} ${gradient.size} rounded-full`}
          style={{
            background: generateGradient(gradient.colors),
            filter: `blur(${gradient.blur})`,
            opacity: gradient.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default RadialGradientBackground;
