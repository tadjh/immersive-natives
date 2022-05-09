import { NUMBER_OF_PROPS, SHOULD_ATTACH_PROP } from "../../../config";

/**
 * Gets all of the ped's prop indexes
 * @param ped The player ped id
 * @returns Array of componentId, drawableId, & textureId arrays
 */
export function GetAllPedPropIndexes(
  ped: number
): [number, number, number, boolean][] {
  let data: [number, number, number, boolean][] = [];
  for (let componentId = 0; componentId < NUMBER_OF_PROPS; componentId++) {
    data = [
      ...data,
      [
        componentId,
        GetPedPropIndex(ped, componentId),
        GetPedPropTextureIndex(ped, componentId),
        SHOULD_ATTACH_PROP,
      ],
    ];
  }
  return data;
}
