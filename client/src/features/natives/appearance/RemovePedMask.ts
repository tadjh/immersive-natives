import { NO_MASK, PALETTE_ID } from "../../../constants";

/**
 * Remove ped mask
 */
export const RemovePedMask = (ped: number) => {
  SetPedComponentVariation(ped, ...NO_MASK, PALETTE_ID);
};
