// Based on https://basarat.gitbooks.io/algorithms/content/docs/basics/tips.html

export function getRandom(floor: number, ceiling: number) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}
