export interface Venue {
  id: number;
  name: string;
  smoking_allowed: "yes" | "no";
  suitable_for_couples: "yes" | "no";
  type: string;
  pets_allowed: "yes" | "no";
  price_level: 1 | 2 | 3;
  noise_level: "quiet" | "moderate" | "loud";
  outdoor_seating: "yes" | "no";
}

export interface EvaluationResult {
  criterion: string;
  score: number;
  reason?: string;
  maxScore: number;
}
export interface Evaluator {
  name: string;
  evaluate(restaurant: Venue): EvaluationResult;
}
