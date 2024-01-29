import type { Filter } from "../types";
import { getIndexer } from "../utils";
import { hexToRGBA } from "../utils";
type ShapeOptions = {
  /* Define options here, as we will get them
  in our apply function -- this needs to match
  the list of options provided below. I'll provide
  three example options to show one of each type */
  color: string;size:number
}
  export const Shape: Filter<ShapeOptions> = {
  name: "Shape",
  apply: (pixels, width, height, options) => {
    const [r, g, b, a] = hexToRGBA(options.color);
    // calculate cx and cy
    const cx = width / 2; // center x-coordinate
    const cy = height / 2; // center y-coordinate
    const radius = Math.min(width, height) * (options.size)/200 ; // adjust the radius as needed

    const getPixelIndicesAtRowCol = getIndexer(pixels, width, height);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        // calculate distance between x,y and cx, cy using distance formula
const distance = Math.sqrt ((cx - x ) ** 2 + (cy - y) ** 2);
        // if distance is within the radius, color the pixel
        if (distance <= radius) {
          const [ri, gi, bi, ai] = getPixelIndicesAtRowCol(y, x);
          // Modify the pixel values as needed
          pixels[ri] = (pixels[ri] + r)/2; 
          pixels[gi] = (pixels[gi] + g)/2;
          pixels[bi] = (pixels[bi] + b)/2;
        }
      }
    }

    return pixels;
  },
  options: [
    {
      name: "color",
      type: "color",
      default: "#ff0000",
    },
  {name: "size",
  type: "percentage",
default: 50}]}
