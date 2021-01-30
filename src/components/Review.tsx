import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Start from "./Start";
const Review = () => {
  const [review, setReview] = useState([]);
  const { id }: any = useParams();
  useEffect(() => {
    const myFetch = () => {
      fetch(`https://my-server29-node.herokuapp.com/v1/review/${id}`)
        .then((res) => res.json())
        .then((result) => {
          setReview(result.data.rows);
        });
    };
    myFetch();
  }, []);
  return (
    <div className="row row-col-3 mb-2 mt-3">
      {review.map((ele: any) => (
        <div
          key={ele.id}
          className="card text-white bg-primary mb-3"
          style={{ maxWidth: "30%", marginRight: "25px" }}
        >
          <div className="card-header d-flex justify-content-between">
            <span>{ele.name}</span>
            <span style={{ color: "yellow" }}>
              <Start rating={ele.rating} />
            </span>
          </div>
          <div className="card-body">
            <p className="card-text">{ele.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
