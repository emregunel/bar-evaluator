import places from "./data/places.json" with { type: "json" };
import type { Venue } from "./types.js";
import { evaluateVenues } from "./engine/index.js";

console.log("Bar evaluator is ready.");
const parsedPlaces = places as Venue[];
evaluateVenues(parsedPlaces);
