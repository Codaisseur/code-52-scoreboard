import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  // We create a state were we will later store our fetched data
  // Once we set the data we use this state to render the data.
  const [pokemons, setPoke] = useState([]);

  const fetchPokemons = async () => {
    try {
      const response = await axios.get(
        "https://app.pokemon-api.xyz/pokemon/all"
      );
      console.log("reponse from request", response);
      setPoke(response.data.slice(0, 10));
    } catch (e) {
      console.log(e.message);
    }
  };

  // Only fires once (unless we put something in the dependency array at the end)
  // It fires after the component mounted.
  useEffect(() => {
    console.log("hey im being called");
    fetchPokemons();
  }, []);

  console.log("im rendering!", pokemons);

  return (
    <div>
      <h2>Hellooooooo</h2>
      <div>
        <p>Today we will recap all of react</p>
        <div>
          {pokemons.map(poke => (
            // This should be a separate component called PokemonCard
            // which takes the data as props
            <div style={{ border: "1px white solid" }}>
              <img src={poke.thumbnail} alt={"poke"} />
              <h3>{poke.name.english}</h3>
            </div>
          ))}
        </div>
        {/* <div>{pokemonList.map(() => {})}</div> */}
      </div>
    </div>
  );
};

export default Home;
