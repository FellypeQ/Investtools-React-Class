import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { serverPoke } from "../server";

const PokemonType = ({}) => {
  const navigate = useNavigate();
  const { pokemonId } = useParams();
  const [obj, setObj] = React.useState({ name: "" });

  React.useEffect(() => {
    console.log("\n pokemonId =>", pokemonId);

    serverPoke.withTimeout
      .get(`/type/${pokemonId}`)
      .then((resp) => {
        console.log("\n resp.data do get =>", resp.data);

        setObj(resp.data);
      })
      .catch((error) => {
        console.error("\n error do get =>", error);
      });
  }, []);

  const saveInfos = () => {
    console.log("\n novo obj =>", obj);

    serverPoke.withTimeout
      .put(`/type/${obj.id}`, obj)
      .then((resp) => {
        console.log("\n resp.data do put =>", resp.data);
        navigate("/pokemon");
      })
      .catch((error) => {
        console.error("\n error do put =>", error);
      });
  };

  return (
    <div>
      <h1>PokemonType</h1>
      <label>name</label>
      <input
        value={obj.name}
        onChange={(evt) => setObj({ ...obj, name: evt.target.value })}
      />
      <br />
      <button onClick={saveInfos}>Save informations</button>
    </div>
  );
};

export default PokemonType;
