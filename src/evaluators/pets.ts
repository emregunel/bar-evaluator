import type { Venue, Evaluator, EvaluationResult, User } from "../types.js";
import weights from "./../data/weights.json" with { type: "json" };

function evaluate(restaurant: Venue, user: User): EvaluationResult {
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
    reason: "Allowed: +1; not allowed: -1; unknown: 0",
    maxScore: 1,
  };
}

export const petsAllowedEvaluator: Evaluator = {
  name: "pets",
  evaluate: evaluate,
};
