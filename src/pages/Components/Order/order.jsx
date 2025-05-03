import { OrderItem } from "../OrderItem/OrderItem"

export const Order = ({items}) => (
  <div className="order__items">
  {items.map((item) => <OrderItem name = {item.name} image={`http://localhost:4000${item.image}`} />)}</div>
)
