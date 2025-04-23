import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation Signup($data: UsersInput!) {
    signup(data: $data)
  }
`;
