import { PENNY_WISE_NAME, ZEBRA_NAME } from "./constants";

export const IMAGE_SPECS_PENNY = {
  width: 500,
  height: 500,
};

export const IMAGE_SPECS_ZEBRA = {
  width: 900,
  height: 500,
};

export const imageMapSection = {
  [PENNY_WISE_NAME]: {
    imageSpecs: IMAGE_SPECS_PENNY,
  },
  [ZEBRA_NAME]: {
    imageSpecs: IMAGE_SPECS_ZEBRA,
  },
};
