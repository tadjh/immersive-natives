import { INPUT_DUCK, PLAYER_CONTROL } from "../../constants";

/**
 * Disable player ducking for the current frame
 */
export const DisablePlayerDuck = () =>
  DisableControlAction(PLAYER_CONTROL, INPUT_DUCK, true);
