import { gql } from "@apollo/client";

export const GET_ALL_WINES = gql`
  query GetAllWines {
    getAllWines {
      fruit
      id
      name
      region
      tanin
      fruit
    }
  }
`;
