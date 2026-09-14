import { smokingEvaluator } from "./smoking.js";
import { Evaluator } from "../types.js";
import { petsAllowedEvaluator } from "./pets.js";

export const enabledEvaluators: Evaluator[] = [
  smokingEvaluator,
  petsAllowedEvaluator,
];
