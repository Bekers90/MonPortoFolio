import {Code, Menu, X} from 'lucide-react'
import {NAV_LINKS, PERSONAL_INFO} from '../../utils/constant'
import {useState, useEffect} from 'react'
import {useScrollSpy, scrollToSection} from '../../hooks/useScrollSpy' 

const NavBar = () => {

   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);
   const activeSection = useScrollSpy(NAV_LINKS.map(link => link.href))

   useEffect( () => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   const handleNavClick = (sectionId) => {
       scrollToSection(sectionId);
      setIsMenuOpen(false);
   };

  return (
    <nav 
    className={`fixed top-0 left-0 right-0 w-full z-100 transition-all duration-300 py-4 ${isScrolled 
      ? 'bg-black/30 backdrop-blur-lg shadow-md' 
      : 'bg-transparent'}`}
      style={{transform: 'translate3d(0, 0, 0)'}}
      >
        <div className="max-w-[1320px] mx-auto px-5 ">
          <div className="flex items-center justify-between">
            {/* Logo or Brand Name */}
            <div className="flex items-center gap-4"  onClick={() => handleNavClick('home')} >
              <Code className='w-6 h-6 text-primary' />

                <button
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                className='text-2xl font-bold bg-gradient-to-r from-primary via-primary/50 to-primary/30 text-transparent bg-clip-text hover:opacity-80 transition-opacity'
                aria-label='home'
                >
                  {PERSONAL_INFO.name.split(' ')[0]}
                </button>
              </div>

                {/*Desktop Navigation Links */}
                <nav className='hidden md:flex items-center gap-7 '>
                  {NAV_LINKS.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={'text-base font-medium transition-all duration-300 ' + (activeSection === link.id 
                        ? 'text-white' 
                        : 'text-gray-400 hover:text-white')}
                      aria-label={link.label}
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>


                {/*CTA Button */}
                <div className='hidden md:flex items-center gap-2'>
                  <button
                  onClick={() => handleNavClick('contact')}
                  className='px-7 py-3.5 bg-white text-[#212121] font-medium text-base rounded-[17px] border border-white hover:bg-white/90 transition-all duration-300'
                  >
                     Hire Me
                  </button>
                </div>

                {/*Mobile Menu Icon */}
                <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='md:hidden text-white hover:text-white/80 transition-colors'
                aria-label='Toggle menu'
                aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
                </button>
            </div>
          </div>
       

       {/*Mobile Navigation Links */}
       <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen 
       ? 'max-h-120 opacity-100' 
       : 'max-h-0 opacity-0'}`}
       >
        <div className='bg-black/95 backdrop-blur-lg border-t border-white/10 py-6 px-5 space-y-2'>
           {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={'block w-full px-4 py-3 rounded-lg font-medium  text-left transition-all duration-300' + (activeSection === link.id
                ? 'bg-white text-white/10'
                : 'text-white/70 hover:text-white hover:bg-white/50')
              } 
              aria-label={link.label}
            >
              {link.label}
            </button>
          ))}

          <button
          onClick={() => handleNavClick('contact')}
          className='w-full px-7 py-3.5 mt-2 bg-white text-[#212121] font-medium text-base rounded-[17px] border border-white hover:bg-white/90 transition-all duration-300' 
          >
             Contact Me
          </button>
        </div>
       </div>
    </nav>
  )
}

export default NavBar