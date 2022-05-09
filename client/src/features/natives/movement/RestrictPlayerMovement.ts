import { DisablePlayerDuck, DisablePlayerJump, DisablePlayerSprint } from ".";

/**
 * Disable player duck, jump & sprint for the current frame
 */
export function RestrictPlayerMovement() {
  DisablePlayerDuck();
  DisablePlayerJump();
  DisablePlayerSprint();
}
