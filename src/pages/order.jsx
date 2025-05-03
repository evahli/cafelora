import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from './Components/Header/header';
import { Footer } from './Components/Footer/footer';
import { Order } from './Components/Order/order';

const response = await fetch(
  'http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image',
);
const json = await response.json();

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header showMenu={false} />

      <main className="order">
        <div className="container order__content">
          <h1>Vaše objedávnka</h1>

          {json.data.length === 0 ? (
            <p className="empty-order">Zatím nemáte nic objednáno</p>
          ) : (
            <Order items={json.data} />
          )}
        </div>
      </main>

      <Footer />
    </div>
  </div>,
);
