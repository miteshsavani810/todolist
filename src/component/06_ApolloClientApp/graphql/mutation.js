import { gql } from "@apollo/client";

export const addUserQuery = gql`
  mutation AddUser($name: String) {
    insert_users(objects: { name: $name }) {
      returning {
        name
        id
      }
    }
  }
`;
export const deleteUserQuery = gql`
  mutation DeleteUser($id: uuid) {
    delete_users(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;
