import { useState } from "react";
import { ChevronDown, Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      period: "2025 - Présent",
      company: "Tech Innovation Corp",
      role: "Développeur Full-Stack IA",
      tasks: [
        "Conception et intégration de modèles de LLM au sein d'applications web existantes.",
        "Optimisation des requêtes de base de données réduisant le temps de réponse de 30%.",
        "Collaboration étroite avec les équipes produit pour définir l'architecture logicielle.",
      ]
    },
    {
      id: 2,
      period: "2024 - 2025",
      company: "Digital Solutions Agency",
      role: "Développeur React / Node.js",
      tasks: [
        "Développement de plateformes e-commerce sur mesure avec React et Tailwind CSS.",
        "Mise en place d'architectures d'API REST robustes et sécurisées sous Node.js.",
        "Maintenance applicative et rédaction de tests unitaires complets."
      ]
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 flex flex-col gap-y-4 my-8">
      {experiences.map((exp) => (
        <ExperienceCard key={exp.id} exp={exp} />
      ))}
    </div>
  );
};

const ExperienceCard = ({ exp }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="w-full border border-white/10 bg-zinc-900 shadow-lg rounded-2xl p-5 md:p-6 
                 transition-all duration-300 ease-in-out hover:border-primary/40 hover:shadow-2xl"
    >
      {/* En-tête de la carte : Grid adaptatif (1 col sur mobile, flex/grid sur PC) */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        
        {/* Infos principales */}
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center rounded-xl h-12 w-12 bg-primary/10 border border-primary/30 text-primary shrink-0">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg md:text-xl tracking-wide">
              {exp.role}
            </h3>
            <p className="text-primary font-medium text-sm md:text-base mt-0.5">
              {exp.company}
            </p>
          </div>
        </div>

        {/* Période et Bouton d'action */}
        <div className="flex items-center justify-between sm:justify-end gap-x-4 border-t border-white/5 pt-3 sm:border-none sm:pt-0">
          <div className="flex items-center gap-x-1.5 text-xs md:text-sm font-semibold text-white/50 bg-white/5 px-3 py-1 rounded-full">
            <Calendar className="w-3.5 h-3.5" />
            <span>{exp.period}</span>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center gap-x-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer group"
          >
            <span>{isOpen ? "Masquer les tâches" : "Voir les tâches"}</span>
            <ChevronDown 
              className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} 
            />
          </button>
        </div>

      </div>

      {/* Contenu rétractable : Liste des tâches */}
      <div 
        className={`grid transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? "grid-rows-[1fr] opacity-100 mt-6 pt-4 border-t border-white/10" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-y-3">
            {exp.tasks.map((task, index) => (
              <li key={index} className="flex items-start gap-x-3 text-sm md:text-base text-gray-400 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Experiences;
