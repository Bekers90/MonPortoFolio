import { services } from "../../utils/services"
import FadeIn from "../animations/FadeIn"
import * as Icons from "lucide-react"

const Services = () => {


  return (
    <section id="services" className="relative py-20 bg-black overflow-hidden">
       <div className="absolute inset-0 overflow-hidden"> 
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/50 opacity-20 blur-3xl rounded-full" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/60 opacity-20 blur-3xl rounded-full" />
            <div className="absolute top-1/4 left-1/2 w-96 h-96 -translate-y-1/2 -translate-x-1/2 bg-primary/50 opacity-20 blur-3xl rounded-full" />
       </div>

       <div 
       className="absolute inset-0 opacity-[0.03]"
       style={{
        backgroundImage:`
        linear-gradient(to right, white 1px, transparent 1px),
        linear-gradient(to bottom, white 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px'
       }}
       /> 

       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-2l">
                    <Icons.Wrench className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-medium"> Nous vous proposons ...</span>
                </div>
                <h2 className="text-4xl mx-auto lg:text-5xl font-normal max-w-2xl text-white mb-4">
                    Innovation et expertise pour vos projets numériques
                </h2>
                <p className="text-lg text-white/60 max-w-2xl mx-auto">
                   Des solutions complètes pour transformer vos idées en une expérience numérique exceptionnelle.
                </p>
            </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
                const IconComponent = Icons[service.icon] || Icons.Code2;

                return (
                    <FadeIn key={service.id} delay={100 + index * 100}>
                        <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-primary/30 transition-all duration-300 h-full">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>
                            </div>

                            <ul className="space-y-3">
                                {service.details.map((detail) => (
                                    <li key={detail} className="flex gap-3 text-sm text-white/60 leading-relaxed">
                                        <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-primary" />
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none" />
                        </div>
                    </FadeIn>
                );
            })}
        </div>
       </div>


    </section>
  )
}

export default Services