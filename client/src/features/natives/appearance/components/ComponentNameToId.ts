import { ComponentId, ComponentType } from "./types";

export function ComponentNameToId(name: ComponentType): ComponentId {
  switch (name) {
    case "faces":
      return 0;
    case "masks":
      return 1;
    case "hairstyles":
      return 2;
    case "arms":
      return 3;
    case "pants":
      return 4;
    case "bags":
      return 5;
    case "shoes":
      return 6;
    case "neckwear":
      return 7;
    case "undershirts":
      return 8;
    case "vests":
      return 9;
    case "decals":
      return 10;
    case "tops":
      return 11;
    default:
      throw new Error("Invalid name in ComponenNameToId");
  }
}
