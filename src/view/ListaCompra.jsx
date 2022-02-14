import React, { useState } from "react";
import { connect } from "react-redux";

import DuckProducts from "../duck/DuckProducts";

import { List } from "../cw-components/list";
import { useNavigate } from "react-router-dom";

const ListaCompra = ({ productsTotal, calcTotal }) => {
  const [showList, setShowList] = useState(true);
  const navigate = useNavigate();

  function continuePurchase() {
    navigate("/address");
  }

  return (
    <div>
      <h1>My market list</h1>
      <button
        onClick={() => {
          setShowList(!showList);
        }}
      >
        Some e aparece lista
      </button>
      {showList && <List />}
      <button onClick={() => calcTotal()}>Calculate prices</button>
      <h3>Total: ${productsTotal}</h3>
      <button onClick={continuePurchase}>Continuar compra</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  productsTotal: state.products.total,
});
const mapDispatchToProps = (dispatch) => ({
  calcTotal: (newList) => dispatch(DuckProducts.creators.calcTotal(newList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListaCompra);
