import { INPUT_JUMP, PLAYER_CONTROL } from "../../../config";

/**
 * Disable player jump for the current frame
 */
export function DisablePlayerJump() {
  return DisableControlAction(PLAYER_CONTROL, INPUT_JUMP, true);
}
