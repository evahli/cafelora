import './menu.css'
import { Drink } from '../Drink/drink'

const response = await fetch('http://localhost:4000/api/drinks');
const json = await response.json();

export const Menu = () => (
  <section id='menu' className="menu">
        <div className="container">
          <h2>Naše nabídka</h2>
          <p className="menu-intro">
            Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
          </p>
          <div className="drinks-list">
          {json.data.map((item) => (
            <Drink
              key = {item.id}
              id = {item.id}
              name = {item.name}
              image = {`http://localhost:4000${item.image}`}
              layers={item.layers}
              ordered={item.ordered}
             />
          ))}
          </div>

          <div className="order-detail">
            <a href="/order.html">Detail objednávky</a>
          </div>
        </div>
      </section>
)


/*

Komponentu Menu upravte tak, aby přijímala prop s názvem drinks. Skrz ni komponentě předejte stažený seznam nápojů a zobrazte uvnitř prvku drinks-list za využití komponenty Drink.

{links.data.map((link) => (
          <StoredLink
            key={link.id}
            id={link.id}
            url={link.url}
            nazev={link.nazev}
          />
        ))}

*/
