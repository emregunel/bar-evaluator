import type { Venue, Evaluator, EvaluationResult, User } from "../types.js";

function evaluate(restaurant: Venue, user: User): EvaluationResult {
  let score = 0;

  if (user.age > 40 && restaurant.noise_level === "loud") {
    score = -1;
  }

  return {
    criterion: "Noise",
    score,
    reason: "Loud venues are penalized for users over 40",
    maxScore: 1,
  };
}

export const noiseEvaluator: Evaluator = {
  name: "noise",
  evaluate,
};
