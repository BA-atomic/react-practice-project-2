import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const menuData = [
  {
    id: 1,
    name: "Peppered Goat Meat",
    price: 9,
    rating: 5,
    description:
      "Tender pieces of goat meat simmered in a rich pepper sauce and finished with fresh onions and herbs.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500",
    isAvailable: true,
  },
  {
    id: 2,
    name: "Chicken Suya Platter",
    price: 11,
    rating: 5,
    description:
      "Charcoal-grilled chicken strips coated in our signature suya spice and served with sliced onions and tomatoes.",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500",
    isAvailable: true,
  },
  {
    id: 3,
    name: "Party Jollof Rice",
    price: 13,
    rating: 5,
    description:
      "Smoky Nigerian party jollof rice cooked in a rich tomato and pepper base, served with fried plantain and chicken.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500",
    isAvailable: true,
  },
  {
    id: 4,
    name: "Ofada Rice & Ayamase",
    price: 15,
    rating: 5,
    description:
      "Locally grown Ofada rice paired with spicy green pepper sauce, assorted meats, and boiled egg.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500",
    isAvailable: true,
  },
  {
    id: 5,
    name: "Coconut Curry Chicken",
    price: 16,
    rating: 4,
    description:
      "Grilled chicken simmered in a creamy coconut curry sauce with vegetables and aromatic spices.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
    isAvailable: false,
  },
  {
    id: 6,
    name: "Pounded Yam & Egusi",
    price: 14,
    rating: 5,
    description:
      "Smooth pounded yam served with rich egusi soup packed with leafy vegetables and assorted meats.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500",
    isAvailable: true,
  },
  {
    id: 7,
    name: "Crispy Plantain Fries",
    price: 6,
    rating: 4,
    description:
      "Golden slices of ripe plantain fried until crisp on the outside and soft and sweet inside.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
    isAvailable: true,
  },
  {
    id: 8,
    name: "Jollof Mac & Cheese",
    price: 8,
    rating: 4,
    description:
      "Creamy baked macaroni and cheese infused with a subtle smoky jollof spice blend.",
    image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=500",
    isAvailable: true,
  },
  {
    id: 9,
    name: "Fresh Mango Smoothie",
    price: 6,
    rating: 5,
    description:
      "A refreshing blend of ripe mangoes, Greek yogurt, and a touch of honey served chilled.",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=500",
    isAvailable: true,
  },
  {
    id: 10,
    name: "Ginger Pineapple Zobo",
    price: 5,
    rating: 5,
    description:
      "Chilled hibiscus drink infused with fresh ginger, pineapple, cloves, and a hint of citrus.",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500",
    isAvailable: true,
  },
  {
    id: 11,
    name: "Chapman Special",
    price: 6,
    rating: 5,
    description:
      "A classic Nigerian cocktail-style soft drink made with grenadine, citrus, bitters, and soda.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500",
    isAvailable: false,
  },
  {
    id: 12,
    name: "Warm Chin Chin Sundae",
    price: 7,
    rating: 4,
    description:
      "Crunchy Nigerian chin chin served warm with vanilla ice cream, caramel sauce, and roasted peanuts.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
    isAvailable: true,
  },
];

function App() {
  return (
    <div className="container">
      <Nav />
      <Hero />
      <FoodCart />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="navBar">
      <p className="logoName">
        <span className="savanna">Savanna</span> Kitchen
      </p>
      <div className="ctaNavBox">
        <button className="ctaNav">Home</button>
        <button className="ctaNav">Menu</button>
        <button className="ctaNav">Services</button>
        <button className="ctaNav">About Us</button>
      </div>
      <div className="ctaNavBtn">
        <button className="ctaBtn">Login</button>
        <button className="ctaBtn">Sign Up</button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div className="heroSection">
      <div className="hero">
        <div className="heroTexts">
          <h2>Fuel your day with high-energy flavor</h2>
          <p>
            Chef-crafted meals, bold spices, and fast delivery-engineered to
            satisfy your biggest cravings.
          </p>
          <div className="ctaBox">
            <button className="ctaBtnPrimary">Browse Menu</button>
            <button className="ctaBtnSecondary">Order Online</button>
          </div>
        </div>
        <div className="heroImg">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500"
            alt="Delicious food served at a restaurant"
          />
        </div>
      </div>
    </div>
  );
}

function FoodCart() {
  const foodObj = menuData;
  const length = foodObj.length;
  return (
    <div className="foodCart">
      <div className="foodCartTexts">
        <h2>
          Our <span className="regular">Regular</span> Menu
        </h2>
        <p className="regularText">
          These are our regular menus. You can order anything you like.
        </p>
      </div>
      <div className="foodCartMenu">
        {length > 0 ? (
          menuData.map((menu) => {
            return <FoodCard features={menu} key={menu.id} />;
          })
        ) : (
          <p>We're currently out of order, please come back later</p>
        )}
      </div>
    </div>
  );
}

function FoodCard({ features }) {
  const { name, price, rating, description, image, isAvailable } = features;
  return (
    <div className="foodCard">
      <div className="foodImageBox">
        <img className="foodImage" src={image} alt={name} />
      </div>
      <p className="foodName">{name}</p>
      <StarRating rating={rating} />
      <p className="foodDescription">{description}</p>
      <div className="foodCardCtaBox">
        <p className="price">Price: ${price}</p>
        <button className="buyBtn">Buy Now</button>
      </div>
    </div>
  );
}

function StarRating({ rating }) {
  const stars = Array.from({ length: rating });

  return (
    <div className="starRating">
      {stars.map((_, index) => {
        return (
          <span className="star" key={index}>
            ★
          </span>
        );
      })}
    </div>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p>Thanks for dining with us! We look forward to serving you again.</p>
      <p>© {currentYear} Savanna Kitchen. All rights reserved.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
