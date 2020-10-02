import React, { useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import api from "../Services/api";

function Chat(messages: any) {
  const [input, setInput] = useState("");

  const sendMessage = async (e: any) => {
    e.preventDefault();
    let date = new Date();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let day = date.getDate();
    let time = `${date.getHours()}:${date.getMinutes()}`;
    console.log(date);
    await api.post("/messages/new", {
      name: "name",
      message: input,
      timestamp: `${day}.${month}.${year}, ${time}`,
      received: false,
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Contato</h3>
          <p>Visto por ultimo...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {/* {messages.map( message => (
          <>
            <p
              className={`chat__message ${
                message.received && "chat__receiver"
              }`}
            >
              <span className="chat__name">{message.name}</span>
              {message.message}
              <span className="chat__timestamp">{message.timestamp}</span>
            </p>
          </>
        ))} */}
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite uma mensagem"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Enviar
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
