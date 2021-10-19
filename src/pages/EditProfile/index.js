import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import "./style.css";

const EditProfile = () => {
  return (
    <div className="container editProfile my-5">
      <div className="row">
        <div className="col-md-3">
          <h4 className="">Edit Profile</h4>
          <div>
            <small>Change Profile Picture</small>
          </div>
          <div className="mt-4">
            <Link to="/profile" className="profile__btn d-block text-center">
              View Profile
            </Link>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card">
            <div className="card-header">
              <h3 className="">Edit Profile</h3>
            </div>
            <div className="card-body">
              <div className="editProfile__basicInfo">
                <h4>Basic information</h4>
                <Input type="text" placeholder="Name" />
                <textarea
                  placeholder="About me (optional)"
                  cols="10"
                  rows="5"
                />
              </div>
              <div className="editProfile__contactInfo">
                <h4>Contact information</h4>
                <Input type="text" placeholder="Phone number" />
                <Input type="email" placeholder="Email" />
              </div>
            </div>
            <div className="card-footer editProfile__cardFooter">
              <Link to="/profile">
                <button className="editProfile__saveBtn">Discard</button>
              </Link>
              <button className="editProfile__saveBtn">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
