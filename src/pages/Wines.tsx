import { useGetAllWinesQuery } from "../generated/graphql-types";

function Wines() {
  const { loading, error, data } = useGetAllWinesQuery();

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading</p>;
  return (
    <>
      <h1>Découvrez tous nos vins</h1>
      {data?.getAllWines.map((wine) => (
        <>
          <h2>{wine.name}</h2>
          <p>{wine.tanin}</p>
        </>
      ))}
    </>
  );
}

export default Wines;
