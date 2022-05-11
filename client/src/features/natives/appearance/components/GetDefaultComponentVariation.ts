import {
  DEFAULT_FACE,
  NO_MASK,
  NO_HAIR,
  DEFAULT_ARMS,
  DEFAULT_PANTS,
  NO_BAG,
  DEFAULT_SHOES,
  NO_NECKWEAR,
  DEFAULT_UNDERSHIRT,
  NO_VEST,
  NO_DECALS,
  DEFAULT_TOP,
} from "./config";
import { ComponentId, ComponentVariation } from "./types";

export function GetDefaultComponentVariation(
  id: ComponentId
): ComponentVariation {
  switch (id) {
    case 0:
      return DEFAULT_FACE;
    case 1:
      return NO_MASK;
    case 2:
      return NO_HAIR;
    case 3:
      return DEFAULT_ARMS;
    case 4:
      return DEFAULT_PANTS;
    case 5:
      return NO_BAG;
    case 6:
      return DEFAULT_SHOES;
    case 7:
      return NO_NECKWEAR;
    case 8:
      return DEFAULT_UNDERSHIRT;
    case 9:
      return NO_VEST;
    case 10:
      return NO_DECALS;
    case 11:
      return DEFAULT_TOP;
    default:
      throw new Error("Invalid id in GetDefaultComponentVariation");
  }
}
