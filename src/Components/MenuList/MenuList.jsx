import coffeeMenu from "../../Data/MenuData.js";
import MenuItem from "../MenuItem/MenuItem.jsx";
import ItemDetails from "../Modal/ItemDetails.jsx";
import OrderPanel from "../Order/OrderPanel.jsx";
import "./MenuList.css";
import { useState } from "react";

const categories = ["All", "Coffee", "Tea", "Pastry"];

export default function MenuList() {
  const [orderCount, setOrderCount] = useState(0);
  const [selected, setSelected] = useState("All");
  const [lastOrdered, setLastOrdered] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [order, setOrder] = useState([]);

  function handleIncreaseQuantity(id) {
    setOrder((prev) =>
      prev.map((line) =>
        line.lineId === id ? { ...line, quantity: line.quantity + 1 } : line,
      ),
    );
  }

  function handleDecreaseQuantity(id) {
    setOrder((prev) =>
      prev.map((line) =>
        line.lineId === id
          ? { ...line, quantity: Math.max(1, line.quantity - 1) }
          : line,
      ),
    );
  }

  function handleRemoveOrder(id) {
    setOrder((prev) => prev.filter((line) => line.lineId !== id));
  }

  function handleAddToOrder(line) {
    setOrder((prev) => {
      const match = prev.find(
        (existing) => existing.id === line.id && existing.sugar === line.sugar,
      );

      if (match) {
        return prev.map((existing) =>
          existing.lineId === match.lineId
            ? { ...existing, quantity: existing.quantity + line.quantity }
            : existing,
        );
      }

      return [...prev, line];
    });
  } 

  function handleAddOrder(name) {
    alert(`You added ${name} to your order`);
    setOrderCount((o) => o + 1);
  }

  function handleLastOrdered(id, name, price, quantity) {
    setLastOrdered({
      id: id,
      name: name,
      price: price,
      quantity: quantity,
    });
  }

  function handleOpenDetails(id) {
    console.log("open", id);
    setSelectedId(id);
  }

  function handleCloseDetails() {
    setSelectedId(null);
  }

  const selectedItem = coffeeMenu.find((product) => product.id === selectedId);

  const filtered =
    selected === "All"
      ? coffeeMenu
      : coffeeMenu.filter((product) => product.category === selected);

  return (
    <>
      <section className="menu-container">
        {orderCount > 0 && (
          <span className="order-counter">Total order: {orderCount}</span>
        )}
        {lastOrdered && (
          <span>
            Last order: {lastOrdered.name} --- {lastOrdered.price} ---{" "}
            {lastOrdered.quantity}
          </span>
        )}

        <div className="fi-so-container">
          <div className="filter">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  category === selected ? "not-active active" : "not-active"
                }
                onClick={() => setSelected(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="sorting">
            <input
              className="search-input"
              type="text"
              placeholder="Search Beverages"
            />
          </div>
        </div>

        <div className="card-grid">
          {filtered.map((item) => (
            <MenuItem
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              badge={item.badge}
              onAddToOrder={handleAddOrder}
              onLastOrder={handleLastOrdered}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>

        {selectedItem && (
          <ItemDetails
            item={selectedItem}
            onAddToOrder={handleAddToOrder}
            onClose={handleCloseDetails}
          />
        )}

        <OrderPanel
          order={order}
          onRemoveOrder={handleRemoveOrder}
          onIncreaseQuantity={handleIncreaseQuantity}
          onDecreaseQuantity={handleDecreaseQuantity}
        />
      </section>
    </>
  );
}
