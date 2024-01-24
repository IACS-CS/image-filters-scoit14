import type { Filter } from "../types";
import { getIndexer } from "../utils";

export const Shape: Filter = {
  name: "Shape",
  apply: (pixels, width, height) => {
    // calculate cx and cy
    const cx = width / 2; // center x-coordinate
    const cy = height / 2; // center y-coordinate
    const radius = Math.min(width, height) / 4; // adjust the radius as needed

    const getPixelIndicesAtRowCol = getIndexer(pixels, width, height);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        // calculate distance between x,y and cx, cy
const distance = Math.sqrt ((cx - x ) ** 2 + (cy - y) ** 2);
        // if distance is within the radius, color the pixel
        if (distance <= radius) {
          const [ri, gi, bi, ai] = getPixelIndicesAtRowCol(y, x);
          // Modify the pixel values as needed
          pixels[ri] = 255; // set the red pixel to red...
          pixels[gi] = 0; //set the green pixel to 0...
          pixels[bi] = 0; //set the blue pixel to 0...
         
      }
    }

    return pixels;
  },
};
