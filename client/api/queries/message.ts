import { useQuery, gql, QueryResult } from '@apollo/client';
import { Message } from '@types';

const GET_MESSAGES = gql`
  query {
    messages {
      id
      content
      user
    }
  }
`;

interface MessageData {
  messages: Message[]
}

const getMessages = (): QueryResult<MessageData> => useQuery<MessageData>(GET_MESSAGES);

export default getMessages;
