import React from "react";

const Start = (props: any) => {
  let start: Array<any> = [];
  for (let i = 0; i < 5; i++) {
    if (i <= props.rating) start.push(<i className="fas fa-star"></i>);
    else start.push(<i className="far fa-star"></i>);
  }
  return <div>{start}</div>;
};

export default Start;
