import React, { useState } from 'react';
import io from 'socket.io-client';
import Whiteboard from './component/Whiteboard';

const socket = io.connect("http://localhost:3001");


function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowBoard] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowBoard(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Room</h3>
          <input
            type="text"
            placeholder="Nghĩa..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join room</button>
        </div>
      ) : (
        <Whiteboard socket={socket} username={username} room={room} />
      )}
    </div>
  );
}


export default App;
