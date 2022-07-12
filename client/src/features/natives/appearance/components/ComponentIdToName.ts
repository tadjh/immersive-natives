import { ComponentId, ComponentType } from "./types";

export function ComponentIdToName(id: ComponentId): ComponentType {
  switch (id) {
    case 0:
      return "faces";
    case 1:
      return "masks";
    case 2:
      return "hairstyles";
    case 3:
      return "arms";
    case 4:
      return "pants";
    case 5:
      return "bags";
    case 6:
      return "shoes";
    case 7:
      return "neckwear";
    case 8:
      return "undershirts";
    case 9:
      return "vests";
    case 10:
      return "decals";
    case 11:
      return "tops";
    default:
      throw new Error("Invalid id in ComponentIdToName");
  }
}
