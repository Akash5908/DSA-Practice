function arrayIntersection(arr1, arr2) {
  let newArr = []
  for (let a of arr1) {
    if (arr2.includes(a)) newArr.push(a)
  }
  return newArr
}

module.exports = arrayIntersection
