// Shuffling - procedure used to randomize an array.
// The key property is that each item should have an equal probability to end up in any index.

// Solution here - *Fisher-Yates shuffle*
// Time complexity: O(n)
// It goes from 0 - (n-1) and at each index i pick a random number between 0 - n-i and move the element at the result into the i + thisRandomNumber 'th location in the array.

// Key properties:

// Probability any item makes it to the first position = 1/n
// Probability any item makes it into the second position:
// = didn't make it into the first * makes it into the second
// = (n-1)/(n) * 1/(n-1) = 1/n
import { getRandom } from "../utils/utils";

function shuffleInPlace<T>(array: T[]): T[] {
  // if it's 1 or 0 items, just return the array
  if (array.length <= 1) return array;

  // for each index in array
  for (let i = 0; i < array.length; i++) {
    // choose a random not-yet placed item to place there
    // must be an item AFTER the current item, because the stuff before
    // has all already been placed
    const randomChoiceIndex = getRandom(i, array.length - 1);

    // place our random chice in the spot by swapping
    [array[i], array[randomChoiceIndex]] = [array[randomChoiceIndex], array[i]];
  }

  return array;
}

export = shuffleInPlace;
