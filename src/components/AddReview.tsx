import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const AddReview = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("Price Range");
  const { id }: any = useParams();
  const [open, setOpen] = useState(false);
  const History = useHistory();
  const handleSubmit = (e: any) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ email, name, review, address, rating });

    var requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`https://my-server29-node.herokuapp.com/v1/review/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setEmail("");
        setName("");
        setReview("");
        setAddress("");
        setRating("");
        setOpen(true);
      })
      .catch((error) => console.log("error", error));
    // History.push("/");
    // History.push(window.location.pathname);
  };
  return (
    <div>
      {open && (
        <div className="alert alert-info" role="alert">
          We are so grateful. Thanks for sharing your review with the community.
        </div>
      )}
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email or Phone
          </label>
          <input
            value={email}
            type="text"
            className="form-control"
            id="inputEmail4"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Name
          </label>
          <input
            value={name}
            type="text"
            className="form-control"
            id="inputPassword4"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-6">
          <label htmlFor="inputAddress" className="form-label">
            Your Address
          </label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="City State St"
          />
        </div>
        <div className="col-6">
          <label htmlFor="floatingSelect" className="form-label">
            Rating the restaurant
          </label>
          <select
            onChange={(e) => setRating(e.target.value)}
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option disabled defaultValue="true">
              Price Range
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
          </select>
        </div>
        <div className="col-md-12">
          <div className="form-floating">
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "150px" }}
            ></textarea>
            <label htmlFor="floatingTextarea2">Comments</label>
          </div>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => handleSubmit(e)}
          >
            Add ReView
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
