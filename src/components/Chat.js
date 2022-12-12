import React, { useContext } from 'react';
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4474/4474249.png"
            alt=""
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/166/166260.png"
            alt=""
          />
          <img src="https://img.icons8.com/ios/500/more.png" alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
