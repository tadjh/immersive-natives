import { DrawableId, TextureId } from "../../types";

export type ComponentType =
  | "faces"
  | "masks"
  | "hairstyles"
  | "arms"
  | "pants"
  | "bags"
  | "shoes"
  | "neckwear"
  | "undershirts"
  | "vests"
  | "decals"
  | "tops";

export type ComponentId =
  | 0 // faces
  | 1 // masks
  | 2 // hairstyles
  | 3 // arms
  | 4 // pants
  | 5 // bags
  | 6 // shoes
  | 7 // neckwear
  | 8 // undershirts
  | 9 // vests
  | 10 // decals
  | 11; // tops

type PaletteID = 2;

export type ComponentVariation = [
  ComponentId,
  DrawableId,
  TextureId,
  PaletteID
];
