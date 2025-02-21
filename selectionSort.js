// selection Sort

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i; // Assume the current index is the smallest

    // Find the smallest element in the remaining array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap if a smaller element is found
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// Example usage
const numbers = [64, 25, 12, 22, 11];
console.log(selectionSort(numbers)); // Output: [11, 12, 22, 25, 64]
