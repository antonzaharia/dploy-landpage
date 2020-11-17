import React from "react";
import pic1 from "../images/Screenshot_2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Trial() {
  return (
    <div className="trial">
      <img src={pic1}/>
      <div className="trial-div">
        <p className="trial-text">Choose what apps you need and set uo a free trial</p>
        <a href="#" className="trial-btn">
          Go to Marketplace &nbsp;
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
}
