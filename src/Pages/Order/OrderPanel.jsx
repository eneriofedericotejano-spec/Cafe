import { Link } from "react-router";
import OrderLine from "../../Components/OrderLine/OrderLine.jsx";

export default function OrderPanel({ order, onRemoveOrder, onIncreaseQuantity, onDecreaseQuantity }) {
  return (
    <>
      {order.length === 0 ? (
        <p>No order Yet!</p>
      ) : (
        order.map((line) => (
          <OrderLine
            key={line.lineId}
            line={line}
            onRemoveOrder={onRemoveOrder}
            onIncreaseQuantity={onIncreaseQuantity}
            onDecreaseQuantity={onDecreaseQuantity}
          />
        ))
      )}

      <Link to="/menu">Choose More</Link>
    </>
  );
}

//1. Ipasa rito ang order, onRemoveOrder, onIncreaseQuantity, at onDecreaseQuantity bilang props sa OrderPanel component.
//2. Icheck muna if may laman ang order, if wala idisplay no order yet.
//3. If meron i map ang order, at ipasa sa OrderLine ang mga functions na andito sa OrderPanel para magamit niya, pati na rin ang object na id-display niya.
//4. Gawan ng link na Choose More na babalik sa menu
