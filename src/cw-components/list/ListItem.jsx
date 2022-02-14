import React from "react";
import { connect } from "react-redux";
import DuckProducts from "../../duck/DuckProducts";

const ListItem = ({ product, idx, manipulate }) => {
  const inicialNewItem = { name: "", price: 0, quantity: 0 };
  const [newItem, setNewItem] = React.useState(inicialNewItem);

  return (
    <tr>
      <td>
        {product ? (
          product.name
        ) : (
          <input
            type={"text"}
            value={newItem.name}
            onChange={(evt) =>
              setNewItem({ ...newItem, name: evt.target.value })
            }
          />
        )}
      </td>
      <td>
        {product ? (
          product.price
        ) : (
          <input
            type={"number"}
            min={0}
            value={newItem.price}
            onChange={(evt) =>
              setNewItem({ ...newItem, price: Number(evt.target.value) })
            }
          />
        )}
      </td>
      <td>
        {product && (
          <input
            type="number"
            min={0}
            value={product.quantity}
            onChange={(evt) => {
              manipulate("quantity", idx, Number(evt.target.value));
            }}
          />
        )}
      </td>
      <td>{product && product.price * product.quantity}</td>
      {product ? (
        <button
          className="btn-remove"
          onClick={() => manipulate("remove", idx)}
        >
          Remove
        </button>
      ) : (
        <button
          onClick={() => {
            manipulate("add", "new", newItem);
            setNewItem(inicialNewItem);
          }}
        >
          Create
        </button>
      )}
    </tr>
  );
};

const mapStateToProps = (state, ownProps) => ({
  product: ownProps.product,
  idx: ownProps.idx,
});
const mapDispatchToProps = (dispatch) => ({
  manipulate: (type, index, value) =>
    dispatch(DuckProducts.creators.manipulate(type, index, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
