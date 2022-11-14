import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TuitStats from "./TuitStats";
import { deleteTuit } from "./tuits-reducer";


const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }

  return (
    <>
      <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`} />
          </div>
          <div className="col-10">
            <div>{tuit.userName} . {tuit.time}</div>
            <div className="fw-bolder">{tuit.topic}</div>
            <div>{tuit.title}</div>
            <TuitStats tuit={tuit} />
            <i className="bi bi-x-lg float-end"
              onClick={() => deleteTuitHandler(tuit._id)}></i>
          </div>

        </div>

      </li>
    </>
  );
}

export default TuitItem;