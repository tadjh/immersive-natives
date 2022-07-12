import { INPUT_SPRINT, PLAYER_CONTROL } from "../../../config";

/**
 * Disable player sprint for the current frame
 */
export function DisablePlayerSprint() {
  return DisableControlAction(PLAYER_CONTROL, INPUT_SPRINT, true);
}
