function reverseString(str) {


return str === '' ? '':  reverseString(str.substr(1)) + str.charAt(0)
}

module.exports = reverseString;
