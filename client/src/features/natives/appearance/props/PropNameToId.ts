import { PropId, PropType } from "./types";

export function PropNameToId(name: PropType): PropId {
  switch (name) {
    case "hats":
      return 0;
    case "glasses":
      return 1;
    case "earrings":
      return 2;
    case "watches":
      return 6;
    case "bracelets":
      return 7;
    default:
      throw new Error("Invalid name in PropNameToIndex");
  }
}
