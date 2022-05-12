import { ComponentIdToName } from "./ComponentIdToName";
import { NUMBER_OF_COMPONENTS } from "./config";
import { ComponentId, ComponentMaxDrawables } from "./types";

/**
 * Gets all of the ped's drawable variations
 * @param ped The player ped id
 * @returns Array of number of drawable variations per component
 */
export function GetNumberOfAllPedDrawableVariations(
  ped: number
): ComponentMaxDrawables {
  let data = {} as ComponentMaxDrawables;
  for (
    let componentId = 0 as ComponentId;
    componentId < NUMBER_OF_COMPONENTS;
    componentId++
  ) {
    const key = ComponentIdToName(componentId);
    data = {
      ...data,
      [key]: GetNumberOfPedDrawableVariations(ped, componentId),
    };
  }
  return data;
}
