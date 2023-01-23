// Return the length of the longest word in the provided sentence.
//Your response should be a number.

function findLongestWordLength(str) {
  const arr = str.split(" ");
  let longestWord = 0;

  const sentence = arr.map((word) => {
    if (word.length > longestWord) {
      longestWord = word.length;
    }
  });
  return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
