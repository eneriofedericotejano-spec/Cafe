export default function OrderPanel({ order }) {
  return order.map((line) => (
    <div key={line.lineId}>
      <h2>{line.name}</h2>
      <span>Quantity: {line.quantity}</span>
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
