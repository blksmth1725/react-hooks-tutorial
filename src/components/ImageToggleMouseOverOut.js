import React, { useRef } from "react";
import { imageMapSection } from "../utils/maps";

function ImageToggleMouseOverOut({ primaryImage, secondaryImage, name }) {
  const imageRef = useRef(null);

  return (
    <div>
      {imageMapSection[name] &&
        (console.log("ImageSectionMap =>", imageMapSection[name]),
        (
          <img
            onMouseOver={() => {
              imageRef.current.src = secondaryImage;
            }}
            onMouseOut={() => {
              imageRef.current.src = primaryImage;
            }}
            src={primaryImage}
            alt=""
            ref={imageRef}
            width={imageMapSection[name].imageSpecs.width}
            height={imageMapSection[name].imageSpecs.height}
          />
        ))}
    </div>
  );
}

export default ImageToggleMouseOverOut;
