const colors = {
  red: [3, 5, 7, 13, 15, 17, 23, 25, 27, 29, 31, 37, 39, 41, 47, 49, 51],
  yellow: [0],
  blue: [1, 9, 11, 19, 21, 33, 35, 43, 45, 53],
  gray: [
    2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40,
    42, 44, 46, 48, 50, 52,
  ],
};

const colorMap = {
  red: "#cf3248",
  blue: "#3caed3",
  yellow: "#fec467",
  gray: "#5c5c5c",
};

export const getRandomColor = () => {
  const randomColor = Object.keys(colors)[Math.floor(Math.random() * Object.keys(colors).length)];
  return randomColor;
};

export const getColorNameFromNum = (num) => {
  for (let key in colors) {
    if (colors[key].includes(num)) {
      return key;
    }
  }
};

export const getColorHexFromNum = (num) => {
  for (let key in colors) {
    if (colors[key].includes(num)) {
      // if the current key includes the num in its array value
      return colorMap[key];
    }
  }
};
