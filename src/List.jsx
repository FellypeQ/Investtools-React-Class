import React from "react";
import { connect } from "react-redux";
import DuckProducts from "./DuckProducts";
import ListItem from "./ListItem";

const List = ({ productsList }) => {
  const inicialNewItem = { name: "", price: 0, quantity: 0 };
  const [newItem, setNewItem] = React.useState(inicialNewItem);

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
        {productsList.map((product, idx) => (
          <ListItem key={idx} product={product} idx={idx} />
        ))}
        <ListItem />
      </tbody>
    </table>
  );
};

const mapStateToProps = (state, ownProps) => ({
  productsList: state.products.list,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(List);
