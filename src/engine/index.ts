import { enabledEvaluators } from "../evaluators/index.js";
import { EvaluationResult, Evaluator, Venue } from "../types.js";

export function evaluateRestaurants(restaurants: Venue[]) {
  let results: EvaluationResult[] = [];

  for (const restaurant of restaurants) {
    for (const evaluator of enabledEvaluators) {
      const result = evaluator.evaluate(restaurant);
      results.push(result);
    }
  }
  results.forEach((result) => {
    console.log(JSON.stringify(result));
  });
}
