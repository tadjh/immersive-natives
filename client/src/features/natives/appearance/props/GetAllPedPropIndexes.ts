import { PropIdToName } from ".";
import { NUMBER_OF_PROPS, SHOULD_ATTACH_PROP } from "./config";
import { PropId, PropType, PropVariation } from "./types";
import { shouldSkipProp } from "./utils";

/**
 * Gets all of the ped's prop indexes
 * @param ped The player ped id
 * @returns Array of componentId, drawableId, & textureId arrays
 */
export function GetAllPedPropIndexes(ped: number): {
  [key in PropType]: PropVariation;
} {
  let data = {} as { [key in PropType]: PropVariation };
  for (let propId = 0; propId < NUMBER_OF_PROPS; propId++) {
    if (shouldSkipProp(propId as PropId)) continue;
    const key = PropIdToName(propId as PropId);
    data = {
      ...data,
      [key]: [
        propId,
        GetPedPropIndex(ped, propId),
        GetPedPropTextureIndex(ped, propId),
        SHOULD_ATTACH_PROP,
      ],
    };
  }
  return data;
}
