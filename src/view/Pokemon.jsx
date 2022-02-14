import React, { useEffect } from "react";
import axios from "axios";

import { serverPoke } from "../server";
import { useParams } from "react-router-dom";

const Pokemon = ({}) => {
  const [quantity, setQuantity] = React.useState(0);
  const [list, setList] = React.useState([]);

  useEffect(() => {
    async function getPokeType() {
      try {
        const resp = await axios.get("https://pokeapi.co/api/v2/type");
        console.log("\n try =>", resp.data);
        setQuantity(resp.data.count);
      } catch (error) {
        console.warn("\n error catch", error);
      }
    }
    /*getPokeType();*/

    serverPoke.withTimeout
      .get("/type")
      .then((resp) => {
        console.log("\n promisse =>", resp.data);
        setQuantity(resp.data.count);
        setList(resp.data.results);
      })
      .catch((error) => {
        console.warn("\n error promisse=>", error);
      });

    //C axios.post()//1º é a url, 2º conteúdo para modificar o banco, 3º configs {headers:{}, params:{}}.
    //R axios.get()//1º é a url, 2º configs {headers:{}, params:{}}.
    //U axios.put()//1º é a url, 2º conteúdo para modificar o banco, 3º configs {headers:{}, params:{}}.
    //D axios.delete()//1º é a url, 2º configs {headers:{}, params:{}}.
  }, []);

  return (
    <div>
      <h1>Pokemon</h1>
      <h5>Quantidade</h5>
      <p>{quantity}</p>
      <h5>Items</h5>
      {list.length === 0 && <p>sem items para listar</p>}
      {list.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <a href={item.url}>{item.name}</a>
          <br />
          <a href={`/pokemon/${index + 1}`}>
            {item.name} para rota React id:{index}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Pokemon;
