export default function OrderLine({ line, onRemoveOrder, onIncreaseQuantity, onDecreaseQuantity }) {
  const addOnsTotal = line.addOns.reduce((sum, addOn) => sum + addOn.price, 0);

  const totalPrice = (line.price + addOnsTotal) * line.quantity;

  return (
    <div>
      <h2>{line.name}</h2>
      <button onClick={() => onRemoveOrder(line.lineId)}>Remove</button>
      <div className="quantity-container">
        <button onClick={() => onDecreaseQuantity(line.lineId)}>-</button>
        <button onClick={() => onIncreaseQuantity(line.lineId)}>+</button>
        <span>Quantity: {line.quantity}</span>
      </div>
      <span>Sugar: {line.sugar}</span>

      <span>Total: {totalPrice}</span>

      <span>Add Ons</span>
      <ul>
        {line.addOns.map((addOn) => (
          <li key={addOn.name}>{addOn.name}</li>
        ))}
      </ul>
    </div>
  );
}
