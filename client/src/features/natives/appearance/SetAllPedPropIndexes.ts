/**
 * Set all ped prop indexes at once.
 * @param ped Player Ped Id
 * @param variations Array of componentId, drawableId, textureId, attached arrays. You can pass a null value to skip a prop.
 */
export function SetAllPedPropIndexes(
  ped: number,
  variations: { [key: string]: [number, number, number, boolean] | null }
) {
  for (let key in variations) {
    const variation = variations[key];
    if (!variation) continue;
    SetPedPropIndex(ped, ...variation);
  }
}
