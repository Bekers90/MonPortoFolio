import { useState } from "react";
import { ChevronDown, Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const ExperienceCard = ({ exp }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="w-full bg-white/5 border border-white/10 shadow-lg rounded-2xl p-5 md:p-6 transition-all duration-300 ease-in-out hover:border-primary/40 hover:shadow-2xl"
    >
      {/* En-tête de la carte */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        
        {/* Informations principales (Poste, Entreprise, Lieu) */}
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center rounded-xl h-12 w-12 bg-primary/10 border border-primary/30 text-primary shrink-0">
            <Briefcase className="w-5 h-5" />
          </div>
          <div className="flex flex-col gap-y-1">
            <h3 className="text-white font-bold text-lg md:text-xl tracking-wide leading-tight">
              {exp.poste}
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span className="text-primary font-semibold">
                {exp.entreprise}
              </span>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="flex items-center gap-x-1 text-white/50">
                <MapPin className="w-3.5 h-3.5" />
                <span>{exp.lieu}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Période et Bouton d'action (Voir les missions) */}
        <div className="flex items-center justify-between sm:justify-end gap-x-4 border-t border-white/5 pt-3 sm:border-none sm:pt-0">
          <div className="flex items-center gap-x-1.5 text-xs md:text-sm font-semibold text-white/60 bg-white/5 px-3 py-1 rounded-full shrink-0">
            <Calendar className="w-3.5 h-3.5 text-primary/80" />
            <span>{exp.periode}</span>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center gap-x-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer group shrink-0"
          >
            <span>{isOpen ? "Masquer les tâches" : "Voir les tâches"}</span>
            <ChevronDown 
              className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} 
            />
          </button>
        </div>

      </div>

      {/* Liste déroulante des missions */}
      <div 
        className={`grid transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? "grid-rows-[1fr] opacity-100 mt-6 pt-4 border-t border-white/10" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-y-3">
            {exp.missions.map((mission, index) => (
              <li key={index} className="flex items-start gap-x-3 text-sm md:text-base text-gray-400 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span>{mission}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default ExperienceCard;
