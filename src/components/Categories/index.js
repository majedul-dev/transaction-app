import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const categories = [
  "Cars",
  "Motorcycles",
  "Mobile Phones",
  "Scooters",
  "Commercial & Other Vehicles",
];

const Categories = () => {
  return (
    <div className="categories">
      <ul className="container categories__items">
        <li>
          <Link to="/">ALL CATEGORIES</Link>
        </li>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to="/">{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
