import React from "react";
import pic2 from "../images/Screenshot_3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Deploy() {
    return (
        <div className="trial">
        <div className="trial-div">
          <p className="trial-text">Depoly to your domained, secured cloud</p>
          <a href="http://localhost:3000/" className="trial-btn">
            See How it works &nbsp;
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
        <img src={pic2} alt=""/>
      </div>
    )
}
