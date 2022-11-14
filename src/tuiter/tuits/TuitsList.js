import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TuitItem from "./TuitItem";

const TuitsList = () => {
  const tuits = useSelector(state => state.tuits);
  const dispatch = useDispatch();
  return (
    <>
      <ul className="list-group">
        {
          tuits.map(tuit =>
            <TuitItem key={tuit._id} tuit={tuit} />
          )
        }
      </ul>
    </>
  );
}

export default TuitsList;