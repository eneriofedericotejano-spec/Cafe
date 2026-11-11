import { useState } from "react";
import "./ItemDetails.css";
import addOnOptions from "../../Data/AddOns";

export default function ItemDetails({ item, onClose, onAddToOrder }) {
  const [quantity, setQuantity] = useState(1);
  const [sugarOptions, setSugarOptions] = useState("50%");
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const buttons = ["0%", "50%", "100%"];

  function handleDecrease() {
    if (quantity > 1) setQuantity((q) => q - 1);
  }

  function handleIncrease() {
    if (quantity < 100) {
      setQuantity((q) => q + 1);
    }
  }

  function handleToggleAddOn(name) {
    setSelectedAddOns((prev) => (prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]));
  }

  function handleConfirm() {
    const line = {
      lineId: crypto.randomUUID(),
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: quantity,
      sugar: sugarOptions,
      addOns: selectedOptions,
    };

    onAddToOrder(line);
    onClose();
  }

  const selectedOptions = addOnOptions.filter((option) => selectedAddOns.includes(option.name));

  const addOnsTotal = selectedOptions.reduce((sum, option) => sum + option.price, 0);

  const total = (item.price + addOnsTotal) * quantity;

  return (
    <>
      <section className="details-modal-overlay">
        <div className="box">
          <button className="close-button" onClick={onClose}>
            X
          </button>
          <div className="image-container">
            {item.image && <img src={item.image} alt={item.name} className="image" />}
          </div>
          <div className="details-container">
            <div className="upper-container">
              <h2 className="product-name">{item.name}</h2>
              <p className="product-price">₱{item.price.toFixed(2)}</p>
            </div>

            <div className="product-description">{item.description}</div>

            <div className="product-quantity">
              <div className="quantity-text-container">
                <p className="text quantity">Quantity</p>
                <p className="subtext quantity">Standard serving</p>
              </div>

              <div className="quantity-buttons">
                <button className="button decrease" onClick={handleDecrease}>
                  -
                </button>
                <span className="quantity-initial-value">{quantity}</span>
                <button className="button increase" onClick={handleIncrease}>
                  +
                </button>
              </div>
            </div>

            <div className="sugar-container">
              <div className="sugar-texts">
                <p className="sugar text">Sugar Level</p>
                <span className="subtext sugar">Select sweetness</span>
              </div>
              <div className="sugar-buttons-container">
                {buttons.map((button) => (
                  <button
                    key={button}
                    className={button === sugarOptions ? "sugar-button active" : "sugar-button"}
                    onClick={() => setSugarOptions(button)}
                  >
                    {button}
                  </button>
                ))}
              </div>
            </div>

            <div className="addons-container">
              <div className="addons-header">
                <p className="text addons-title">Add-ons</p>
                <span className="subtext addons-subtext">Optional</span>
              </div>

              <div className="addons-list">
                {addOnOptions.map((option) => (
                  <label className="addon-item" key={option.name}>
                    <input
                      type="checkbox"
                      checked={selectedAddOns.includes(option.name)}
                      onChange={() => handleToggleAddOn(option.name)}
                    />
                    <div className="addon-content">
                      <div className="addon-info">
                        <span className="addon-name">{option.name}</span>
                        <span className="addon-description">{option.description}</span>
                      </div>
                      <span className="addon-price">+₱{option.price}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <button className="addToOrder-btn" onClick={handleConfirm}>
              Add to Order • ₱{total.toFixed(2)}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
