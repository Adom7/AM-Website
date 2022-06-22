import './App.css';
import LandingPage from './components/Sections/Landing/LandingPage'
import AboutMe from './components/Sections/AboutMe/AboutMe';
import ContactMe from './components/Sections/ContactMe/ContactMe';

// ANCHOR  To hide all the error in the client side , use this !
import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js'
import ghost from 'figlet/importable-fonts/Ghost.js'

figlet.parseFont('Ghost', ghost);

figlet.text('Adlane . OM', {
  font: 'Ghost',
}, function (err, data) {
  console.log(data +
    `\nHi There you curious being .\nIf you want to change something and see how it's made, I suggest you to take a look to my github repo.\n` +
    `The Whole Landing page is available for free and easily changable. \nHave Fun :p\n \n`
    + `\nSalut les curieux . \nSi vous voulez changer quelque chose et comprendre comment le site à été conçu , je vous invite a jeter un oeil a mon repo github.\nLa Page y est accessible gratuitement et facilement modifiable. \nAmusez vous :p `);
});

function App() {
  return (
    <>
      <LandingPage />
      <AboutMe />
      <ContactMe />
    </>
  );
}

export default App;
