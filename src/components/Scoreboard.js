import { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  // incrementScore => callback prop.

  // maybe a useEffect

  const incrementScore = playerId => {
    // Use an argument to let this function know which player was clicked.
    // Obj: Increase the score + 1 of A player (the one that was clicked)
    // 1 hand: player array => all the players
    // 2nd hand: An id.

    const updatedPlayers = players.map(player => {
      if (player.id !== playerId) {
        return player;
      } else {
        return {
          id: player.id,
          name: player.name,
          score: player.score + 1,
        };
      }
    });
    // After getting new array with 1 updated player => set it to state so we can render it.
    set_players(updatedPlayers);
  };

  // Component body.
  // decide what css class to apply to an element depending on state
  // filtering
  // sort
  const sortedPlayers = [...players].sort((player1, player2) => {
    return player2.score - player1.score;
  });

  return (
    <div className='Scoreboard'>
      <p>Player's scores:</p>
      <ul>
        {sortedPlayers.map((player, i) => (
          <Player
            key={i}
            id={player.id}
            name={player.name}
            score={player.score}
            add1={incrementScore}
          />
        ))}
      </ul>
      <AddPlayerForm />
    </div>
  );
}
