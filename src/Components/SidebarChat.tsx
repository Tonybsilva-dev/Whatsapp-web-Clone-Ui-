import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

export default function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Contato</h2>
        <p>Ultima Mensagem</p>
      </div>
    </div>
  );
}

