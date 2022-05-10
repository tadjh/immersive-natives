import { NUMBER_OF_COMPONENTS } from "../../../config";
import { ComponentIdLabel } from "../../../utils";

/**
 * Gets all of the ped's component variations
 * @param ped The player ped id
 * @returns Array of componentId, drawableId, & textureId arrays
 */
export function GetAllPedComponentVariations(ped: number): {
  [key: string]: [number, number, number];
} {
  let data: { [key: string]: [number, number, number] } = {};
  for (let componentId = 0; componentId < NUMBER_OF_COMPONENTS; componentId++) {
    const key = ComponentIdLabel(componentId);
    data = {
      ...data,
      [key]: [
        componentId,
        GetPedDrawableVariation(ped, componentId),
        GetPedTextureVariation(ped, componentId),
      ],
    };
  }
  return data;
}
