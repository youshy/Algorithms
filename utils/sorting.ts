// Sorting
// One option would be to use built-in *sort* method because of O(n log n) complexity. Bear in mind - mutates the input array

let asc = [2, 5, -134, 23, 55, -40];
asc.sort((a, b) => a - b); // ascending sort

// both methods yields the same result
let desc1 = [24, 21, -23, -343, 2, 0];
let desc2 = [...desc1];
desc1.sort((a, b) => b - a);
desc2.sort((a, b) => a - b).reverse();

// Insertion sort
// sorting Left to Right - the same humans naturally sort cards.
/**
 * Time complexity: O(N^2)
 */
export function insertionSort<T>(
  array: T[],
  cmp: { (a: T, b: T): number } = (a: any, b: any) => a - b
): T[] {
  var current: T;
  var j: number;
  for (var i = 1; i < array.length; i += 1) {
    current = array[i];
    j = i - 1;
    while (j >= 0 && cmp(array[j], current) > 0) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = current;
  }
  return array;
}
