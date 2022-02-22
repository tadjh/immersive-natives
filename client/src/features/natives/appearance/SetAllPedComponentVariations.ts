import { PALETTE_ID } from "../../../constants";

/**
 * Set all ped component variations at once.
 * @param ped The Player Ped Id
 * @param variations Array of componentId, drawableId, textureId arrays. You can pass a null value to skip a component.
 */
export const SetAllPedComponentVariations = (
  ped: number,
  variations: ([number, number, number] | null)[]
) => {
  for (let variation of variations) {
    if (!variation) continue;
    // TODO Should PALETTE_ID be dynamic? ie. GetPedPaletteVariation(ped, componentId || variation[0]);
    SetPedComponentVariation(ped, ...variation, PALETTE_ID);
  }
};
