import React from "react";

function Itemscard(props) {
  return (
    <div className="item-card bg-white rounded-xl shadow-xl m-3 p-5 ">
      <div
        className="p-1 rounded-md"
        style={{
          backgroundColor: `${props.iconColor}`,
          width: "1.4rem",
        }}
      >
        <img src={props.iconImg} alt={props.iconAltTxt} />
      </div>
      {props.content}
      <hr />
      {props.caption}
    </div>
  );
}

export default Itemscard;
