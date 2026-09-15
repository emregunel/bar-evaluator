import { enabledEvaluators } from "../evaluators/index.js";
import type { EvaluationResult, User, Venue } from "../types.js";
import weights from "../data/weights.json" with { type: "json" };

export function evaluateVenues(venues: Venue[], user: User) {
  for (const venue of venues) {
    venue.evaluations = [];
    let results: EvaluationResult[] = [];
    venue.total_score = 0;
    for (const evaluator of enabledEvaluators) {
      const result = evaluator.evaluate(venue, user);

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
  const tableRows = venues.map((venue, venueIndex) => {
    const row: Record<string, string | number> = {
      Rank: venueIndex + 1,
      Venue: venue.name,
      "Total score": venue.total_score,
    };

    venue.evaluations.forEach((evaluation, evaluatorIndex) => {
      const evaluator = enabledEvaluators[evaluatorIndex];

      if (!evaluator) {
        throw new Error(
          `Evaluator for result ${evaluation.criterion} not found`,
        );
      }

      const foundWeight = weights.find((item) => item.name === evaluator.name);

      if (!foundWeight) {
        throw new Error(`Weight for evaluation ${evaluator.name} not found`);
      }

      const weightedScore = evaluation.score * foundWeight.weight;

      row[evaluation.criterion] =
        `${evaluation.score} × ${foundWeight.weight} = ${weightedScore}`;
    });

    return row;
  });

  console.log("\nVenue rankings");
  console.log("Score format: raw score × weight = weighted contribution");
  console.table(tableRows);

  console.log("\nScoring rules");
  console.table(
    venues[0]?.evaluations.map((evaluation) => ({
      Criterion: evaluation.criterion,
      "Maximum score": evaluation.maxScore,
      Reason: evaluation.reason,
    })) ?? [],
  );
}
