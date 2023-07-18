function longestWord(phrase) {
  let array = phrase.replace(/[, ]+/g, " ").trim().split(" ");

  return array.reduce((word, arrItem) => {
    if (word.length < arrItem.length) {
      return arrItem
    }

    return word;
  }, '')
}

console.log(longestWord("Practicing some javascript"));