export default function OrderPanel({ order, onRemoveOrder, onIncreaseQuantity, onDecreaseQuantity }) {



  return order.map((line) => (
    <div key={line.lineId}>
      <h2>{line.name}</h2>
      <button onClick={() => {onRemoveOrder(line.lineId)}}>Remove</button>
      <div className="quantity-container">
       <button onClick={() => {onDecreaseQuantity(line.lineId)}}>-</button>
      <button onClick={() => {onIncreaseQuantity(line.lineId)}}>+</button>
      <span>Quantity: {line.quantity}</span>
      </div>
      <span>Sugar: {line.sugar}</span>
      <span>Total: {line.total}</span>

      <span>Add Ons</span>
      <ul>
        {line.addOns.map((addOn) => (
          <li key={addOn.name}>{addOn.name}</li>
        ))}
      </ul>
    </div>
  ));
}
