import { NO_MASK, PALETTE_ID } from "../../../config";

/**
 * Remove ped mask
 */
export function RemovePedMask(ped: number) {
  SetPedComponentVariation(ped, ...NO_MASK, PALETTE_ID);
}
