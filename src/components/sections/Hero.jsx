import { PERSONAL_INFO, STATS } from "../../utils/constant"
import { Star, ChevronDown  } from "lucide-react"
import FadeIn from "../animations/FadeIn"
import { scrollToSection } from "../../hooks/useScrollSpy"
import { SiMongodb, SiTailwindcss, SiReact, SiNodedotjs, SiNextdotjs} from "react-icons/si"
import RadialGradientBackground from "../animations/background/RadialGradientBackground"


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-auto">
     <RadialGradientBackground variant='hero' />

      {/*content container*/}
      <div className=" realtive z-10 max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 py-20 w-full">
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Letf column - contnent  */}
            <div className="text-left">

              <FadeIn delay={0}>
                <div className="infine flex items-center gap-2.5 px-4.5 py-2.75 mb-8 bg-linear-to-r from-primary/18 via-primary/15 to-primary/20 border border-primary/70 rounded-full ">
                  <Star className="w-4 text-white fill-white" />
                  <span className="text-xs md:text-sm text-xhite tracking-[1.2px]">
                      {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-5 leading-tight">
                  React.js Developper Portofolio and Digital Marketing
                 </h1>
              </FadeIn>

              <FadeIn delay={200}>
                <p className="text-lg text-white/70 max-w-137.5">
                  Construction Moderne et scalable des application Web Moderne avec ReactJS. Et Digitalisation de vos service pour répondre plus facilement a vos besoins
                </p>
              </FadeIn>

              <FadeIn delay={300}>
                <button className="inline-flexitems-center gap-0 mb-12 group"
                onClick={() => scrollToSection('contact')}
                >
                  <div className="relative z-10 bg-white text-[#212121] rounded-[17px] px-3.5 text-base font-medium border border-white ">
                    Contactez moi
                   </div>
                </button>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full">
                  {STATS.map((stat, index) =>(
                    <div key={index} className="text-left border-r border-white/50 pr-10 last:border-r-0">
                      <div className="text-2xl font-normal text-primary mb-2 font-mono  ">
                        {stat.value}
                      </div>
                      <p className="text-white leading-snug">
                          {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>

            </div>
 
           {/* Letf column - contnent  */}
              <FadeIn delay={200}>
                 <div className="relative">
                   <div className="relative overflow-hidden rounded-2xl aspect-4/5 max-w-125 ml-auto group">
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <div className="absolute -inset-0.5 bg-linear-to-r from-ptimary/20 via-primary to-primary animate-spin-slow rounded-2xl"> </div>
                    </div>

                    {/* image container */}
                      <div className="relative rounded-2xl overflow-hidden n-[1px] h-[calc(100%-3px)]">
                         <img src="/images/My_picture.png" 
                           alt="Developer at work" 
                           className="w-full h-full object-cover"
                           />
                      </div>

                      {/* Techno Logo */}
                      <div className="absolute bottom-6 left-6 z-20">
                        <FadeIn delay={300}>
                          <div className="flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full py-2 px-6">

                            <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300 ">
                              <SiReact className='w-full h-full text-primary' />
                            </div>

                            <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300 ">
                              <SiNextdotjs className='w-full h-full text-primary' />
                            </div>

                            <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300 ">
                              <SiNodedotjs className='w-full h-full text-primary' />
                            </div>

                            <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300 ">
                              <SiTailwindcss className='w-full h-full text-primary' />
                            </div>

                             <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300 ">
                              <SiMongodb className='w-full h-full text-primary' />
                            </div>

                          </div>
                        </FadeIn>
                      </div>
                   </div>
                 </div>
              </FadeIn>

        </div>
      </div>

      {/* scroll indicator */}
      <button
      onClick={() => scrollToSection('about')}
      className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce "
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  )
}

export default Hero