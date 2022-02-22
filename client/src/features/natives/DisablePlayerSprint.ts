import { INPUT_SPRINT, PLAYER_CONTROL } from "../../constants";

/**
 * Disable player sprint for the current frame
 */
export const DisablePlayerSprint = () =>
  DisableControlAction(PLAYER_CONTROL, INPUT_SPRINT, true);
