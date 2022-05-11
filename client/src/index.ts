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
  RemovePedPropIndex,
  RemovePedComponentVariation,
  RestrictPlayerMovement,
  SetAllPedComponentVariations,
  SetAllPedPropIndexes,
  ComponentIdToName,
  ComponentNameToId,
  GetDefaultComponentVariation,
  SetPedComponentVariationDefault,
  GetDefaultPropVariation,
  PropIdToName,
  PropNameToId,
  SetPedPropIndexDefault,
} from "./features/natives";

// appearance/components
globalThis.exports("ComponentIdToName", ComponentIdToName);
globalThis.exports("ComponentNameToId", ComponentNameToId);
globalThis.exports(
  "GetAllPedComponentVariations",
  GetAllPedComponentVariations
);
globalThis.exports(
  "GetDefaultComponentVariation",
  GetDefaultComponentVariation
);
globalThis.exports(
  "GetNumberOfAllPedDrawableVariations",
  GetNumberOfAllPedDrawableVariations
);
globalThis.exports("RemovePedComponentVariation", RemovePedComponentVariation);
globalThis.exports(
  "SetAllPedComponentVariations",
  SetAllPedComponentVariations
);
globalThis.exports(
  "SetPedComponentVariationDefault",
  SetPedComponentVariationDefault
);

// appearance/props
globalThis.exports("GetAllPedPropIndexes", GetAllPedPropIndexes);
globalThis.exports("GetDefaultPropVariation", GetDefaultPropVariation);
globalThis.exports(
  "GetNumberOfAllPedPropDrawableVariations",
  GetNumberOfAllPedPropDrawableVariations
);
globalThis.exports("PropIdToName", PropIdToName);
globalThis.exports("PropNameToId", PropNameToId);
globalThis.exports("RemovePedPropIndex", RemovePedPropIndex);
globalThis.exports("SetAllPedPropIndexes", SetAllPedPropIndexes);
globalThis.exports("SetPedPropIndexDefault", SetPedPropIndexDefault);

// combat
globalThis.exports("DisablePlayerMeleeActions", DisablePlayerMeleeActions);

// location
globalThis.exports("GetPedCoords", GetPedCoords);

// movement
globalThis.exports("DisablePlayerDuck", DisablePlayerDuck);
globalThis.exports("DisablePlayerJump", DisablePlayerJump);
globalThis.exports("DisablePlayerSprint", DisablePlayerSprint);
globalThis.exports("EnablePlayerMovement", EnablePlayerMovement);
globalThis.exports("RestrictPlayerMovement", RestrictPlayerMovement);
