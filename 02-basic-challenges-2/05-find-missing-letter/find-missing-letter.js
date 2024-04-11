function findMissingLetter(arr) {
  let start = arr[0].charCodeAt(0)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charCodeAt(0) !== start) return String.fromCharCode(start)
    start += 1
  }
}

module.exports = findMissingLetter
