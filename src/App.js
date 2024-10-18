import Menu from './components/menu';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/home';
import AboutMe from './components/about_me';
import Skills from './components/skills';
import Projects from './components/projects';
import Form from './components/form';
import FooterApp from './components/footer';


function App() {
  const main_color = "linear-gradient(90deg, rgba(217,187,68,1) 0%, rgba(211,167,106,1) 32%, rgba(145,175,144,1) 88%)";
  const second_color = "black";
  const [headerColor, setHeaderColor] = useState(main_color)


const listenScrollEvent = () => {
    window.scrollY > 900
      ? setHeaderColor(second_color)
      : setHeaderColor(main_color)
  }
// Similar to componentDidMount and componentDidUpdate:
useEffect(() => {
  window.addEventListener("scroll", listenScrollEvent)
})
  return <>
      <header className="header" style={{background: headerColor}}>
        <Menu/>
      </header>
      <main>
        <div className='container'>
          
          <section id="accueil" className="HomeContainer">
            <Home/>
          </section>
          <section id="a-propos" className="AboutContainer">
            <AboutMe/>
          </section>
        </div>
        <section className="SkillsContainer">
          <Skills/>
        </section>
        <section className='ProjectContainer' id="projets">
          <Projects/>
        </section>
        <section id="contact" className="FormContainer">
          <Form/>
        </section>
      </main>
      <FooterApp/>
    </>;
}

export default App;
