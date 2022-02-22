import { NUMBER_OF_COMPONENTS } from "../../constants";

/**
 * Gets all of the ped's component variations
 * @param ped The player ped id
 * @returns Array of componentId, drawableId, & textureId arrays
 */
export const GetAllPedComponentVariations = (ped: number) => {
  let data: [number, number, number][] = [];
  for (let componentId = 0; componentId < NUMBER_OF_COMPONENTS; componentId++) {
    data = [
      ...data,
      [
        componentId,
        GetPedDrawableVariation(ped, componentId),
        GetPedTextureVariation(ped, componentId),
      ],
    ];
  }
  return data;
};
