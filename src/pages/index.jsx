import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './Components/Footer/footer';
import { Footer } from './Components/Footer/footer';
import { Contact } from './Components/Contact/contact';
import { Gallery } from './Components/Gallery/gallery';
import { Menu } from './Components/Menu/menu';
import { Banner } from './Components/Banner/banner';
import { Header } from './Components/Header/header';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

const navButton = document.querySelector('.nav-btn');
const navElement = document.querySelector('.rollout-nav');
navButton.addEventListener('click', () => {
  navElement.classList.toggle('nav-closed');
});

navElement.addEventListener('click', (event) => {
  console.log(event.target);
  navElement.classList.add('nav-closed');
});


/* 


*/
