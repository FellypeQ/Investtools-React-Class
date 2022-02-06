import React from "react";
import ListItem from "./ListItem";

const List = ({ products, manipulate }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <td>Product Name</td>
          <td>Unit Price</td>
          <td>Quantity</td>
          <td>Subtotal</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {products.map((product, idx) => (
          <ListItem
            product={product}
            key={idx}
            idx={idx}
            manipulate={manipulate}
          />
        ))}
        <ListItem action={"new"} manipulate={manipulate} />
      </tbody>
    </table>
  );
};

export default List;
