function isPalindrome(str) {
  let formatStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  let revStr = formatStr.split('').reverse().join('')
  return revStr === formatStr
}

module.exports = isPalindrome
