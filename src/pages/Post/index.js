import React from "react";
import "./style.css";
import { Button } from "../../components";

const Post = () => {
  return (
    <section className="section container post">
      <div className="row">
        <div className="col-md-8">
          <h3 className="text-center">Post your ad</h3>
          <form className="post__form">
            <h4>Include Some details</h4>
            <div className="form-group">
              <label>Select Category</label>
              <select className="form-control">
                <option value="Mobile Phones">Mobile Phones</option>
                <option value="Car">Car</option>
                <option value="Motorcycles">Motorcycles</option>
                <option value="Scooters">Scooters</option>
                <option value="Commercial & Other Vehicles">
                  Commercial & Other Vehicles
                </option>
              </select>
            </div>
            <div className="form-group">
              <label>Product Name</label>
              <input className="form-control" type="text" placeholder="Name" />
            </div>
            <div className="form-group">
              <label>Exchange Price</label>
              <input
                className="form-control"
                type="text"
                placeholder="Exchange price"
              />
            </div>
            <div className="form-group">
              <label>Exchange Price</label>
              <input
                className="form-control"
                type="text"
                placeholder="Exchange price"
              />
            </div>
            <div className="form-group">
              <label>Estimated days of shipping</label>
              <input
                className="form-control"
                type="date"
                placeholder="Estimated days of shipping"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                className="form-control"
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Description"
              ></textarea>
            </div>
            <h4>Upload photos</h4>
            <div class="form-group">
              {/* <label>Upload photos</label> */}
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
              />
            </div>
            <h4>Your address</h4>
            <div className="form-group">
              <label>Address one</label>
              <input
                className="form-control"
                type="text"
                placeholder="Address one"
              />
            </div>
            <div className="form-group">
              <label>Address two</label>
              <input
                className="form-control"
                type="text"
                placeholder="Address two"
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                className="form-control"
                type="text"
                placeholder="Phone number"
              />
            </div>
            <Button>Post</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Post;
