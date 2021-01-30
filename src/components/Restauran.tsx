import React, { useEffect } from "react";
import useStore from "../storeState/Manage";
import { useHistory } from "react-router-dom";
import { start } from "repl";
import Start from "./Start";

const Restauran = () => {
  const { restaurant, setRestaurant } = useStore();
  let History = useHistory();
  useEffect(() => {
    const warringHandel = async () => {
      return await fetch("https://my-server29-node.herokuapp.com/v1/restaurants")
        .then((result) => result.json())
        .then((res) => setRestaurant(res.data))
        .catch((err) => console.log(err));
    };
    warringHandel();
  }, []);

  const handleDelete = (e: any, id: string) => {
    e.stopPropagation();
    let requestOptions: any = {
      method: "DELETE",
      redirect: "follow",
    };
    fetch(`https://my-server29-node.herokuapp.com/v1/Restaurants/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    setRestaurant(restaurant.filter((ele: any) => ele.id !== id));
  };
  const Handleupdate = (e: any, id: any) => {
    e.stopPropagation();
    History.push(`/update/${id}`);
  };
  const handledetail = (id: any) => {
    History.push(`/detail/${id}`);
  };
  return (
    <div className="container mt-4">
      <table className="table table-dark table-hover">
        <thead className="table-primary">
          <tr className="link-dark">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurant &&
            restaurant.map((ele: any) => {
              return (
                <tr
                  className="pt-2"
                  key={ele.id}
                  onClick={() => handledetail(ele.id)}
                >
                  <th scope="row">{ele.name} </th>
                  <td>{ele.location} </td>
                  <td style={{ color: "green" }}>{"$".repeat(ele.price)} </td>
                  <td>
                    <div className="text-warning">
                      <Start rating={ele.average_rating} />
                      <span >({ele.count? ele.count :"No Review"})</span>
                    </div>
                  </td>
                  <td>
                    <button
                      onClick={(e) => Handleupdate(e, ele.id)}
                      type="button"
                      className="btn btn-warning"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(e, ele.id)}
                      type="button"
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Restauran;
