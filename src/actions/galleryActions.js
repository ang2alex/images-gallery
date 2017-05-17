export const CHANGE_RATE = 'CHANGE_RATE';

export function changeRate(index, value) {
  return {type: CHANGE_RATE, index, value};
}
