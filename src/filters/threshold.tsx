import type { Filter } from "../types";

export const threshold: Filter = {
  name: "threshold",
  apply: (pixels, width, height) => {
    for (let i = 0; i < pixels.length; i+= 4) {
     
const thresholdValue = 130
const red = pixels[i];
const green = pixels[i + 1];
const blue = pixels[i + 2];

const grayscale = 0.299 * red + 0.587 * green + 0.114 * blue; //Aarav and Chatgpt help

const newValue = grayscale > thresholdValue ? 255 : 0;

pixels[i] = newValue;
pixels[i+1] = newValue;
pixels[i + 2] = newValue
}
    return pixels;
  },

};