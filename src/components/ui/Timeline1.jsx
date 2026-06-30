import { University } from "lucide-react";
import { Fragment } from "react";

const Timeline = () => {
  const events = [
    { 
      heading: "Licence Informatique", 
      subHeading: "Université XYZ", 
      date: "2021 - 2024", 
      direction: "left" 
    },
    { 
      heading: "Master en IA", 
      subHeading: "Institut ABC", 
      date: "2024 - 2025", 
      direction: "right" 
    },
    { 
      heading: "Master Pro", // Correction mineure de la coquille textuelle
      subHeading: "Institut xxxx", 
      date: "2025 - Présent", 
      direction: "left" 
    },
  ];

  return (
    // Mobile : Aligné à gauche avec padding | PC : Aligné au centre
    <div className="flex flex-col items-start md:items-center w-full my-4 max-w-4xl mx-auto pl-8 pr-4 md:px-4"> 
      <Circle isEdge={true} />
      
      {events.map((event, key) => (
        <Fragment key={key}>
          {/* Mobile : Conteneur vertical flexible | PC : Grille à 3 colonnes */}
          <div className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-6 items-stretch w-full relative pb-6 md:pb-0">
            
            {/* Colonne Gauche (Contient la carte à gauche OU la date à droite sur PC) */}
            <div className={`w-full flex md:self-center order-2 md:order-1
              ${event.direction === 'left' ? 'justify-start' : 'md:justify-end'}`}
            >
              {event.direction === 'left' ? (
                <EventCard heading={event.heading} subHeading={event.subHeading} date={event.date} />
              ) : (
                <DateLabel date={event.date} align="end" className="hidden md:flex" />
              )}
            </div>

            {/* Ligne / Pilier du milieu */}
            <Pillar />

            {/* Colonne Droite (Contient la date à gauche OU la carte à droite sur PC) */}
            <div className={`w-full flex md:self-center order-3 md:order-3
              ${event.direction === 'right' ? 'justify-start' : 'md:justify-start'}`}
            >
              {event.direction === 'right' ? (
                <EventCard heading={event.heading} subHeading={event.subHeading} date={event.date} />
              ) : (
                <DateLabel date={event.date} align="start" className="hidden md:flex" />
              )}
            </div>
          </div>
          
          {key < (events.length - 1) && <Circle />}
        </Fragment>
      ))}
      <Circle isEdge={true} />
    </div>
  );
};

// Gestion du décalage des cercles pour s'aligner sur le pilier mobile absolu
const Circle = ({ isEdge = false }) => (
  <div className={`flex items-center justify-center rounded-full h-8 w-8 bg-linear-to-b from-primary via-primary/40 to-primary/20 text-white z-10 shrink-0
    ml-[-36px] md:ml-0 ${isEdge ? 'mb-4 md:mb-0 mt-4 md:mt-0' : ''}`}
  >
    <University className="w-4 h-4" />
  </div>
);

// Mobile : Devient une ligne absolue épousant le bord gauche | PC : Reste dans sa colonne de grille
const Pillar = () => (
  <div className="absolute left-[-22px] md:left-auto md:relative top-0 bottom-0 h-full w-1 bg-linear-to-b from-primary via-primary/50 to-primary/20 md:mx-auto order-1 md:order-2"></div>
);

// La carte intègre le badge de la date uniquement visible sur mobile (md:hidden)
const EventCard = ({ heading, subHeading, date }) => {
  return (
    <div className="flex flex-col gap-y-2 border border-white/10 bg-zinc-900 shadow-md rounded-xl p-4 transition-all hover:border-primary/30 duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl self-center w-full">
      <div className="flex flex-wrap justify-between items-center border-b border-primary/50 pb-1 gap-2">
        <div className="text-white font-bold text-base md:text-lg">{heading}</div>
        {/* Date affichée à l'intérieur de la carte sur mobile uniquement */}
        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md md:hidden">
          {date}
        </span>
      </div>
      <div className="text-sm text-gray-400">{subHeading}</div>
    </div>
  );
};

// Composant date épuré
const DateLabel = ({ date, align, className = "" }) => {
  return (
    <div className={`text-sm font-semibold text-white/50 self-center w-full transition duration-300 ${className}
      ${align === 'end' ? 'justify-end pr-2 text-right' : 'justify-start pl-2 text-left'}`}
    >
      {date}
    </div>
  );
};

export default Timeline;
