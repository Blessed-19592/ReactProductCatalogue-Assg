import { useState } from "react";
import ProductCard from "./ProductCard";
import './App.css';
function App() {
  const [firstName, setFirstName] = useState("Laptop Sleeve");

  return (
    <div>
      <h1>Campus Shop Product Catalogue</h1>
      <ProductCard name={firstName} price="1,500" />
      <ProductCard name="USB Flash Drive" price="900" />

      <h3>Edit First Product Name</h3>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
    </div>
  );
}

export default App;