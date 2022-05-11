type ComponentId = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

type ComponentVariation = [number, number, number, number];
const DEFAULT_FACE: ComponentVariation = [0, 0, 0, 2];
const NO_MASK: ComponentVariation = [1, 0, 0, 2];
const NO_HAIR: ComponentVariation = [2, 0, 0, 2];
const DEFAULT_ARMS: ComponentVariation = [3, 0, 0, 2];
const DEFAULT_PANTS: ComponentVariation = [4, 0, 0, 2];
const NO_BAG: ComponentVariation = [5, 0, 0, 2];
const DEFAULT_SHOES: ComponentVariation = [6, 0, 0, 2];
const NO_NECKWEAR: ComponentVariation = [7, 0, 0, 2];
const DEFAULT_UNDERSHIRT: ComponentVariation = [8, 0, 0, 2];
const NO_VEST: ComponentVariation = [9, 0, 0, 2];
const NO_DECALS: ComponentVariation = [10, 0, 0, 2];
const DEFAULT_TOP: ComponentVariation = [11, 0, 0, 2];

function getFallback(id: ComponentId): ComponentVariation {
  switch (id) {
    case 0:
      return DEFAULT_FACE;
    case 1:
      return NO_MASK;
    case 2:
      return NO_HAIR;
    case 3:
      return DEFAULT_ARMS;
    case 4:
      return DEFAULT_PANTS;
    case 5:
      return NO_BAG;
    case 6:
      return DEFAULT_SHOES;
    case 7:
      return NO_NECKWEAR;
    case 8:
      return DEFAULT_UNDERSHIRT;
    case 9:
      return NO_VEST;
    case 10:
      return NO_DECALS;
    case 11:
      return DEFAULT_TOP;
    default:
      throw new Error("Invalid id in Component getFallback");
  }
}

export function RemovePedComponentVariation(
  ped: number,
  componentId: ComponentId,
  variation?: [number, number, number, number]
) {
  const nextVariation = variation ?? getFallback(componentId);
  SetPedComponentVariation(ped, ...nextVariation);
}
