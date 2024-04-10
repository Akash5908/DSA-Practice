const reverseString = require('./reverse-string')

test('Reversing "Hello"', () => {
  expect(reverseString('Hello')).toBe('olleH')
})

test('Reversing "JavaScript"', () => {
  expect(reverseString('JavaScript')).toBe('tpircSavaJ')
})

test('Reversing "12345"', () => {
  expect(reverseString('12345')).toBe('54321')
})
