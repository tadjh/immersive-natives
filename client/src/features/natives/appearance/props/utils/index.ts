import { PropType, PropId } from "../types";

export function isPropType(prop: PropType | PropId): prop is PropType {
  return (prop as PropType).length !== undefined;
}

export function shouldSkipProp(propId: PropId) {
  return propId === 3 || propId === 4 || propId === 5;
}
