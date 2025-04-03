import { useState } from "react";
import BillDetails from "./components/BillDetails";
import ItemList from "./components/ItemList";
import TotalAmount from "./components/TotalAmount";
import { useEffect } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function App() {
  const [item, setItem] = useState([]);
  const [total, setTotal] = useState(0);
  // add item method
  function handleAddItem(item) {
    setItem((prev) => [...prev, item]);
  }
  //function delete Item
  function handleDelete(index) {
    const updatedItem = item.filter((_, idx) => idx != index);
    setItem(updatedItem);
  }

  //function to get total amount
  useEffect(() => {
    const calculatedTotal = item.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotal(calculatedTotal);
  }, [item]);

  // function to generate and download pdf

  function downloadPdf() {
    const doc = new jsPDF();

    // PDF Header
    doc.setFontSize(16);
    doc.text("Invoice", 14, 15);

    // Table Headers & Data
    const tableColumn = ["Item", "Quantity", "Price", "Sub Total"];
    const tableRows = item.map((data) => [
      data.item,
      data.quantity,
      `₹ ${data.price}`,
      `₹ ${data.price * data.quantity}`,
    ]);

    // Add table with border
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 25,
      styles: { lineWidth: 0.5, lineColor: [0, 0, 0] }, // Borders
    });

    // Get Last Table Y Position
    let finalY = doc.lastAutoTable.finalY || 40;

    // Move "Total Amount" to the Right Side
    const totalText = `Total Amount: ₹ ${total.toFixed(2)}`;
    const pageWidth = doc.internal.pageSize.width; // Get PDF width
    const textWidth = doc.getTextWidth(totalText); // Get text width
    const xPos = pageWidth - textWidth - 35; // Right-align the text with margin

    // Add Total Amount at the Bottom
    doc.setFontSize(14);
    doc.text(totalText, xPos, finalY + 10);

    // Save the PDF
    doc.save("invoice.pdf");
  }

  return (
    <>
      <div className="container">
        <h1 className="heading">Bill Invoice Generator</h1>
        <BillDetails onAddItem={handleAddItem} />
        <ItemList
          item={item}
          onDelete={handleDelete}
          downloadPdf={downloadPdf}
        />
        <TotalAmount total={total} />
      </div>
    </>
  );
}

export default App;
