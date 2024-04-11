function findMissingNumber(arr) {
  let sum = ((arr.length + 1) * (arr.length + 1 + 1)) / 2

  let no = 0
  for (let i = 0; i < arr.length; i++) {
    no += arr[i]
  }

  return sum - no
}

module.exports = findMissingNumber
