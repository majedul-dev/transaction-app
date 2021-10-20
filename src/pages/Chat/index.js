import React, { useState } from "react";
import "./style.css";
import { Button } from "../../components";
import OfferModal from "../../components/OfferModal";
import { Link } from "react-router-dom";
import { conversations, chatMessages } from "../../data";

const Chat = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className="chat container section">
      <div className="chat__conversations">
        <div>All Convarsations</div>
        <ul className="chat--lists">
          {conversations.map((item) => (
            <li key={item.id}>
              <Link to="/chat">
                <img src={item.image} alt="" />
                <div>
                  <h4 className="chat--username">{item.username}</h4>
                  <small>{item.lastMessage.slice(0, 20)}...</small>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="chat__message">
        <div className="message__header">
          <h4>majedulpro</h4>
          <small>Last seen 4 hours ago</small>
        </div>
        <div className="message__body">
          {chatMessages.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt="" />
              <div>
                <h4 className="chat--username">{item.username}</h4>
                <small>{item.message}</small>
              </div>
            </div>
          ))}
        </div>
        <div className="message__footer">
          <input type="text" placeholder="Type your message..." />
          <div>
            <Button>Send</Button>
            <Button onClick={handleShow}>Create an Offer</Button>
          </div>
        </div>
        <OfferModal show={show} handleClose={handleClose} />
      </div>
    </section>
  );
};

export default Chat;
