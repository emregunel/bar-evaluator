import { smokingEvaluator } from "./smoking.js";
import { Evaluator } from "../types.js";
import { petsAllowedEvaluator } from "./pets.js";
import { noiseEvaluator } from "./noise.js";

export const enabledEvaluators: Evaluator[] = [
  smokingEvaluator,
  petsAllowedEvaluator,
  noiseEvaluator,
];
