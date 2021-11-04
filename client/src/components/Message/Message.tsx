import styled from 'styled-components';

type Props = {
  sameUser: boolean;
};

const Message = styled.div<Props>`
  background: ${(props) => (props.sameUser ? 'DARKCYAN' : 'LIGHTGREY')};
  color:  ${(props) => (props.sameUser ? 'WHITE' : 'BLACK')};;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 20px;
  font-family: Arial, sans-serif;
`;

export default Message;
