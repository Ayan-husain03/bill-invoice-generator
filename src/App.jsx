import { useState } from "react";
import BillDetails from "./components/BillDetails";
import ItemList from "./components/ItemList";
import TotalAmount from "./components/TotalAmount";

function App() {
  const [item, setItem] = useState([])
  // add item method
  function handleAddItem(item) {
    setItem(prev => [...prev, item])
  }
  return (
    <>
      <div className="container">
        <BillDetails onAddItem={handleAddItem} />
        <ItemList item={item} />
        <TotalAmount />
      </div>
    </>
  );
}

export default App;
