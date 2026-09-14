import { enabledEvaluators } from "../evaluators/index.js";
import { EvaluationResult, Evaluator, Venue } from "../types.js";
import weights from "../data/weights.json" with { type: "json" };

export function evaluateVenues(venues: Venue[]) {
  for (const venue of venues) {
    venue.evaluations = [];
    let results: EvaluationResult[] = [];
    venue.total_score = 0;
    for (const evaluator of enabledEvaluators) {
      const result = evaluator.evaluate(venue);

      // weigh the scores
      const foundWeight = weights.find((item) => item.name == evaluator.name);
      if (!foundWeight) {
        throw new Error(`Weight for evaluation ${evaluator.name} not found`);
      }

      venue.total_score += result.score * foundWeight.weight;

      results.push(result);
      venue.evaluations.push(result);
    }
  }

  // sort
  venues.sort((a, b) => b.total_score - a.total_score);
  venues.forEach((venue) => {
    console.log(
      venue.name,
      venue.total_score,
      JSON.stringify(venue.evaluations),
    );
  });
}
