import { PropId, PropVariation } from "./types";
import { GetDefaultPropVariation } from "./GetDefaultPropVariation";

export function RemovePedPropIndex(
  ped: number,
  propIndex: PropId,
  variation?: PropVariation
) {
  const nextVariation = variation ?? GetDefaultPropVariation(propIndex);
  SetPedPropIndex(ped, ...nextVariation);
}
