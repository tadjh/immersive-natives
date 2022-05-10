import { PALETTE_ID } from "../../../config";

/**
 * Set all ped component variations at once.
 * @param ped The Player Ped Id
 * @param variations Array of componentId, drawableId, textureId arrays. You can pass a null value to skip a component.
 */
export function SetAllPedComponentVariations(
  ped: number,
  variations: { [key: string]: [number, number, number] | null }
) {
  for (let key in variations) {
    const variation = variations[key];
    if (!variation) continue;
    // TODO Should PALETTE_ID be dynamic? ie. GetPedPaletteVariation(ped, componentId || variation[0]);
    SetPedComponentVariation(ped, ...variation, PALETTE_ID);
  }
}
