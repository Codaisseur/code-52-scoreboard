import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Details = () => {
  const params = useParams();
  const [pokeDetails, setPokeDetails] = useState(null);

  console.log("what are params?", params);

  const fetchPokeById = async () => {
    try {
      const response = await axios.get(
        `https://app.pokemon-api.xyz/pokemon/${params.pokemonId}`
      );

      console.log("did I get details?", response);
      setPokeDetails(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    fetchPokeById();
  }, []);

  return (
    <div>
      <h2>Details</h2>

      {!pokeDetails ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h4>{pokeDetails.name.english}</h4>
          <img src={pokeDetails.thumbnail} alt={"poke"} />
        </div>
      )}
    </div>
  );
};

export default Details;
