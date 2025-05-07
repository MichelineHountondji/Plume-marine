import { useEffect, useState } from "react";
import axios from "axios";

const Messages = ({ receiverId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/messages/${receiverId}`, {
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
      .then(res => setMessages(res.data))
      .catch(err => console.log("Erreur :", err));
  }, [receiverId]);

  return (
    <div>
      <h2>Messages reçus</h2>
      {messages.map((msg, index) => (
        <p key={index}><strong>{msg.sender} :</strong> {msg.content}</p>
      ))}
    </div>
  );
};

export default Messages;
