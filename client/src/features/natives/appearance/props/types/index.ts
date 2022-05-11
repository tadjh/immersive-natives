import { DrawableId, TextureId } from "../../types";

export type PropType =
  | "hats"
  | "glasses"
  | "earrings"
  | "watches"
  | "bracelets";

export type PropId =
  | 0 // hats
  | 1 // glasses
  | 2 // earrings
  | 3 // Unknown
  | 4 // Unknown
  | 5 // Unknown
  | 6 // watches
  | 7; // bracelets;

export type PropVariation = [PropId, DrawableId, TextureId | -1, boolean];
