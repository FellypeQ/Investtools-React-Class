import React from "react";

const ListItem = ({ product, action, idx, manipulate }) => {
  const [newItem, setNewItem] = React.useState({
    name: "",
    price: 0,
    quantity: 0,
  });

  return (
    <tr>
      <td>
        {action !== "new" ? (
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
        {action !== "new" ? (
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
        {action !== "new" && (
          <input
            type="number"
            min={0}
            value={product.quantity}
            onChange={(evt) =>
              manipulate("quantity", idx, Number(evt.target.value))
            }
          />
        )}
      </td>
      <td>{action !== "new" && product.price * product.quantity}</td>
      {action !== "new" ? (
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
            setNewItem({ name: "", price: 0, quantity: 0 });
          }}
        >
          Create
        </button>
      )}
    </tr>
  );
};

export default ListItem;
