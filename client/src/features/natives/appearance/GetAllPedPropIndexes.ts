import { NUMBER_OF_PROPS, SHOULD_ATTACH_PROP } from "../../../config";
import { PropIndexLabel, shouldSkipProp } from "../../../utils";

/**
 * Gets all of the ped's prop indexes
 * @param ped The player ped id
 * @returns Array of componentId, drawableId, & textureId arrays
 */
export function GetAllPedPropIndexes(ped: number): {
  [key: string]: [number, number, number, boolean];
} {
  let data: { [key: string]: [number, number, number, boolean] } = {};
  for (let componentId = 0; componentId < NUMBER_OF_PROPS; componentId++) {
    if (shouldSkipProp(componentId)) continue;
    const key = PropIndexLabel(componentId);
    data = {
      ...data,
      [key]: [
        componentId,
        GetPedPropIndex(ped, componentId),
        GetPedPropTextureIndex(ped, componentId),
        SHOULD_ATTACH_PROP,
      ],
    };
  }
  return data;
}
