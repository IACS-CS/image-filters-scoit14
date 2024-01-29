import type { Filter } from "../types";
import sampleRoseColoredGlasses from "./samples/roseColoredGlasses";
import sampleGrid from "./samples/grid";
import sampleVignette from "./samples/vignette";
import { brighten } from "./brighten";
import { threshold } from "./threshold";
import { Shape } from "./shape";
import { CircleMask} from "./lens";
const filters: Filter[] = [
  CircleMask,
  Shape,
  brighten,
  threshold,
  sampleRoseColoredGlasses,
  sampleGrid,
  sampleVignette,
];

export default filters;
