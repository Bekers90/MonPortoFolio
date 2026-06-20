import NavBar from './components/layout/NavBar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';

function App() {
  return (
    <div className="min-h-screen bg-clack pb-[100vh]">
     <NavBar />

    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>

    </div>
  )
}

export default App
