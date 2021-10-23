import React, { useState } from "react";
import "./style.css";
import { Button } from "../../components";
import { OfferModal, TrackOrderModal } from "../../components";
import { Link } from "react-router-dom";
import { conversations, chatMessages } from "../../data";

const Chat = () => {
  const [offerModalShow, setOfferModalShow] = useState(false);
  const [TrackModalShow, setTrackModalShow] = useState(false);
  const handleCloseOffer = () => setOfferModalShow(false);
  const handleShowOffer = () => setOfferModalShow(true);
  const handleCloseTrack = () => setTrackModalShow(false);
  const handleShowTrack = () => setTrackModalShow(true);
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
          <h4>aaqibmunir</h4>
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
            <Button onClick={handleShowOffer}>Send Offer</Button>
            <Button onClick={handleShowTrack}>Track Order</Button>
          </div>
        </div>
        <OfferModal show={offerModalShow} handleClose={handleCloseOffer} />
        <TrackOrderModal show={TrackModalShow} handleClose={handleCloseTrack} />
      </div>
    </section>
  );
};

export default Chat;
