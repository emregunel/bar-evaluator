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
    reason: "Smoking allowed",
    maxScore: 10,
  };
}

export const smokingEvaluator: Evaluator = {
  name: "smoking",
  evaluate: evaluate,
};
