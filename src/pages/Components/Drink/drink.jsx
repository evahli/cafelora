import './drink.css';
import { Layer } from '../Layer/layer';

export const Drink = ({ id, name, ordered, image, layers }) => (
  <div className="drink">
    <div className="drink__product">
      <div className="drink__cup">
        <img src={image} />
      </div>
      <div className="drink__info">
        <h3>{name}</h3>
        {layers.map((item) => (
          <Layer color={item.color} label={item.label} />
        ))}
      </div>
    </div>
    <form data-id={id} className="drink__controls">
      <input type="hidden" className="order-id" value="1" />
      <button
        className={ordered ? 'order-btn order-btn--ordered' : 'order-btn'}
      >
        {ordered ? 'Zrusit' : 'Objednat'}
      </button>
    </form>
  </div>
);

/*
order-btn

Na objednávací tlačítko také přidejte třídu .order-btn--ordered v případě, že nápoj je objednaný.

          */
