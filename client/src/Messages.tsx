import React from "react";
import getMessages from "../api/queries/message";

type MessageProps = {
  user: string;
};
const Messages = ({ user }: MessageProps): JSX.Element | null => {
  const { data } = getMessages();

  if (!data) {
    return null;
  }

  return <div>hello</div>;
};

export default Messages;
