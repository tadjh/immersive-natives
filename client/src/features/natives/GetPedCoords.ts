import { Vector3Tuple } from "../../types";

/**
 * Get the current ped's coordinates
 * @param ped (Optional) The current ped id
 * @returns The coordinates for current ped
 */
export const GetPedCoords = (ped?: number): Vector3Tuple =>
  GetEntityCoords(ped || PlayerPedId(), true) as Vector3Tuple;
