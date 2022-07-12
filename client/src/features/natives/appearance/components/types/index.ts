import { DrawableId, MaxDrawables, TextureId, Variations } from "../../types";

export const componentTypes = [
  "faces",
  "masks",
  "hairstyles",
  "arms",
  "pants",
  "bags",
  "shoes",
  "neckwear",
  "undershirts",
  "vests",
  "decals",
  "tops",
] as const;

export type ComponentType = typeof componentTypes[number];

export const componentIds = [
  0, // faces
  1, // masks
  2, // hairstyles
  3, // arms
  4, // pants
  5, // bags
  6, // shoes
  7, // neckwear
  8, // undershirts
  9, // vests
  10, // decals
  11, // tops
] as const;

export type ComponentId = typeof componentIds[number];

type PaletteID = 2;

export type ComponentVariation = [
  ComponentId,
  DrawableId,
  TextureId,
  PaletteID
];

export type ComponentVariations = Variations<ComponentType, ComponentVariation>;

export type ComponentMaxDrawables = MaxDrawables<ComponentType>;
