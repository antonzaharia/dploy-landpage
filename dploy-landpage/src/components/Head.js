import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Head() {
  return (
    <div className="head">
      <div>
        <h1 className="deploy-your-business">
          Deploy your business in 60 seconds
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
