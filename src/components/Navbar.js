import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">React Chat</span>
      <div className="user">
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
          alt=""
        />
        <span>Itachi</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
