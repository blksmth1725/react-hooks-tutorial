import React from "react";

import ImageToggleMouseOverOut from "../components/ImageToggleMouseOverOut";

import PennyWiseBW from "../static/images/PennyWiseBW.jpg";
import PennyWiseColor from "../static/images/PennyWiseColor.jpeg";
import ZebrasBW from "../static/images/ZebrasBW.jpg";
import ZebrasColor from "../static/images/ZebrasColor.jpeg";
import { PENNY_WISE_NAME, ZEBRA_NAME } from "../utils/constants.js";

function ImageMouseOverOut() {
  return (
    <div>
      <ImageToggleMouseOverOut
        name={PENNY_WISE_NAME}
        primaryImage={PennyWiseBW}
        secondaryImage={PennyWiseColor}
      />
      {"   "}
      <ImageToggleMouseOverOut
        name={ZEBRA_NAME}
        primaryImage={ZebrasBW}
        secondaryImage={ZebrasColor}
      />
    </div>
  );
}

export default ImageMouseOverOut;
