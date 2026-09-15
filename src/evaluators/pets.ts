import type { Venue, Evaluator, EvaluationResult } from "../types.js";
import weights from "./../data/weights.json" with { type: "json" };

function evaluate(restaurant: Venue): EvaluationResult {
  // calculate score
  let score = 0;
  const maxScore = 1;

  if (restaurant.pets_allowed === "yes") {
    score = 1;
  } else if (restaurant.pets_allowed === "no") {
    score = -1;
  }

  return {
    criterion: "Pets",
    score: score,
    reason: "Is pets allowed",
    maxScore: 1,
  };
}

export const petsAllowedEvaluator: Evaluator = {
  name: "pets",
  evaluate: evaluate,
};
