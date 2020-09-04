import React from "react";
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <React.Fragment>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card" style={{ width: "100%" }}>
          <img src={props.imgSrc} className="card-img-top" alt="Service page" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              {props.text}
            </p>
            <Link to={props.link} className="btn btn-primary">
              {props.visit}
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
