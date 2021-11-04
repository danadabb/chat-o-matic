import styled from 'styled-components';

type Props = {
  sameUser: boolean
};

const MessageContainer = styled.div<Props>`
    display: flex;
    justify-content:  ${(props) => (props.sameUser ? 'flex-end' : 'flex-start')};
`;

export default MessageContainer;
