import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";
import AddReview from "./AddReview";

const Detail = () => {
  const { id }: any = useParams();
  const [rest, setRest]: any = useState({});
  useEffect(() => {
    const myRequ = () => {
      fetch(`https://my-server29-node.herokuapp.com/v1/onerestaurant/${id}`)
        .then((res) => res.json())
        .then((result) => setRest(result.data[0]))
        .catch((err) => console.log(err));
    };
    myRequ();
  }, []);
  return (
    <div className="container">
      {/* {console.log("Restaurant", restaurant)} */}
      <h1 className="text-center mt-3">
        What you think about <span>{rest.name}</span> !
      </h1>
      <Review />
      <AddReview />
    </div>
  );
};

export default Detail;
