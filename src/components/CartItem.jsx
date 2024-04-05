import { currencyFormatter } from '../util/formatting.js';

export default function CartItem({
  name,
  quantity,
  price,
  id,
  onDecrease,
  onIncrease,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)} - {id}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}
