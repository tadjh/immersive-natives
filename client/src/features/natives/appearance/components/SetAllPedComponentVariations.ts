import { SetPedComponentVariationDefault } from "./SetPedComponentVariationDefault";
import { ComponentType, ComponentVariations } from "./types";

/**
 * Set all ped component variations at once.
 * @param ped The Player Ped Id
 * @param variations Object component variations. You can pass a null value to skip a component.
 * @param setDefault Will set component to default variation if unset in variations object
 */
export function SetAllPedComponentVariations(
  ped: number,
  variations: ComponentVariations,
  setDefault?: boolean
) {
  for (let key in variations) {
    const variation = variations[key as ComponentType];
    if (setDefault && !variation)
      return SetPedComponentVariationDefault(ped, key as ComponentType);
    if (!variation) continue;
    SetPedComponentVariation(ped, ...variation);
  }
}
