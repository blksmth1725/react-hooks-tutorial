import React from "react";

import ImageToggleMouseOverOut from "./ImageToggleMouseOverOut.js";

import PennyWiseBW from "../static/PennyWiseBW.jpg";
import PennyWiseColor from "../static/PennyWiseColor.jpeg";
import ZebrasBW from "../static/ZebrasBW.jpg";
import ZebrasColor from "../static/ZebrasColor.jpeg";

function ImageMouseOverOut() {
  return (
    <div>
      <ImageToggleMouseOverOut
        name="Penny"
        primaryImage={PennyWiseBW}
        secondaryImage={PennyWiseColor}
        alt=""
      />
      {"   "}
      <ImageToggleMouseOverOut
        name="Zebra"
        primaryImage={ZebrasBW}
        secondaryImage={ZebrasColor}
        alt=""
      />
    </div>
  );
}

export default ImageMouseOverOut;
