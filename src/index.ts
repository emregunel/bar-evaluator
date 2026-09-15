import places from "./data/places.json" with { type: "json" };
import user from "./data/user.json" with { type: "json" };
import type { User, Venue } from "./types.js";
import { evaluateVenues } from "./engine/index.js";

console.log("Bar evaluator is ready.");
const parsedPlaces = places as Venue[];
const parsedUser = user as User;
evaluateVenues(parsedPlaces, parsedUser);
