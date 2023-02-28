import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      user_email
      user_name
      user_phone
      updated_at
    }
  }
`;
