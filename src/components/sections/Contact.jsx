import { MessageSquare, Send } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import { useState } from "react"
import { SiGithub, SiLinkedin, SiTwitter} from "react-icons/si";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email : '',
        message: ''
    });
    const [status, setStatut] = useState({type:'', message:''})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!formData.name || !formData.email || !formData.message) {
            setStatut({type: 'error', message: 'SVP Remplissez tous les champs'})
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(formData.email)){
          setStatut({type: 'error', message: 'Entrer un email valide'})
            return;
        }

        setStatut({type: 'success', message: 'Message envoyé avec succès, Nous vous revenons le plutôt possible'})
            setFormData({name: '',email : '', message: ''});

            setTimeout(() => setStatut({type: '', message: ''}), 5000)
    };

    const socialIcons = {
        github: SiGithub,
        linkedin: SiLinkedin,
        twitter: SiTwitter,
    };


  return (
    <section id="contact" className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/50 opacity-20 blur-3xl rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/60 opacity-20 blur-3xl rounded-full" />
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/50 opacity-20 blur-3xl rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
            <FadeIn delay={0}>
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-2">
                        <MessageSquare className="w-4 h-4 text-primary" />
                        <span className="text-sm text-primary font-medium">Get in Touch</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
                       Travillons Ensemble
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        Tu as un project dans ta tête, Viens on discute et on voit comment le réaliser
                    </p>
                </div>
            </FadeIn>

            <div className="">
                <FadeIn delay={100}>
                    <div className="">
                        <form onSubmit={handleSubmit} className="">
                            <div>
                                <label htmlFor="name" className="">
                                    Name
                                </label>
                                <input 
                                    type="text" 
                                    id= 'name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className=""
                                    placeholder="Votre nom"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="">
                                    Email
                                </label>
                                <input 
                                    type="email" 
                                    id= 'email'
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className=""
                                    placeholder="Your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="Message" className="">
                                    Message
                                </label>
                                <textarea  
                                    id= 'message'
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className=""
                                    placeholder="Parlez moi de votre project ...."
                                />
                            </div>

                            <button
                             type="submit"
                             className=""
                            >
                                <span className=" ">Send Message</span>
                                <Send className=""/>
                            </button>

                            {status.message && (
                                <div
                                 className={`p-4 rounded-xl ${status.type === 'success'
                                    ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                                 }`}
                                >
                                    {status.message}
                                </div>
                            )}
                        </form>
                    </div>
                </FadeIn>
            </div>
         </div>
    </section>
  )
}

export default Contact