export default function Player(props) {
  const addToScore = () => {
    props.add1(props.id);
  };

  return (
    <li className='Player'>
      <p>
        {props.name} - {props.score}
      </p>
      <button onClick={addToScore}>+</button>
    </li>
  );
}
