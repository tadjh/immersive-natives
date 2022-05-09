import { NUMBER_OF_PROPS } from "../../../config";

/**
 * Gets all of the ped's prop drawable variations
 * @param ped The player ped id
 * @returns Array of number of prop drawable variations per component
 */
export function GetNumberOfAllPedPropDrawableVariations(ped: number): number[] {
  let data: number[] = [];
  for (let componentId = 0; componentId < NUMBER_OF_PROPS; componentId++) {
    data = [...data, GetNumberOfPedPropDrawableVariations(ped, componentId)];
  }
  return data;
}
