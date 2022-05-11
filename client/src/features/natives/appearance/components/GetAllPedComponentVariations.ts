import { NUMBER_OF_COMPONENTS } from "./config";
import { ComponentIdToName } from "./ComponentIdToName";
import { ComponentId, ComponentType, ComponentVariation } from "./types";

/**
 * Gets all of the ped's component variations
 * @param ped The player ped id
 * @returns Array of componentId, drawableId, & textureId arrays
 */
export function GetAllPedComponentVariations(ped: number): {
  [key in ComponentType]: ComponentVariation;
} {
  let data = {} as { [key in ComponentType]: ComponentVariation };
  for (let componentId = 0; componentId < NUMBER_OF_COMPONENTS; componentId++) {
    const key = ComponentIdToName(componentId as ComponentId);
    data = {
      ...data,
      [key]: [
        componentId,
        GetPedDrawableVariation(ped, componentId),
        GetPedTextureVariation(ped, componentId),
        GetPedPaletteVariation(ped, componentId),
      ],
    };
  }
  return data;
}
