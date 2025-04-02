import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

function ItemList({ item, onDelete }) {
 
  return (
    <div>
      <h1>ItemList</h1>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Sub total</th>
            <th>update</th>
          </tr>
        </thead>
        <tbody>
          {item.map((item, index) => (
            <tr key={index}>
              <td>{item.item}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.quantity * item.price}</td>
              <td className="buttons">
                <button className="edit">
                  <MdEdit />
                </button>
                <button className="del" onClick={() => onDelete(index)}>
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemList;
