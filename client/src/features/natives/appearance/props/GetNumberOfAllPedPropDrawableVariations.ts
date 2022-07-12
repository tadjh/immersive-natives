import { NUMBER_OF_PROPS } from "./config";
import { PropIdToName } from "./PropIdToName";
import { PropId, PropMaxDrawables } from "./types";
import { shouldSkipProp } from "./utils";

/**
 * Gets all of the ped's prop drawable variations
 * @param ped The player ped id
 * @returns Array of number of prop drawable variations per component
 */
export function GetNumberOfAllPedPropDrawableVariations(
  ped: number
): PropMaxDrawables {
  let data = {} as PropMaxDrawables;
  for (let propId = 0 as PropId; propId < NUMBER_OF_PROPS; propId++) {
    if (shouldSkipProp(propId)) continue;
    const key = PropIdToName(propId);
    data = {
      ...data,
      [key]: GetNumberOfPedPropDrawableVariations(ped, propId),
    };
  }
  return data;
}
