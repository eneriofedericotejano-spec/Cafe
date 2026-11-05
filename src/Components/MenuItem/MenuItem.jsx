import Card from "../Card/Card.jsx";
import "./MenuItem.css";

export default function MenuItem({ id, name, price, image, badge, onAddToOrder, onLastOrder, onOpenDetails}) {
  return (
    <div className="menu-card" onClick={() => onOpenDetails(id)}>
      <Card>
        <div className="image-container">
          <img className="menu-image" src={image} alt={name} loading="lazy" />
          {badge ? (
            <span className="badge">{badge}</span>
          ) : (
            <span className="badge">Sold Out!</span>
          )}
        </div>
        <div className="lower-wrapper">
          <div className="lower-container">
            <p className="menu-name">{name}</p>
            <span className="menu-price">₱{price}</span>
          </div>
          <button className="add-to-order-btn" onClick={
            (e) => {
              e.stopPropagation();
              onAddToOrder(name);
              onLastOrder(id, name, price, 1);
            } 
            }>
            Add to Order
          </button>

        </div>
      </Card>
    </div>
  );
}
