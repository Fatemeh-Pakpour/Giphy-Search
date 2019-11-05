import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";

const NoGifs = () => {
  return (
    <li className="no-gifs">
      <div className="icon">
        <FontAwesomeIcon icon={faFrown} />
      </div>
      <h3>Sorry, no GIFs match your search.</h3>
    </li>
  );
};

export default NoGifs;
