import type { Venue, Evaluator, EvaluationResult, User } from "../types.js";

function evaluate(restaurant: Venue, user: User): EvaluationResult {
  let score = 0;

  if (restaurant.smoking_allowed && user.preferences.smoking_allowed) {
    if (restaurant.smoking_allowed === user.preferences.smoking_allowed) {
      score += 1;
    } else {
      score -= 1;
    }
  }

  return {
    criterion: "Smoking",
    score,
    reason: "Match: +1; mismatch: -1; unknown: 0",
    maxScore: 1,
  };
}

export const smokingEvaluator: Evaluator = {
  name: "smoking",
  evaluate: evaluate,
};
