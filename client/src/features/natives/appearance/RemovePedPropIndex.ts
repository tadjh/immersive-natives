type PropIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

type PropVariation = [number, number, number, boolean];

const NO_HAT: PropVariation = [0, -1, -1, true];
const NO_GLASSES: PropVariation = [1, -1, -1, true];
const NO_EARRINGS: PropVariation = [2, -1, -1, true];
const NO_WATCHES: PropVariation = [6, -1, -1, true];
const NO_BRACELETS: PropVariation = [7, -1, -1, true];

function getFallback(id: PropIndex): PropVariation {
  switch (id) {
    case 0:
      return NO_HAT;
    case 1:
      return NO_GLASSES;
    case 2:
      return NO_EARRINGS;
    case 6:
      return NO_WATCHES;
    case 7:
      return NO_BRACELETS;
    default:
      throw new Error("Invalid id in Prop getFallback");
  }
}

export function RemovePedPropIndex(
  ped: number,
  propIndex: PropIndex,
  variation?: PropVariation
) {
  const nextVariation = variation ?? getFallback(propIndex);
  SetPedPropIndex(ped, ...nextVariation);
}
