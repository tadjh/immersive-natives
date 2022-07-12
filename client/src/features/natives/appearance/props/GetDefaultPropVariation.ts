import {
  NO_HAT,
  NO_GLASSES,
  NO_EARRINGS,
  NO_WATCHES,
  NO_BRACELETS,
} from "./config";
import { PropId, PropVariation } from "./types";

export function GetDefaultPropVariation(id: PropId): PropVariation {
  switch (id) {
    case 0:
      return NO_HAT;
    case 1:
      return NO_GLASSES;
    case 2:
      return NO_EARRINGS;
    case 6:
      return NO_WATCHES;
    case 7:
      return NO_BRACELETS;
    default:
      throw new Error("Invalid id in GetDefaultPropVariation");
  }
}
