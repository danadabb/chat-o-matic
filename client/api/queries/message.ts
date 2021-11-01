import { useQuery, gql } from "@apollo/client";

const GET_MESSAGES = gql`
  query {
    messages {
      id
      content
      user
    }
  }
`;

const getMessages = () => useQuery(GET_MESSAGES)

export default getMessages