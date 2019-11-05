import React from "react";
import Gif from "./Gif";
import NoGif from "./NoGif";

const GifList = props => {
  const results = props.data;
  console.log(results);
  let gifs;
  if (results.length > 0) {
    gifs = results.map(gif => (
      <Gif url={gif.images.fixed_height.url} key={gif.id} />
    ));
  } else {
    gifs = <NoGif />;
  }

  return <ul className="gif-list">{gifs}</ul>;
};

export default GifList;
