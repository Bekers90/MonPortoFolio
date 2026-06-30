import ExperienceCard from "../ui/ExperienceCard";
import FadeIn from "../animations/FadeIn"
import { GraduationCap } from "lucide-react"
import { experiences } from "../../utils/constant";


const Experiences = () => {


  return (
     <section id="experience" className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-1/4 md:left-1/3 w-80 md:w-[32rem] h-48 md:h-64 bg-primary/40 opacity-40 blur-3xl rounded-[50%]" />
            <div className="absolute top-1/4 right-20 md:left-0 w-80 md:w-[40rem] h-56 md:h-72 bg-primary/50 opacity-50 blur-3xl rounded-[50%]" />
            <div className="absolute bottom-1/2 left-20 md:right-1/3 w-72 md:w-[28rem] h-40 md:h-52 bg-primary/30 opacity-20 blur-3xl rounded-[50%]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
            <FadeIn delay={0}>
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-2">
                        <GraduationCap className="w-4 h-4 text-primary" />
                        <span className="text-sm text-primary font-medium">My Experiences</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
                        Mes expériences profesionnels
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        Showcasing my Experience
                    </p>
                </div>
            </FadeIn>
            <FadeIn delay={200}>
                 <div className="w-full max-w-4xl mx-auto px-4 flex flex-col gap-y-4 my-8">
                         {experiences.map((exp) => (
                            <ExperienceCard key={exp.id} exp={exp} />
                        ))}
                </div>
            </FadeIn>
             
        </div>
    </section>
  );
};



export default Experiences;
