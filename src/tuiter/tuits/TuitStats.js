//component representing the stats of a tuit
import React from "react";
import { useSelector } from "react-redux";

const TuitStats = ({ tuit }) => {
  //bar with replies, retuits, likes and share icon
  return (
    <div className="row" key={tuit._id}>
      <div className="col-3">
        <span>💬</span>
        <span>{tuit.replies}</span>
      </div>
      <div className="col-3">
        <span>🔄</span>
        <span>{tuit.retuits}</span>
      </div>
      <div className="col-3">
        <span>❤️</span>
        <span>{tuit.likes}</span>
      </div>
      <div className="col-3">
        <span>📤</span>
      </div>
    </div>
  );
};
export default TuitStats;