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
                    <Layer
                      color = {item.color}
                      label={item.label}
                     />
                  ))}
      </div>
    </div>
    <form className="drink__controls">
      <input type="hidden" className="order-id" value="1" />
      <button className="order-btn">Objednat</button>
    </form>
  </div>
);

/*
{json.data.map((item) => (
            <Drink
              key = {item.id}
              name = {item.name}
              image = {`http://localhost:4000${item.image}`}
             />
          ))}

          
          */
