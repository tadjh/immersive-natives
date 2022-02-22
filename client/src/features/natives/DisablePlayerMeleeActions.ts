import {
  INPUT_ATTACK,
  INPUT_ATTACK2,
  INPUT_MELEE_ATTACK1,
  INPUT_MELEE_ATTACK2,
  INPUT_MELEE_ATTACK_ALTERNATE,
  INPUT_MELEE_ATTACK_HEAVY,
  INPUT_MELEE_ATTACK_LIGHT,
  INPUT_MELEE_BLOCK,
  PLAYER_CONTROL,
} from "../../constants";

/**
 * Disable player melee actions for the current frame
 */
export const DisablePlayerMeleeActions = () => {
  DisableControlAction(PLAYER_CONTROL, INPUT_ATTACK, true);
  DisableControlAction(PLAYER_CONTROL, INPUT_MELEE_ATTACK_LIGHT, true);
  DisableControlAction(PLAYER_CONTROL, INPUT_MELEE_ATTACK_HEAVY, true);
  DisableControlAction(PLAYER_CONTROL, INPUT_MELEE_ATTACK_ALTERNATE, true);
  DisableControlAction(PLAYER_CONTROL, INPUT_MELEE_BLOCK, true);
  DisableControlAction(PLAYER_CONTROL, INPUT_ATTACK2, true);
  DisableControlAction(PLAYER_CONTROL, INPUT_MELEE_ATTACK1, true);
  DisableControlAction(PLAYER_CONTROL, INPUT_MELEE_ATTACK2, true);
};
