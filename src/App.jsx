import { useState } from "react";
import BillDetails from "./components/BillDetails";
import ItemList from "./components/ItemList";
import TotalAmount from "./components/TotalAmount";
import { useEffect } from "react";

function App() {
  const [item, setItem] = useState([]);
  const [total, setTotal] = useState(0);
  // add item method
  function handleAddItem(item) {
    setItem((prev) => [...prev, item]);
  }
  //function delete Item
  function handleDelete(index) {
    const deleteItem = item.filter((_, idx) => idx != index);
    setItem(deleteItem);
  }

  //function to get total amount
  useEffect(() => {
    const calculatedTotal = item.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotal(calculatedTotal);
  }, [item]);

  return (
    <>
      <div className="container">
        <h1 className="heading">Bill Invoice Generator</h1>
        <BillDetails onAddItem={handleAddItem} />
        <ItemList item={item} onDelete={handleDelete} />
        <TotalAmount total={total} />
      </div>
    </>
  );
}

export default App;
