import { IS_ATTACHED, NO_HAT } from "../../../constants";

/**
 * Remove ped hat
 */
export const RemovePedHat = (ped: number) => {
  SetPedPropIndex(ped, ...NO_HAT, IS_ATTACHED);
};
