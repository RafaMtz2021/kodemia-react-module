import React from "react";
// CSS
import "./ShowUser.css";
import { useNavigate } from "react-router-dom";

function ShowUser({ id, firstName, lastName }) {
  const navigate = useNavigate();
	return (
    <div onClick={(e) => navigate(`/users/${id}`)} className="d-flex justify-content-center bk-color linkUser">
      <div  className="card" id={id} style={{width: 22 + 'em'}}>
        <div className="card-body">
          <h4  className="card-title">{firstName} {lastName}</h4>
        </div>
      </div>
    </div>
	);
}

export default ShowUser;