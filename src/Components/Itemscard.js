import React from "react";

function Itemscard(props) {
  return (
    <div className="item-card bg-white rounded-xl shadow-xl m-3 p-5 ">
      {props.content}
      <hr />
      {props.caption}
    </div>
  );
}

export default Itemscard;
