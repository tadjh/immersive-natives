import { DrawableId, MaxDrawables, TextureId, Variations } from "../../types";

export const propTypes = [
  "hats",
  "glasses",
  "earrings",
  "watches",
  "bracelets",
] as const;

export type PropType = typeof propTypes[number];

export const propIds = [
  0, // hats
  1, // glasses
  2, // earrings
  3, // unknown
  4, // unknown
  5, // unknown
  6, // watches
  7, // bracelets
] as const;

export type PropId = typeof propIds[number];

type SignedTextureId = TextureId | -1;

export type PropVariation = [PropId, DrawableId, SignedTextureId, boolean];

export type PropVariations = Variations<PropType, PropVariation>;

export type PropMaxDrawables = MaxDrawables<PropType>;
