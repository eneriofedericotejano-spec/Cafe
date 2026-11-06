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
      <span>Total:{line.total}</span>

      <ul>
         <span>Add Ons</span>
        {line.addOns.map((addOn) => (
          <div>
            <li key={addOn.name}>{addOn.name}</li>
          </div>
        ))}
      </ul>
    </div>
  ));
}
