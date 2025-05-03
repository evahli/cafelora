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

const response = await fetch('http://localhost:4000/api/drinks');
const json = await response.json();

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

navElement.addEventListener('click', () => {
  navElement.classList.add('nav-closed');
});

const orderButton = document.querySelectorAll('.drink__controls');
orderButton.forEach((button) => {
  button.addEventListener('submit', async () => {
    const drinkId = Number(button.dataset.id);
    const orderedDrink = json.data.find((item) => item.id === drinkId);
    console.log(orderedDrink);
    await fetch(`http://localhost:4000/api/drinks/${button.dataset.id}`, {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify([
        { op: 'replace', path: '/ordered', value: !orderedDrink.ordered },
      ]),
    });
    window.location.reload()
  });
});

/* 


*/
