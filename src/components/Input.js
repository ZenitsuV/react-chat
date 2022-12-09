import React from 'react';

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something here..." />
      <div className="send">
        <img
          src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-picture-icon-png-image_695350.jpg"
          alt=""
        />
        <input type="file" style={{ display: 'none' }} id="file" />
        <label htmlFor="file">
          <img
            src="https://www.clipartmax.com/png/middle/117-1176788_free-icons-png-attachment-png.png"
            alt=""
          />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
