import {
  DisablePlayerDuck,
  DisablePlayerJump,
  DisablePlayerMeleeActions,
  DisablePlayerSprint,
  EnablePlayerMovement,
  GetAllPedComponentVariations,
  GetAllPedPropIndexes,
  GetPedCoords,
  RestrictPlayerMovement,
  SetAllPedComponentVariations,
  SetAllPedPropIndexes,
} from "./features/natives";

// Exports
globalThis.exports("DisablePlayerDuck", DisablePlayerDuck);
globalThis.exports("DisablePlayerJump", DisablePlayerJump);
globalThis.exports("DisablePlayerMeleeActions", DisablePlayerMeleeActions);
globalThis.exports("DisablePlayerSprint", DisablePlayerSprint);
globalThis.exports("EnablePlayerMovement", EnablePlayerMovement);
globalThis.exports(
  "GetAllPedComponentVariations",
  GetAllPedComponentVariations
);
globalThis.exports("GetAllPedPropIndexes", GetAllPedPropIndexes);
globalThis.exports("GetPedCoords", GetPedCoords);
globalThis.exports("RestrictPlayerMovement", RestrictPlayerMovement);
globalThis.exports(
  "SetAllPedComponentVariations",
  SetAllPedComponentVariations
);
globalThis.exports("SetAllPedPropIndexes", SetAllPedPropIndexes);
