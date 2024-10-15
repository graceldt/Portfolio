import Menu from './components/menu';
import './App.css';
import Home from './components/home';
import AboutMe from './components/about_me';
import Skills from './components/skills';
import Projects from './components/projects';
import Form from './components/form';
import FooterApp from './components/footer';


function App() {
  return <>
      <header className="header">
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
