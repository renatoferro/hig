import DENSITY from "./themes/baseTheme/system/density";

function cleanAvailableSize(densityKey) {
  const startIndex = densityKey.indexOf(".") + 1;
  const endIndex = densityKey.length;
  const newDensityKey = densityKey
    .substring(startIndex, endIndex)
    .toLowerCase();

  return newDensityKey;
}

function getAvailableSizeArray() {
  const availableSizes = [];

  Object.keys(DENSITY).forEach(key => {
    if (DENSITY[key].type === "spacing") {
      availableSizes.push(cleanAvailableSize(key));
    }
  });

  return availableSizes;
}

const AVAILABLE_SPACINGS = getAvailableSizeArray();

export default { AVAILABLE_SPACINGS };
