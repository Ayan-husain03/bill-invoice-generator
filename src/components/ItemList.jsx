import React from "react";
import { MdDelete, MdDownload, MdEdit } from "react-icons/md";

function ItemList({ item, onDelete, downloadPdf }) {
  return (
    <div>
      <div className="item-header">
        <h1>ItemList</h1>
        <button className="download-btn" onClick={downloadPdf}>
          {" "}
          Download pdf <MdDownload />
        </button>
      </div>
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
              <td>₹ {item.quantity * item.price}</td>
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
