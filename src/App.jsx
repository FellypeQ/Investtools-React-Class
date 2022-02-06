import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./List";

function App() {
  const [products, setProducts] = React.useState([
    { name: "Rubber Duck", price: 35, quantity: 0 },
    { name: "Beach Towel", price: 12.5, quantity: 0 },
  ]);
  const [total, setTotal] = React.useState(0);

  const manipulate = (type, index, value) => {
    let tmpProducts = [...products];

    switch (type) {
      case "quantity":
        tmpProducts[index].quantity = value;
        setProducts(tmpProducts);
        break;
      case "remove":
        tmpProducts.splice(index, 1);
        setProducts(tmpProducts);
        calcTotal(tmpProducts);
        break;
      case "add":
        tmpProducts.push(value);
        setProducts(tmpProducts);
        break;
      default:
        break;
    }
  };

  const calcTotal = (newList) => {
    if (newList) {
      setTotal(newList.reduce((acc, cv) => acc + cv.price * cv.quantity, 0));
    } else {
      setTotal(products.reduce((acc, cv) => acc + cv.price * cv.quantity, 0));
    }
  };

  return (
    <div className="App">
      <h1>My market list</h1>
      <List products={products} manipulate={manipulate} />
      <button onClick={() => calcTotal()}>Calculate prices</button>
      <h3>Total: ${total}</h3>
    </div>
  );
}

export default App;
