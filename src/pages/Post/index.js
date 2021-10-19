import React from "react";
import "./style.css";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Post = () => {
  return (
    <div className="container post mt-4">
      <h3 className="text-center">Post your ad</h3>
      <div className="row my-5">
        <div className="col-md-12">
          <div className="card post_card">
            <div className="card-body">
              <div>
                <h4>Include Some details</h4>
                <select>
                  <option value="Mobile Phones">Mobile Phones</option>
                  <option value="Car">Car</option>
                  <option value="Motorcycles">Motorcycles</option>
                  <option value="Scooters">Scooters</option>
                  <option value="Commercial & Other Vehicles">
                    Commercial & Other Vehicles
                  </option>
                </select>
                <Input type="text" placeholder="Title" />
                <Input type="text" placeholder="Name" />
                <Input type="number" placeholder="Price" />
                <textarea placeholder="Description" rows="5" />
              </div>
              <div>
                <h4>Upload photos</h4>
                <Input type="file" />
              </div>
              <div>
                <h4>Your address</h4>
                <Input type="text" placeholder="Address 1" />
                <Input type="text" placeholder="Address 2" />
                <Input type="text" placeholder="Mobile number" />
              </div>
            </div>
            <div className="card-footer my-3">
              <Button>Post</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
