import { INPUT_DUCK, PLAYER_CONTROL } from "../../../config";

/**
 * Disable player ducking for the current frame
 */
export function DisablePlayerDuck() {
  return DisableControlAction(PLAYER_CONTROL, INPUT_DUCK, true);
}
