import NavBar from './components/layout/NavBar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import  Contact  from './components/sections/Contact'
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-clack ">
     <NavBar />

    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
    </main>
     <Footer />
    </div>
  )
}

export default App
