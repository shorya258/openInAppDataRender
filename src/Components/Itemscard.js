import React from "react";
import "./itemscard.css";
function Itemscard(props) {
  return (
    <div className="flex flex-col item-card justify-between bg-white rounded-xl shadow-xl px-5 py-3 flex-1">
      <div className="item-card-img-div">
        <img
          src={props.iconImg}
          alt={props.iconAltTxt}
          className="item-card-img"
          style={{ backgroundColor: props.iconColor }}
        />
      </div>
      <p className="item-card-caption">{props.caption}</p>
      <div className="flex flex-row justify-between items-center">
        <p className="item-card-stat">{props.content}</p>
        <p className="item-card-growth">+2.5%</p>
      </div>
    </div>
  );
}

export default Itemscard;
