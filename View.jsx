import React from "react";

const View = ({ data }) => (
  <ul style={{ listStyleType: "none", padding: 0 }}>
    {data.map((item) => (
      <li
        key={item.id}
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #ccc",
          margin: "10px 0",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{ width: "50px", marginRight: "20px" }}
        />
        <div>
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
          <p>Category: {item.category}</p>
        </div>
      </li>
    ))}
  </ul>
);

export default View;