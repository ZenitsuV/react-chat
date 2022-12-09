import React from 'react';

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>

      <div className="userChat">
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
