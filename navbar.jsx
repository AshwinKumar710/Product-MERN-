import React from 'react';
import { Link } from 'react-router-dom';
import Form from "./Form";
import View from "./View";

const navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Form">Add Product</Link></li>
      </ul>
    </nav>
  );
};

export default navbar;