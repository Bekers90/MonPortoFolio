import { SiCanva, SiClaude, SiMeta, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si"
import RadialGradientBackground from "../animations/background/RadialGradientBackground"
import { Code2, Download, Sparkles } from "lucide-react";
import FadeIn from "../animations/FadeIn"
import { ABOUT_STATS, PERSONAL_INFO } from "../../utils/constant";
import { VscCode } from "react-icons/vsc";

const About = () => {

  const skills = [
    {name:'React.js', icon: SiReact, color:'#61DAF8'},
    {name:'Next.js', icon: SiNextdotjs, color:'#000000'},
    {name:'TypeScript', icon: SiTypescript, color:'#3178C6'},
    {name:'Tailwind css', icon: SiTailwindcss, color:'#06B6D4'},
    {name:'Node.js', icon: SiNodedotjs, color:'#339933'},
    {name:'Meta', icon: SiMeta, color:'#339933'},
    {name:'Claude', icon: SiClaude, color:'#339933'},
    {name:'Postgresql', icon: SiPostgresql, color:'#339933'},
    {name:'VS-Code', icon: VscCode, color:'#339933'},
    {name:'Prisma', icon: SiPrisma, color:'#339933'},
    {name:'canvas', icon: SiCanva, color:'#339933'},
    {name:'MongoDB', icon: SiMongodb, color:'#47A248'},
  ];


  return (
    <section id="about" className="relative py-24 bg-black overflow-hidden" >
      <RadialGradientBackground variant="about" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
          {/*Main grig */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* left column - content */}
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-8">

                <FadeIn delay={60}>
                  <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit ">
                    <Code2 className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-medium">
                      Full-Stack developer
                    </span>
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                </FadeIn>

                <FadeIn delay={100}>
                  <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight">
                     Grafting Digital Experiences that Matter
                  </h2>
                </FadeIn>

                <FadeIn delay={200}>
                 <div className="flex flex-col gap-4">
                   {PERSONAL_INFO.bio.map((paragraph, index) => (
                    <p key={index} className="text-base text-white/70 leading-relaxed ">
                        {paragraph}
                    </p>
                   ) )}
                 </div>
                </FadeIn>  

                <FadeIn delay={300}>
                  <div className="grid grid-cols-3 gap-8">
                    {ABOUT_STATS.map((stat, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-primary/50 to-primary/20 rounded-full"></div>
                        <div className="text-3xl font-normal text-white mb-2 font-none">
                           {stat.value}
                        </div>
                        <p className="text-sm text-white/60 leading-snug">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </FadeIn>

                <FadeIn delay={400}>
                  <button
                   onClick={()=> window.open(PERSONAL_INFO.resume, '_blank')}
                   className="inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black rounded-full px-8 py-4 text-base font-medium transition-all duration-300 w-fit group"
                  >
                    <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                    Telecharger mon CV
                  </button>
                </FadeIn>


              </div>
            </div>

              {/* right column - into Grid */}
              <FadeIn delay={200}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 relative group">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 ">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-xl">
                          <Code2 className='w-6 h-6 text-primary'  />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-lg font-semibold text-white mb-2">Expertise</h2>
                            <p className="tex-sm text-white/70 leading-relaxed">
                              Analyse et construction scalable des applications Web avec des technologies Modernes et des meilleurs pratiques
                            </p>
                        </div>
                      </div>
                    </div>
                  </div>
                   
                  <div className="relative group">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full ">
                      <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                        <Sparkles className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-base font-semiboldtext-white mb-2"> Clean Code</h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        Rédaction maintenable et bonne documentation du code. 
                      </p>
                    </div>
                  </div> 
 
                  <div className="relative group">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                      <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                        <Download className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-base font-semiboldtext-white mb-2">Performance </h3>
                      <p className="text-sm text-white/70 leading-relaxed"> 
                        Optimizing for speed and efficiency in every project.
                        Optimisation pour la rapidité et efficacité dans tout le project.
                      </p>
                    </div>
                  </div>

                  <div className="col-span-2 relative group">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                      <div className="grid grid-cols-3 gap-6 text-center">
                        <div>
                          <div className="text-2xl font-bold text-primary mb-1"> 98% </div>
                          <div className="text-xs text-white/60">Client Satisfé</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary mb-1"> 24/7 </div>
                          <div className="text-xs text-white/60">support Available</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary mb-1"> Fast </div>
                          <div className="text-xs text-white/60">Delivery Time</div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </FadeIn>
          </div>

          c
          <FadeIn delay={500}>
            <div className="flex flex-col items-center gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-normal text-white mb-2">
                  Tech Stack & Expertise
                </h3>
                <p className="text-sm text-white/60">
                    Mes Technologies du quotidien pour réaliser vos projects
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-6 lg:col-end-8 gap-4 w-full max-w-4xl">
                {skills.map((skill, index) => (
                  <div
                  key={index}
                  className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-100 "
                  >
                    <skill.icon className="text-3xl text-primary" />
                    <div className="text-sm text-white/80 font-medium text-center">
                       {skill.name}
                    </div>

                    {/* Hover Glow Effect*/}
                    <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/10 rounded-2xl transition-opacity duration-300"></div>

                  </div>
                ))}
              </div>

            </div>
          </FadeIn>
        </div>
    </section>
  )  
}

export default About