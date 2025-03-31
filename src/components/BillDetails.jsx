import React from "react";
import { useState } from "react";

function BillDetails({onAddItem}) {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    if (!item.trim()) {
      setError("please enter some item")
      setTimeout(() => {
        setError("")
      }, 2000);
      return
    }
    const newItem = { item, price, quantity }
    onAddItem(newItem)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          label={"Item"}
          placeholder={"Enter item"}
          value={item}
          onchange={(e) => setItem(e.target.value)}
        />
        <Input
          type="number"
          label={"Price"}
          placeholder={"Enter item"}
          value={price}
          onchange={(e) => setPrice(Number(e.target.value))}
        />
        <Input
          type="number"
          label={"Quantity"}
          placeholder={"Enter item"}
          value={quantity}
          onchange={(e) => setQuantity(Number(e.target.value))}
        />
        <button className="add-btn">Add item</button>
        <p style={{color : "red"}}>{error}</p>
      </form>
    </div>
  );
}

export default BillDetails;

function Input({ label, className = "input", value, type="text", onchange, placeholder }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        className={className}
        value={value}
        onChange={onchange}
        placeholder={placeholder}
      />
    </div>
  );
}
