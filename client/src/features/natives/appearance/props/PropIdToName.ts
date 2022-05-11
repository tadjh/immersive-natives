import { PropId, PropType } from "./types";

export function PropIdToName(id: PropId): PropType {
  switch (id) {
    case 0:
      return "hats";
    case 1:
      return "glasses";
    case 2:
      return "earrings";
    case 6:
      return "watches";
    case 7:
      return "bracelets";
    default:
      throw new Error("Invalid id in PropIdToName");
  }
}
