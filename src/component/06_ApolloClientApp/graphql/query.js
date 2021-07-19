import { gql } from "@apollo/client";

export const getUserQuery = gql`
  query Users {
    users {
      id
      name
    }
  }
`;
