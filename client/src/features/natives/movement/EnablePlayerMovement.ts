import { INPUT_MOVE_LR, INPUT_MOVE_UD, PLAYER_CONTROL } from "../../../config";

/**
 * Enables player movement for the current frame
 */
export function EnablePlayerMovement(): void {
  EnableControlAction(PLAYER_CONTROL, INPUT_MOVE_LR, true);
  EnableControlAction(PLAYER_CONTROL, INPUT_MOVE_UD, true);
}
