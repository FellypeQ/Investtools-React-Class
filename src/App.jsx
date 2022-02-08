import React from "react";
import { connect } from "react-redux";
import "./App.css";
import List from "./List";

import DuckProducts from "./DuckProducts";

const App = ({ productsTotal, calcTotal }) => {
  return (
    <div className="App">
      <h1>My market list</h1>
      <List />
      <button onClick={() => calcTotal()}>Calculate prices</button>
      <h3>Total: ${productsTotal}</h3>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  productsTotal: state.products.total,
});
const mapDispatchToProps = (dispatch) => ({
  calcTotal: (newList) => dispatch(DuckProducts.creators.calcTotal(newList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
