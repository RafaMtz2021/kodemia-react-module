import React from "react";

function Cards({ id, image, name, status, species }) {
  return (
    <div className="container d-flex justify-content-center mb-4" key={id}>
      <div className="card" style={{ width: 10 + "em" } } >
        <img src={image} className="card-img-top" alt="..." key={image}></img>
        <div className="card-body">
          <h5 className="card-title fw-bolder" style={{ color: "black" }} key={name}>
            {name}
          </h5>
          <p
            className="card-text fs-5 ps-5"
            style={{ width: 10 + "em", color: "black" }}
          >
            {status} / {species}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
