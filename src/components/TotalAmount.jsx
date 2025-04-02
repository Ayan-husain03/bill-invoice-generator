import React from "react";

function TotalAmount({ total }) {
  return (
    <div className="totalAmount">
      <span>TotalAmount  </span>
      <span> ₹ {total.toFixed(2)}</span>
    </div>
  );
}

export default TotalAmount;
