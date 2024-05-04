// function power(num, p) {
    
// }

const power = (num, p) => p === 1 ? num : num * power(num, p-1)

module.exports = power;
