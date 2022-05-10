import { Args } from "../types";
export * from "./debug";

export function isEmpty<T extends unknown>(arr: T[]) {
  return Array.isArray(arr) && !arr.length;
}

export function getArg(args: Args) {
  const [arg1] = args;
  return arg1;
}

export function ComponentIdLabel(id: number) {
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
      throw new Error("Invalid id in ComponentIdLabel");
  }
}

export function PropIndexLabel(index: number) {
  switch (index) {
    case 0:
      return "hats";
    case 1:
      return "glasses";
    case 2:
      return "earrings";
    case 3:
      return "unknown";
    case 4:
      return "unknown";
    case 5:
      return "unknown";
    case 6:
      return "watches";
    case 7:
      return "bracelets";
    default:
      throw new Error("Invalid id in PropIndexLabel");
  }
}

export function shouldSkipProp(componentId: number) {
  return componentId === 3 || componentId === 4 || componentId === 5;
}
