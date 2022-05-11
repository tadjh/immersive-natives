import { SetPedPropIndexDefault } from "./SetPedPropIndexDefault";
import { PropType, PropVariation } from "./types";

/**
 * Set all ped prop indexes at once.
 * @param ped Player Ped Id
 * @param variations Array of componentId, drawableId, textureId, attached arrays. You can pass a null value to skip a prop.
 */
export function SetAllPedPropIndexes(
  ped: number,
  variations: { [key in PropType]: PropVariation | null },
  setDefault?: boolean
) {
  for (let key in variations) {
    const variation = variations[key as PropType];
    if (setDefault && !variation)
      return SetPedPropIndexDefault(ped, key as PropType);
    if (!variation) continue;
    SetPedPropIndex(ped, ...variation);
  }
}
