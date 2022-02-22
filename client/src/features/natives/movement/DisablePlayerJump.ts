import { INPUT_JUMP, PLAYER_CONTROL } from "../../../constants";

/**
 * Disable player jump for the current frame
 */
export const DisablePlayerJump = () =>
  DisableControlAction(PLAYER_CONTROL, INPUT_JUMP, true);
