import { gql } from "@apollo/client";

export const GET_ALL_WINES = gql`
  mutation Signup($password: String!, $email: String!) {
    signup(password: $password, email: $email) {
      id
    }
  }
`;
