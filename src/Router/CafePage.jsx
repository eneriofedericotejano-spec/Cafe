import MenuList from "../Pages/MenuList/MenuList.jsx";
import OrderPanel from "../Pages/Order/OrderPanel.jsx";
import { Routes, Route, Navigate } from "react-router";
import { useState } from "react";

export default function CafePage() {
  const [order, setOrder] = useState([]);

  // Dinadagdagan ng 1 ang quantity ng isang line.
  // Ipinapasa sa OrderPanel bilang onIncreaseQuantity (+ button).
  function handleIncreaseQuantity(id) {
    setOrder((prev) => prev.map((line) => (line.lineId === id ? { ...line, quantity: line.quantity + 1 } : line)));
  }

  // Binabawasan ng 1 ang quantity (hindi bababa sa 1).
  // Ipinapasa sa OrderPanel bilang onDecreaseQuantity (- button).
  function handleDecreaseQuantity(id) {
    setOrder((prev) =>
      prev.map((line) => (line.lineId === id ? { ...line, quantity: Math.max(1, line.quantity - 1) } : line)),
    );
  }

  // Tinatanggal ang isang line sa order.
  // Ipinapasa sa OrderPanel bilang onRemoveOrder (Remove button).
  function handleRemoveOrder(id) {
    setOrder((prev) => prev.filter((line) => line.lineId !== id));
  }

  // Gumagawa ng susi mula sa mga add-ons para maikumpara ang dalawang listahan.
  // Ginagamit lang sa loob ng handleAddToOrder.
  function getAddOnKey(addOns) {
    return addOns
      .map((addOn) => addOn.id)
      .sort()
      .join();
  }

  // Nagdadagdag ng line sa order, o pinag-merge kung pareho ang item, sugar, at add-ons.
  // Ipinapasa sa MenuList bilang onAddToOrder, tapos sa ItemDetails (Confirm button).
  function handleAddToOrder(line) {
    setOrder((prev) => {
      const match = prev.find(
        (existing) =>
          existing.id === line.id &&
          existing.sugar === line.sugar &&
          getAddOnKey(existing.addOns) === getAddOnKey(line.addOns),
      );

      if (match) {
        return prev.map((existing) =>
          existing.lineId === match.lineId ? { ...existing, quantity: existing.quantity + line.quantity } : existing,
        );
      }

      return [...prev, line];
    });
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/menu" replace />} />
      <Route path="/menu" element={<MenuList onAddToOrder={handleAddToOrder} />} />
      <Route
        path="/order"
        element={
          <OrderPanel
            order={order}
            onRemoveOrder={handleRemoveOrder}
            onIncreaseQuantity={handleIncreaseQuantity}
            onDecreaseQuantity={handleDecreaseQuantity}
          />
        }
      />
    </Routes>
  );
}