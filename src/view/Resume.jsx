import React, { useEffect } from "react";
import { connect } from "react-redux";
import DuckProducts from "../duck/DuckProducts";

const Resume = ({ productsList, productsTotal, addressObj, calcTotal }) => {
  useEffect(() => {
    calcTotal();
  }, []);

  return (
    <div>
      <h1>Resumo</h1>
      <h4>Quantidade de items</h4>
      <p>{productsList.reduce((acc, cv) => acc + cv.quantity, 0)}</p>
      <h4>Valor Total</h4>
      <p>{productsTotal}</p>
      <h4>Endereço completo</h4>
      <p>
        {addressObj.fullAddress}, {addressObj.number} - {addressObj.complement}
      </p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  productsList: state.products.list,
  productsTotal: state.products.total,
  addressObj: state.adress.obj,
});
const mapDispatchToProps = (dispatch) => ({
  calcTotal: () => dispatch(DuckProducts.creators.calcTotal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Resume);
