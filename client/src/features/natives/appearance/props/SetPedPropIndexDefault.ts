import { GetDefaultPropVariation } from "./GetDefaultPropVariation";
import { PropId, PropType } from "./types";
import { isPropType } from "./utils";
import { PropNameToId } from "./PropNameToId";

export function SetPedPropIndexDefault(ped: number, prop: PropType | PropId) {
  if (isPropType(prop)) {
    const propId = PropNameToId(prop);
    return SetPedPropIndex(ped, ...GetDefaultPropVariation(propId));
  }
  SetPedPropIndex(ped, ...GetDefaultPropVariation(prop));
}
