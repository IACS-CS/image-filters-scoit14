
import type { Filter } from "../types";
import { getIndexer } from "../utils";
import { hexToRGBA } from "../utils";

type CircleMaskOptions = {
  size: number;
};

export const CircleMask: Filter<CircleMaskOptions> = {
  name: "CameraLens",
  apply: (pixels, width, height, options) => {
    const cx = width / 2; // center x-coordinate
    const cy = height / 2; // center y-coordinate
    const radius = Math.min(width, height) * (options.size) / 200; // adjust the radius as needed

    const getPixelIndicesAtRowCol = getIndexer(pixels, width, height);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const distance = Math.sqrt((cx - x) ** 2 + (cy - y) ** 2);
        if (distance > radius) { // If outside the circle
          const [ri, gi, bi, ai] = getPixelIndicesAtRowCol(y, x);
          pixels[ri] = 0; // Set 0 (black)
          pixels[gi] = 0; // Set 0 (black)
          pixels[bi] = 0; // Set 0 (black)
        }
        
      }
    }

    return pixels;
  },
  options: [
    
    {
      name: "size",
      type: "percentage",
      default: 50,
    }
  ]
};