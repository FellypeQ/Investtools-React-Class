import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Input } from "../components";
import DuckAddress from "../duck/DuckAddress";

const Address = ({ addressObj, update }) => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    switch (event.target.name) {
      case "number":
        update({ [event.target.name]: Number(event.target.value) });
        break;
      default:
        update({ [event.target.name]: event.target.value });
        break;
    }
  };

  function resumePurchase() {
    navigate("/resume");
  }

  return (
    <div>
      <h1>Endereço</h1>
      <label>Endereço</label>
      <br />
      <Input
        type={"text"}
        name="fullAddress"
        value={addressObj.fullAddress}
        onChange={handleChange}
      />
      <br />
      <label>Número</label>
      <br />
      <Input
        type={"number"}
        name="number"
        value={addressObj.number}
        onChange={handleChange}
      />
      <br />
      <label>Complemento</label>
      <br />
      <Input
        type={"text"}
        name="complement"
        value={addressObj.complement}
        onChange={handleChange}
      />
      <br />
      <button onClick={resumePurchase}>Resumo compra</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  addressObj: state.adress.obj,
});
const mapDispatchToProps = (dispatch) => ({
  update: (field) => dispatch(DuckAddress.creators.update(field)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);
