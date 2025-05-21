type PropsCard = {
  wine: {
    name: string;
    tanin?: string;
  };
};

function Card({ wine }: PropsCard) {
  return (
    <>
      <h2>{wine.name}</h2>
      {wine.tanin ? <p>{wine.tanin}</p> : <p>Aucune info</p>}
    </>
  );
}

export default Card;
