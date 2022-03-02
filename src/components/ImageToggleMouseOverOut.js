import React, { useRef } from "react";
import { imageMapSection } from "../utils/maps";

function ImageToggleMouseOverOut({ primaryImage, secondaryImage, name }) {
  const imageRef = useRef(null);

  const mouseOver = () => {
    imageRef.current.src = secondaryImage;
  };
  const mouseOut = () => {
    imageRef.current.src = primaryImage;
  };

  return (
    <div>
      {imageMapSection[name] && (
        <img
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          src={primaryImage}
          alt=""
          ref={imageRef}
          width={imageMapSection[name].imageSpecs.width}
          height={imageMapSection[name].imageSpecs.height}
        />
      )}
    </div>
  );
}

export default ImageToggleMouseOverOut;
