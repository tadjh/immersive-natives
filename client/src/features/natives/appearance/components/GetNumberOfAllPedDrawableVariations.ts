import { NUMBER_OF_COMPONENTS } from "./config";

/**
 * Gets all of the ped's drawable variations
 * @param ped The player ped id
 * @returns Array of number of drawable variations per component
 */
export function GetNumberOfAllPedDrawableVariations(ped: number): number[] {
  let data: number[] = [];
  for (let componentId = 0; componentId < NUMBER_OF_COMPONENTS; componentId++) {
    data = [...data, GetNumberOfPedDrawableVariations(ped, componentId)];
  }
  return data;
}
