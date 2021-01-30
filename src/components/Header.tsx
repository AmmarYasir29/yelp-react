import React, { useState } from "react";
const Header = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");
  const [open, setOpen] = useState(false);
  const handleClick = (e: any) => {
    e.preventDefault();
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({ name, location, price: priceRange });

    let requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://my-server29-node.herokuapp.com/v1/addrestaurants", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        result.status && setOpen(true);
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div className="container mt-4">
      {open && (
        <div className="alert alert-success" role="alert">
          <h4>Add Restaurant Success</h4>
        </div>
      )}
      <div className="row mt">
        <div className="col">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Restaurant Name"
          />
        </div>
        <div className="col">
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Location"
          />
        </div>
        <div className="col">
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="form-select"
          >
            <option defaultValue="true" disabled>
              Price Range
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
          </select>
        </div>
        <div className="col">
          <input
            onClick={(e) => handleClick(e)}
            type="submit"
            className="form-control btn-primary"
            value="Add"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
