import coffeeMenu from "../../Data/MenuData.js";
import MenuItem from "../../Components/MenuItem/MenuItem.jsx";
import { Link } from "react-router";
import "./MenuList.css";
import { useState } from "react";

const categories = ["All", "Coffee", "Tea", "Pastry"];

export default function MenuList() {
  const [orderCount, setOrderCount] = useState(0);
  const [selected, setSelected] = useState("All");
  const [lastOrdered, setLastOrdered] = useState(null);

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

  function slugify(text) {
    return text.toLowerCase().replaceAll(" ", "-");
  }

  const filtered = selected === "All" ? coffeeMenu : coffeeMenu.filter((product) => product.category === selected);

  return (
    <>
      <section className="menu-container">
        {orderCount > 0 && <span className="order-counter">Total order: {orderCount}</span>}
        {lastOrdered && (
          <span>
            Last order: {lastOrdered.name} --- {lastOrdered.price} --- {lastOrdered.quantity}
          </span>
        )}

        <div className="fi-so-container">
          <div className="filter">
            {categories.map((category) => (
              <button
                key={category}
                className={category === selected ? "not-active active" : "not-active"}
                onClick={() => setSelected(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="sorting">
            <input className="search-input" type="text" placeholder="Search Beverages" />
          </div>
        </div>

        <div className="card-grid">
          {filtered.map((item) => (
            <Link key={item.id} to={`/details/${item.id}/${slugify(item.name)}`} className="card-link">
              <MenuItem
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                badge={item.badge}
                description={item.description}
                onLastOrder={handleLastOrdered}
              />
            </Link>
          ))}
        </div>

        <Link to="/order">Proceed to Order</Link>
      </section>
    </>
  );
}
