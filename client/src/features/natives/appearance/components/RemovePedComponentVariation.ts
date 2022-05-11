import { ComponentId, ComponentVariation } from "./types";
import { GetDefaultComponentVariation } from "./GetDefaultComponentVariation";

export function RemovePedComponentVariation(
  ped: number,
  componentId: ComponentId,
  variation?: ComponentVariation
) {
  const nextVariation = variation ?? GetDefaultComponentVariation(componentId);
  SetPedComponentVariation(ped, ...nextVariation);
}
