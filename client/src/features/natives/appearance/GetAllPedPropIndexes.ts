import { NUMBER_OF_PROPS } from "../../../constants";

/**
 * Gets all of the ped's prop indexes
 * @param ped The player ped id
 * @returns Array of componentId, drawableId, & textureId arrays
 */
export const GetAllPedPropIndexes = (
  ped: number
): [number, number, number, boolean][] => {
  let data: [number, number, number, boolean][] = [];
  for (let componentId = 0; componentId < NUMBER_OF_PROPS; componentId++) {
    data = [
      ...data,
      [
        componentId,
        GetPedPropIndex(ped, componentId),
        GetPedPropTextureIndex(ped, componentId),
        true, // TODO Should this always be false/true or not?
      ],
    ];
  }
  return data;
};