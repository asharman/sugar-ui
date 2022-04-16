const baseSize = 1;
const scale = 1.125;
const steps = 10;

function createScale(steps, unit) {
  smallSizes = Array.from({ length: steps }).reduce((acc, _current, index) => {
    let i = index + 1;
    let key = `size-scale-${unit}-${i}`;
    return {
      [key]: { value: `${(baseSize / Math.pow(scale, i)).toFixed(3)}${unit}` },
      ...acc,
    };
  }, {});
  largeSizes = Array.from({ length: steps }).reduce((acc, _current, index) => {
    let i = index + 1;
    let key = `size-scale-${unit}${i}`;
    return {
      ...acc,
      [key]: { value: `${(baseSize * Math.pow(scale, i)).toFixed(3)}${unit}` },
    };
  }, {});

  return {
    ...smallSizes,
    "size-scale0": { value: `${baseSize}${unit}` },
    ...largeSizes,
  };
}

module.exports = {
  "size-0": { value: 0 },
  ...createScale(10, "em"),
  ...createScale(10, "rem"),
};
