import React, { useState } from 'react';
import { MessageList } from '../Message';
import Button from '../shared/Button';
import Input from './Input';
import SendContainer from './SendContainer';

const Chat = (): JSX.Element => {
  const [user, setUser] = useState('Jack');
  const [message, setMessage] = useState('');

  return (
    <>
      <MessageList user={user} />
      <SendContainer>
        <Input value={user} onChange={(e) => setUser(e.target.value)} />
        <Input value={message} onChange={(e) => { setMessage(e.target.value); }} />
        <Button type="button">Send</Button>
      </SendContainer>
    </>
  );
};

export default Chat;
