import React from 'react';
import getMessages from '../../../api/queries/message';
import UserIcon from '../UserIcon';
import Message from './Message';
import MessageContainer from './MessageContainer';

type MessageProps = {
  user: string;
};

const Messages = ({ user }: MessageProps): JSX.Element | null => {
  const { data } = getMessages();
  if (!data) {
    return null;
  }

  return (
    <>
      {data.messages.map(({ id, user: MessageUser, content }) => (
        <MessageContainer key={id} sameUser={user === MessageUser}>
          {user !== MessageUser && <UserIcon user={MessageUser} />}
          <Message sameUser={user === MessageUser}>
            {content}
          </Message>
        </MessageContainer>
      ))}
    </>
  );
};

export default Messages;
