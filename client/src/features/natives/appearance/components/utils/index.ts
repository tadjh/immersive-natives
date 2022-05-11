import { ComponentType, ComponentId } from "../types";

export function isComponentType(
  component: ComponentType | ComponentId
): component is ComponentType {
  return (component as ComponentType).length !== undefined;
}
