import styled from 'styled-components';

type Props = {
  sameUser: boolean;
};

const Message = styled.div<Props>`
  background: ${(props) => (props.sameUser ? 'DARKCYAN' : 'GREY')};
  color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 15px;
  font-family: Arial, sans-serif;
`;

export default Message;
