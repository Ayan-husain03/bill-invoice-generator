import React from "react";

function ItemList({ item }) {
  return (
    <div>
      <h1>ItemList</h1>
      <table>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
        {item.map((item, index) => (
          <tr key={index}>
            <td>{item.item}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ItemList;
