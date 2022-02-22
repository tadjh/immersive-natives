import { DisablePlayerDuck, DisablePlayerJump, DisablePlayerSprint } from ".";

/**
 * Disable player duck, jump & sprint for the current frame
 */
export const RestrictPlayerMovement = () => {
  DisablePlayerDuck();
  DisablePlayerJump();
  DisablePlayerSprint();
};
