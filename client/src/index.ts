import {
  DisablePlayerDuck,
  DisablePlayerJump,
  DisablePlayerMeleeActions,
  DisablePlayerSprint,
  EnablePlayerMovement,
  GetPedCoords,
  RestrictPlayerMovement,
} from "./features/natives";

// Exports
globalThis.exports("DisablePlayerDuck", DisablePlayerDuck);
globalThis.exports("DisablePlayerJump", DisablePlayerJump);
globalThis.exports("DisablePlayerMeleeActions", DisablePlayerMeleeActions);
globalThis.exports("DisablePlayerSprint", DisablePlayerSprint);
globalThis.exports("EnablePlayerMovement", EnablePlayerMovement);
globalThis.exports("GetPedCoords", GetPedCoords);
globalThis.exports("RestrictPlayerMovement", RestrictPlayerMovement);
