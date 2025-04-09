import { useQuery } from "@apollo/client";
import "./App.css";
import { gql } from "@apollo/client";

// const request = {
//   query:
//     "query GetAllWines {\n  getAllWines {\n    id\n    name\n    region\n    fruit\n    grape_varieties\n  }\n}\n\n\n\n\n",
//   variables: {},
//   operationName: "GetAllWines",
// };

const GET_ALL_WINES = gql`
  query GetAllWines {
    getAllWines {
      fruit
      id
      name
      region
    }
  }
`;

type Wines = {
  getAllWines: {
    id: number;
    name: string;
    region: string;
    fruit: string;
  }[];
};
function App() {
  // const fetchAllWines = async () => {
  //   try {
  //     const result = await fetch("http://localhost:5500", {
  //       method: "POST",
  //       body: JSON.stringify(request),
  //     });
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchAllWines();
  // }, []);

  const { loading, error, data } = useQuery<Wines>(GET_ALL_WINES);
  console.log(data);

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading</p>;
  return (
    <>
      <h1>Hello Toto</h1>
      {data?.getAllWines.map((wine) => (
        <h2>{wine.name}</h2>
      ))}
    </>
  );
}

export default App;
