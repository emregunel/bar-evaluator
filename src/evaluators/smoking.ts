import type { Venue, Evaluator, EvaluationResult } from "../types.js";

function evaluate(restaurant: Venue): EvaluationResult {
  let score = 0;
  if (restaurant.smoking_allowed === "yes") {
    score += -1;
  }

  return {
    criterion: "Smoking",
    score,
    reason: "Smoking allowed",
    maxScore: 10,
  };
}

export const smokingEvaluator: Evaluator = {
  name: "smoking",
  evaluate: evaluate,
};
