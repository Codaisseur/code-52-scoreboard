import { useState } from "react";

const AddPlayerForm = props => {
  const [storedName, setName] = useState("");

  const createAPlayer = event => {
    event.preventDefault(); // to prevent the form from refreshing the page.
    // call the callback function.
    props.addAPlayer(storedName);
  };

  return (
    <div>
      <form onSubmit={createAPlayer}>
        <label>Name:</label>
        <input
          type='text'
          value={storedName}
          onChange={event => setName(event.target.value)}
        />
        <button type='submit'>Create player</button>
      </form>
    </div>
  );
};

export default AddPlayerForm;
