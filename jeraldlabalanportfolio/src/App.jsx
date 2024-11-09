import './App.css';
import Home from './sections/Home/Home';
import Projects from '/src/sections/Projects/Projects';
import Skills from '/src/sections/Skills/Skills';
import Contact from '/src/sections/Contact/Contact';
import Footer from '/src/sections/Footer/Footer';
import Header from './sections/Header/Header';
import About from './sections/About/About';
import Qualification from './sections/Qualification/Qualification';
import ScrollDown from './sections/Home/ScrollDown';
import ScrollUp from './sections/ScrollUp/ScrollUp';


function App() {
  return (
  <>
    <Header />

    <main className='main'>
    <Home />
    <About />
    <ScrollDown />
    <Skills />
    <Qualification />
    <Contact />
    <Projects />
    {/*<Projects />*/}
    </main>
    <Footer />
    <ScrollUp />
  </>);
}

export default App
