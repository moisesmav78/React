const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <h3>{character.name}</h3>
      <p>Status: {character.status}</p>
      <img src={character.image} alt={character.name} />
    </div>
  );
};

export default CharacterCard;
