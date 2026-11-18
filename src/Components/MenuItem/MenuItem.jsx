import { Link } from "react-router";
import Card from "../Card/Card.jsx";
import "./MenuItem.css";

function slugify(text) {
  return text.toLowerCase().replaceAll(" ", "-");
}

export default function MenuItem({ id, name, price, image, badge, description }) {
  return (
    <Link to={`/details/${id}/${slugify(name)}`} className="card-link">
      <div className="menu-card">
        <Card>
          <div className="image-container">
            <img className="menu-image" src={image} alt={name} loading="lazy" />
            {badge ? <span className="badge">{badge}</span> : <span className="badge">Sold Out!</span>}
          </div>
          <div className="lower-wrapper">
            <div className="lower-container">
              <p className="menu-name">{name}</p>
              <span className="menu-price">₱{price}</span>
            </div>
            <p className="menu-description">{description}</p>
          </div>
        </Card>
      </div>
    </Link>
  );
}