import { NUMBER_OF_COMPONENTS } from "./config";
import { ComponentIdToName } from "./ComponentIdToName";
import { ComponentId, ComponentVariations } from "./types";

/**
 * Gets all of the ped's component variations
 * @param ped The player ped id
 * @returns Array of componentId, drawableId, & textureId arrays
 */
export function GetAllPedComponentVariations(ped: number): ComponentVariations {
  let data = {} as ComponentVariations;
  for (
    let componentId = 0 as ComponentId;
    componentId < NUMBER_OF_COMPONENTS;
    componentId++
  ) {
    const key = ComponentIdToName(componentId);
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
