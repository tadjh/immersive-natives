import { IS_ATTACHED, NO_HAT } from "../../../config";

/**
 * Remove ped hat
 */
export function RemovePedHat(ped: number) {
  SetPedPropIndex(ped, ...NO_HAT, IS_ATTACHED);
}
