import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import Sidebar from "../../Components/Sidebar";
import Chat from "../../Components/Chat";
import api from "../../Services/api";


import "../../Global/styles.css";

function App() {
  const [messages, setMessages] = useState([]);

  // Get all messages on load
  useEffect(() => {
    api.get("/messages/sync").then((response: any) => {
      setMessages(response.data);
    });
  }, []);

  // Get new message on change
  useEffect(() => {
    const pusher = new Pusher("79443249bbc2e31b144d", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage: never) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;