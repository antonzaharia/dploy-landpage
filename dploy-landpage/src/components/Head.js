import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Head() {
  return (
    <div className="head">
      <div className="square square-head1"></div>
      <div className="square square-head2"></div>
      <div className="square square-head3"></div>
      <div className="square square-head-white"></div>
      <div>
        <h1 className="deploy-your-business">
          Deploy your business&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; in 60 seconds
        </h1>
        <p className="getting-into-cloud-h">
          Getting into cloud has never been easier
        </p>
      </div>

      <button className="discover-btn">
        Discover &nbsp;
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}
