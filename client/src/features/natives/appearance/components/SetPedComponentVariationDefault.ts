import { ComponentType, ComponentId } from "./types";
import { isComponentType } from "./utils";
import { ComponentNameToId } from "./ComponentNameToId";
import { GetDefaultComponentVariation } from "./GetDefaultComponentVariation";

export function SetPedComponentVariationDefault(
  ped: number,
  component: ComponentType | ComponentId
) {
  let componentId = null;

  if (isComponentType(component)) {
    componentId = ComponentNameToId(component);
  } else {
    componentId = component;
  }

  SetPedComponentVariation(ped, ...GetDefaultComponentVariation(componentId));
}
