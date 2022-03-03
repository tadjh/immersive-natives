import {
  DisablePlayerDuck,
  DisablePlayerJump,
  DisablePlayerMeleeActions,
  DisablePlayerSprint,
  EnablePlayerMovement,
  GetAllPedComponentVariations,
  GetAllPedPropIndexes,
  GetNumberOfAllPedDrawableVariations,
  GetNumberOfAllPedPropDrawableVariations,
  GetPedCoords,
  RemovePedHat,
  RemovePedMask,
  RestrictPlayerMovement,
  SetAllPedComponentVariations,
  SetAllPedPropIndexes,
} from "./features/natives";

// Exports

// Appearance
globalThis.exports(
  "GetAllPedComponentVariations",
  GetAllPedComponentVariations
);
globalThis.exports("GetAllPedPropIndexes", GetAllPedPropIndexes);
globalThis.exports(
  "GetNumberOfAllPedDrawableVariations",
  GetNumberOfAllPedDrawableVariations
);
globalThis.exports(
  "GetNumberOfAllPedPropDrawableVariations",
  GetNumberOfAllPedPropDrawableVariations
);
globalThis.exports("RemovePedHat", RemovePedHat);
globalThis.exports("RemovePedMask", RemovePedMask);
globalThis.exports(
  "SetAllPedComponentVariations",
  SetAllPedComponentVariations
);
globalThis.exports("SetAllPedPropIndexes", SetAllPedPropIndexes);

// Combat
globalThis.exports("DisablePlayerMeleeActions", DisablePlayerMeleeActions);

// Location
globalThis.exports("GetPedCoords", GetPedCoords);

// Movement
globalThis.exports("DisablePlayerDuck", DisablePlayerDuck);
globalThis.exports("DisablePlayerJump", DisablePlayerJump);
globalThis.exports("DisablePlayerSprint", DisablePlayerSprint);
globalThis.exports("EnablePlayerMovement", EnablePlayerMovement);
globalThis.exports("RestrictPlayerMovement", RestrictPlayerMovement);
