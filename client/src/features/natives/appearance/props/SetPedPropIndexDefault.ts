import { GetDefaultPropVariation } from "./GetDefaultPropVariation";
import { PropId, PropType } from "./types";
import { isPropType } from "./utils";
import { PropNameToId } from "./PropNameToId";

export function SetPedPropIndexDefault(ped: number, prop: PropType | PropId) {
  let propId = null;

  if (isPropType(prop)) {
    propId = PropNameToId(prop);
  } else {
    propId = prop;
  }

  SetPedPropIndex(ped, ...GetDefaultPropVariation(propId));
}
