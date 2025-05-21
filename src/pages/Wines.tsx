import { useGetAllWinesQuery } from "../generated/graphql-types";
import Card from "../components/Card/Card";

function Wines() {
  const { loading, error, data } = useGetAllWinesQuery();

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading</p>;
  return (
    <>
      <h1>Découvrez tous nos vins</h1>
      {data?.getAllWines.map((wine) => (
        <Card wine={wine} />
      ))}
    </>
  );
}

export default Wines;
