import React, { useState } from "react";
import "./style.css";
import Button from "../../components/Button";
import OfferModal from "../../components/OfferModal";

const Chat = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="chat container py-4">
      <div className="chat__conversations">
        <div>All Convarsations</div>
        <ul className="chat--lists">
          <li>
            <img
              src="https://lh3.googleusercontent.com/ogw/ADea4I6g1EnNtCW1tAiNaB62-KtTXw_LUFcjRHwgegZUrA=s32-c-mo"
              alt=""
            />
            <div>
              <h4 className="chat--username">majedulpro</h4>
              <small>How about you?</small>
            </div>
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/majedul/image/upload/v1628834938/avatars/chck4hxnunirj3oi2q5l.jpg"
              alt=""
            />
            <div>
              <h4 className="chat--username">smilga</h4>
              <small>How about you?</small>
            </div>
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/majedul/image/upload/v1626309957/avatars/jo2jmacvtz8eiirdk0os.png"
              alt=""
            />
            <div>
              <h4 className="chat--username">johndoe</h4>
              <small>How about you?</small>
            </div>
          </li>
          <li>
            <img
              src="https://statics.olx.in/external/base/img/avatar_1.png"
              alt=""
            />
            <div>
              <h4 className="chat--username">majedulpro</h4>
              <small>How about you?</small>
            </div>
          </li>
          <li>
            <img
              src="https://statics.olx.in/external/base/img/avatar_1.png"
              alt=""
            />
            <div>
              <h4 className="chat--username">majedulpro</h4>
              <small>How about you?</small>
            </div>
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/majedul/image/upload/v1629108585/avatars/syqrufw2lasg35qm9ii8.jpg"
              alt=""
            />
            <div>
              <h4 className="chat--username">dane</h4>
              <small>How about you?</small>
            </div>
          </li>
          <li>
            <img
              src="https://statics.olx.in/external/base/img/avatar_1.png"
              alt=""
            />
            <div>
              <h4 className="chat--username">majedulpro</h4>
              <small>How about you?</small>
            </div>
          </li>
          <li>
            <img
              src="https://statics.olx.in/external/base/img/avatar_1.png"
              alt=""
            />
            <div>
              <h4 className="chat--username">majedulpro</h4>
              <small>How about you?</small>
            </div>
          </li>
        </ul>
      </div>
      <div className="chat__message">
        <div className="message__header">
          <h4>majedulpro</h4>
          <small>Last seen 4 hours ago</small>
        </div>
        <div className="message__body">
          <div>
            <img
              src="https://statics.olx.in/external/base/img/avatar_1.png"
              alt=""
            />
            <div>
              <h4 className="chat--username">majedulpro</h4>
              <small>How about you?</small>
            </div>
          </div>
          <div>
            <img
              src="https://lh3.googleusercontent.com/ogw/ADea4I6g1EnNtCW1tAiNaB62-KtTXw_LUFcjRHwgegZUrA=s32-c-mo"
              alt=""
            />
            <div>
              <h4 className="chat--username">majedulpro</h4>
              <small>How about you?</small>
            </div>
          </div>
          <div>
            <img
              src="https://statics.olx.in/external/base/img/avatar_1.png"
              alt=""
            />
            <div>
              <h4 className="chat--username">majedulpro</h4>
              <small>How about you?</small>
            </div>
          </div>
          <div>
            <img
              src="https://lh3.googleusercontent.com/ogw/ADea4I6g1EnNtCW1tAiNaB62-KtTXw_LUFcjRHwgegZUrA=s32-c-mo"
              alt=""
            />
            <div>
              <h4 className="chat--username">majedulpro</h4>
              <small>How about you?</small>
            </div>
          </div>
          <div>
            <img
              src="https://lh3.googleusercontent.com/ogw/ADea4I6g1EnNtCW1tAiNaB62-KtTXw_LUFcjRHwgegZUrA=s32-c-mo"
              alt=""
            />
            <div>
              <h4 className="chat--username">majedulpro</h4>
              <small>How about you?</small>
            </div>
          </div>
          <div>
            <img
              src="https://statics.olx.in/external/base/img/avatar_1.png"
              alt=""
            />
            <div>
              <h4 className="chat--username">majedulpro</h4>
              <small>How about you?</small>
            </div>
          </div>
          <div>
            <img
              src="https://statics.olx.in/external/base/img/avatar_1.png"
              alt=""
            />
            <div>
              <h4 className="chat--username">majedulpro</h4>
              <small>How about you?</small>
            </div>
          </div>
          <div>
            <img
              src="https://statics.olx.in/external/base/img/avatar_1.png"
              alt=""
            />
            <div>
              <h4 className="chat--username">majedulpro</h4>
              <small>How about you?</small>
            </div>
          </div>
          <div>
            <img
              src="https://statics.olx.in/external/base/img/avatar_1.png"
              alt=""
            />
            <div>
              <h4 className="chat--username">majedulpro</h4>
              <small>How about you?</small>
            </div>
          </div>
        </div>
        <div className="message__footer">
          <input type="text" placeholder="Type your message..." />
          <div>
            <Button onClick={handleShow}>Create an Offer</Button>
            <Button>Send</Button>
          </div>
        </div>
        <OfferModal show={show} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default Chat;
