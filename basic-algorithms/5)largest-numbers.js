// Return Largest Numbers in Arrays
//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
  let largestArray = [];
  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i];
    let largest = subArr[0];
    for (let j = 0; j < subArr.length; j++) {
      if (subArr[j] >= largest) {
        largest = subArr[j];
      }
    }
    largestArray.push(largest);
  }
  return largestArray;
}
