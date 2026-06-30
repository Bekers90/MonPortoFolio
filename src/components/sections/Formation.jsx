import Timeline from "../ui/Timeline"
import FadeIn from "../animations/FadeIn"
import { GraduationCap } from "lucide-react"
import { formations } from "../../utils/constant"


const Formation = () => {



  return (
    <section id="projects" className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-1/3 right-1/2 w-96 h-96 bg-primary/50 opacity-40 blur-3xl rounded-full" />
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/60 opacity-50 blur-3xl rounded-full" />
            <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-primary/50 opacity-20 blur-3xl rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
            <FadeIn delay={0}>
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-2">
                        <GraduationCap className="w-4 h-4 text-primary" />
                        <span className="text-sm text-primary font-medium">My Formation</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
                        Featured Diplomes and Certificates
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        Showcasing my Formation and achievement
                    </p>
                </div>
            </FadeIn>
            <FadeIn delay={200}>
                <Timeline items={formations}/>
            </FadeIn>
             
        </div>
    </section>
  
  )
}

export default Formation