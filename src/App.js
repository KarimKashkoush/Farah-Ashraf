import Header from './components/hedaer/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills.jsx';
// import Services from './components/services/Services.jsx';
import Portfolio from './components/portfolio/Portfolio';
import Qualification from "./components/qualification/Qualification.jsx";
// import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import './App.css';


function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        {/* <Services /> */}
        <Portfolio />
        <Qualification />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
