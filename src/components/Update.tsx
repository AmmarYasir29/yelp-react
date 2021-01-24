import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pic from "../img/update.svg";

const Update = () => {
  const { id }: any = useParams();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  useEffect(() => {
    const myFetch = () => {
      fetch(`http://localhost:3000/v1/onerestaurant/${id}`)
        .then((response) => response.json())
        .then((result) => {
          setName(result.data[0].name);
          setLocation(result.data[0].location);
          setPrice(result.data[0].price);
        })
        .catch((error) => console.log("error", error));
    };
    myFetch();
  }, []);
  const handleUpdate = () => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({ name, location, price });

    let requestOptions: any = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`http://localhost:3000/v1/editrestaurants/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result: any) => {
        result.status && setOpen(true);
        setName(" ");
        setLocation(" ");
        setPrice(" ");
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      {open && (
        <div className="alert alert-success" role="alert">
          <h4>The Restaurant update- Refresh the page!</h4>
        </div>
      )}
      <div className="container">
        <div className="card">
          <img
            className="card-img-top"
            style={{ height: "550px", objectFit: "cover" }}
            src={pic}
            alt="img"
          />
          <div className="card-body bg-secondary">
            <form action="">
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="form-control"
                  type="text"
                  id="name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="location">
                  Location
                </label>
                <input
                  onChange={(e) => setLocation(e.target.value)}
                  className="form-control"
                  type="text"
                  id="location"
                  value={location}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="price">
                  Price
                </label>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  className="form-control"
                  type="text"
                  id="price"
                  value={price}
                />
              </div>
            </form>
            <button className="btn btn-primary" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
