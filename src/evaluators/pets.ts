import type { Venue, Evaluator, EvaluationResult } from "../types.js";
import weights from "./../data/weights.json" with { type: "json" };

function evaluate(restaurant: Venue): EvaluationResult {
  // calculate score
  let score = 0;
  if (restaurant.pets_allowed === "yes") {
    score += 1;
  }

  // weigh the score
  let weightedScore = 0;
  const foundWeight = weights.find((item) => item.name === "pets");

  if (foundWeight) {
    weightedScore = foundWeight.weight * score;
  }

  return {
    criterion: "Pets",
    score: weightedScore,
    reason: "Pets allowed",
    maxScore: 10,
  };
}

export const petsAllowedEvaluator: Evaluator = {
  name: "pets",
  evaluate: evaluate,
};
