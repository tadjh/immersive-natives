/**
 * Set all ped prop indexes at once.
 * @param ped Player Ped Id
 * @param variations Array of componentId, drawableId, textureId, attached arrays. You can pass a null value to skip a prop.
 */
export function SetAllPedPropIndexes(
  ped: number,
  variations: ([number, number, number, boolean] | null)[]
) {
  for (let variation of variations) {
    if (!variation) continue;
    SetPedPropIndex(ped, ...variation);
  }
}
