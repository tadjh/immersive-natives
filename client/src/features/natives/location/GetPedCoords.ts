/**
 * Get the current ped's coordinates
 * @param ped (Optional) The current ped id
 * @returns The coordinates for current ped
 */
export const GetPedCoords = (ped?: number): [number, number, number] =>
  GetEntityCoords(ped || PlayerPedId(), true) as [number, number, number];
