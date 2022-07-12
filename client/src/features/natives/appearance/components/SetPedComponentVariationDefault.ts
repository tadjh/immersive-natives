import { ComponentType, ComponentId } from "./types";
import { isComponentType } from "./utils";
import { ComponentNameToId } from "./ComponentNameToId";
import { GetDefaultComponentVariation } from "./GetDefaultComponentVariation";

export function SetPedComponentVariationDefault(
  ped: number,
  component: ComponentType | ComponentId
) {
  if (isComponentType(component)) {
    const componentId = ComponentNameToId(component);
    return SetPedComponentVariation(
      ped,
      ...GetDefaultComponentVariation(componentId)
    );
  }
  SetPedComponentVariation(ped, ...GetDefaultComponentVariation(component));
}
