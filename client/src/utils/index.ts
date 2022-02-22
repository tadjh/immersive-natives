import { CURRENT_RESOURCE_NAME } from "../constants";

export const IS_DEBUG = () =>
  !!GetConvarInt(`${CURRENT_RESOURCE_NAME}-debugMode`, 0);

/**
 * A simple debug print function that is dependent on a convar
 * will output a nice prettfied message if debugMode is on
 * @param
 * @returns
 */
export function debugDATA(...data: any[]) {
  if (!IS_DEBUG()) return;
  console.log(`${CURRENT_RESOURCE_NAME.toUpperCase()}:`, ...data);
}
