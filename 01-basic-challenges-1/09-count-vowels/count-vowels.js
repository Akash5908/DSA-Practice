function countVowels(str) {
  const words = str.toLowerCase().split('')
  console.log(words)
  let count = 0
  for (let i = 0; i < words.length; i++) {
    if (
      words[i] === 'a' ||
      words[i] === 'e' ||
      words[i] === 'i' ||
      words[i] === 'o' ||
      words[i] === 'u'
    ) {
      count++
    }
  }
  return count
}

module.exports = countVowels
