import { Link } from "react-router";
import OrderLine from "../../Components/OrderLine/OrderLine.jsx";

export default function OrderPanel({ order, onRemoveOrder, onIncreaseQuantity, onDecreaseQuantity }) {
  
  return (
    <>
      {order.length === 0 ? (
        <p>No orders yet!</p>
      ) : (
        order.map((line) => (
          <OrderLine
            key={line.lineId}
            line={line}
            onRemoveOrder={onRemoveOrder}
            onDecreaseQuantity={onDecreaseQuantity}
            onIncreaseQuantity={onIncreaseQuantity}
          />
        ))
      )}

      <Link to="/menu">Choose More</Link>
    </>
  );
}
