// bubbleSort implementation 

// function bubbleSort(arr) {
//   for (let index = arr.length - 1; index >= 0; index--) {
//     for (let j = 0; j <= index - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         //swap
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

//optimize with noSwap - if in the inner loop there is so swaps, the array is sorted
function bubbleSort(arr) {
  let noSwap;
  for (let index = arr.length - 1; index >= 0; index--) {
    noSwap = true;
    for (let j = 0; j <= index - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

console.log(bubbleSort([29, 37, 45, 8]));
